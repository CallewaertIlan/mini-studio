export default class Visitor {
  constructor(x, y, index, price) {
    this.x = x
    this.y = y
    this.index = index
    this.price = price
    this.charactersNamesList = ["perso1-1", "perso2-1", "perso3-1"]
    this.skin = this.charactersNamesList[Math.floor(Math.random() * 3)]
    this.path = []
    this.moveX = 0
    this.moveY = 0
    this.side = "right"
    this.moveList = [
      [275, 404],
      [275, 211],
      [674, 211],
      [1055, 211],
      [1120, 211],
      [1120, 325],
      [1120, 485],
      [815, 485],
      [275, 485],
      [275, 410],
      [0, 410],
    ]
    this.attractionPosition = 0
  }

  create(scene) {
    this.scene = scene
    this.player = new Phaser.Physics.Matter.Sprite(scene.matter.world, this.x, this.y, "personnages", this.skin)
    // this.player.body.collisionFilter.category = 0
    this.scene.add.existing(this.player)

    for (let i = 0; i < 3; i++) {
      this.path.push(this.addPath())
    }
    
    this.path.sort()
    console.log(this.path)

    this.player.setVelocityX(1)
    this.counter = 0
  }

  update() {
    this.moveToAttraction()
  }

  animation(name) {
    if (this.skin == "perso1-1") {
      this.player.anims.play(name, true)
    }
    else if (this.skin == "perso2-1") {
      this.player.anims.play(name, true)
    }
    else if (this.skin == "perso3-1") {
      this.player.anims.play(name, true)
    }
  }

  addPath() {
    let rand = Math.floor(Math.random() * 7)
    if (this.path.indexOf(rand, 0) == -1) {
      return rand
    }
    else {
      return this.addPath()
    }
  }

  stopMove() {
    this.player.setVelocityX(0)
    this.player.setVelocityY(0)
  }

  moveToX(x) {
    this.player.setVelocityX(x)
  }

  moveToY(y) {
    this.player.setVelocityY(y)
  }

  checkAnimation() {
    switch (this.skin) {
      case "perso1-1":
        this.number = 1
        break
      case "perso2-1":
        this.number = 2
        break
      case "perso3-1":
        this.number = 3
        break
    }

    if (this.side === "right") {
      this.animation("perso-walk-" +  this.number)
    }
    else {
      this.animation("perso-walk-reverse-" + this.number)
    }
  }

  moveInX(x) {
    this.checkAnimation()
    if (this.moveList[this.attractionPosition][0] >= this.player.x - 2 &&  this.moveList[this.attractionPosition][0] <= this.player.x + 2) {
      this.moveToX(0)
      this.attractionPosition += 1
      this.timeAttraction = this.scene.time.now
    }
    else {
      this.moveToX(x)
    }
  }

  moveInY(y) {
    this.checkAnimation()    
    if (this.moveList[this.attractionPosition][1] >= this.player.y - 2 &&  this.moveList[this.attractionPosition][1] <= this.player.y + 2) {
      this.moveToY(0)
      this.attractionPosition += 1
      this.timeAttraction = this.scene.time.now
    }
    else {
      this.moveToY(y)
    }
  }
  
  moveToAttraction() {
    if (this.attractionPosition === 0) {
      this.moveInX(1)
    }
    else if (this.attractionPosition === 1) {
      this.moveInY(-1)
    }
    else if (this.path.find(element => element === 0) != undefined) {
      this.stopAttraction()
    }
    else if (this.attractionPosition === 2) {
      this.moveInX(1)
    }
    else if (this.path.find(element => element === 1) != undefined) {
      this.stopAttraction()
    }
    else if (this.attractionPosition === 3) {
      this.moveInX(1)
    }
    else if (this.path.find(element => element === 2) != undefined) {
      this.stopAttraction()
    }
    else if (this.attractionPosition === 4) {
      this.moveInX(1)
    }
    else if (this.attractionPosition === 5) {
      this.moveInY(1)
    }
    else if (this.path.find(element => element === 3) != undefined) {
      this.stopAttraction()
    }
    else if (this.attractionPosition === 6) {
      this.moveInY(1)
    }
    else if (this.path.find(element => element === 4) != undefined) {
      this.stopAttraction()
    }
    else if (this.attractionPosition === 7) {
      this.side = "left"
      this.moveInX(-1)
    }
    else if (this.path.find(element => element === 5) != undefined) {
      this.stopAttraction()
    }
    else if (this.attractionPosition === 8) {
      this.moveInX(-1)
    }
    else if (this.path.find(element => element === 6) != undefined) {
      this.stopAttraction()
    }
    else if (this.attractionPosition === 9) {
      this.moveInY(-1)
    }
    else if (this.attractionPosition === 10) {
      this.moveInX(-1)
    }
    else {
      this.deleteFromList()
    }
  }
  
  deleteFromList() {
    let listEntities = this.scene.entitiesList
    for (let index = 0; index < listEntities.length; index++) {
      if (index === 0) {
        this.player.destroy()
      }
      else {
        listEntities[index].index -= 1
      }
    }
    listEntities.shift()
    this.scene.entitiesList = listEntities
  }

  stopAttraction() {
    if (this.timeAttraction + 2000 <= this.scene.time.now) {
      this.scene.interface.coins += this.price * 10
      this.path.shift()
    }
    else {
      this.stopMove()
    }
  }
}