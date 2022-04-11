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
      [975, 211],
      [1040, 211],
      [1060, 300],
      [1060, 350],
      [1050, 300],
      [1050, 460],
      [980, 460],
      [780, 460],
      [275, 460],
      [275, 410],
      [-20, 410],
    ]
    this.attractionPosition = 0
  }

  create(scene) {
    this.scene = scene
    this.player = new Phaser.Physics.Matter.Sprite(scene.matter.world, this.x, this.y, "personnages", this.skin)
    this.player.body.collisionFilter.category = 0
    this.scene.add.existing(this.player)

    for (let i = 0; i < 3; i++) {
      this.path.push(this.addPath())
    }
    
    this.path.sort()

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
    if (this.moveList[this.attractionPosition][0] >= this.player.x - 1 &&  this.moveList[this.attractionPosition][0] <= this.player.x + 1) {
      this.moveToX(0)
      this.attractionPosition += 1
    }
    else {
      this.moveToX(x)
    }
  }

  moveInY(y) {
    this.checkAnimation()    
    if (this.moveList[this.attractionPosition][1] >= this.player.y - 1 &&  this.moveList[this.attractionPosition][1] <= this.player.y + 1) {
      this.moveToY(0)
      this.attractionPosition += 1
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
    else if (1 === 2) {
      this.stopMove()
    }
    else if (this.attractionPosition === 2) {
      this.moveInX(1)
    }
    else if (1 === 2) {
      this.stopMove()
    }
    else if (this.attractionPosition === 3) {
      this.moveInX(1)
    }
    else if (1 === 2) {
      this.stopMove()
    }
    else if (this.attractionPosition === 4) {
      if (this.moveList[this.attractionPosition][0] >= this.player.x - 1 &&  this.moveList[this.attractionPosition][0] <= this.player.x + 1) {
        this.attractionPosition += 1
      }
      else {
        this.moveToX(1)
      }
    }
    else if (this.attractionPosition === 5) {
      if (this.moveList[this.attractionPosition][1] >= this.player.y - 1 &&  this.moveList[this.attractionPosition][1] <= this.player.y + 1) {
        this.moveToY(0)
        this.attractionPosition += 1
      }
      else {
        this.moveToY(1)
      }
    }
    else if (1 === 2) {
      this.stopMove()
    }
    else if (this.attractionPosition === 6) {
      if (this.moveList[this.attractionPosition][1] >= this.player.y - 1 &&  this.moveList[this.attractionPosition][1] <= this.player.y + 1) {
        this.attractionPosition += 1
        this.side = "left"
      }
      else {
        this.moveToX(0)
        this.moveToY(1)
      }
    }
    else if (this.attractionPosition === 7) {
      this.moveInX(-1)
    }
    else if (this.attractionPosition === 8) {
      if (this.moveList[this.attractionPosition][1] >= this.player.y - 1 &&  this.moveList[this.attractionPosition][1] <= this.player.y + 1) {
        this.attractionPosition += 1
      }
      else {
        this.moveToY(1)
      }
    }
    else if (1 === 2) {
      this.stopMove()
    }
    else if (this.attractionPosition === 9) {
      if (this.moveList[this.attractionPosition][0] >= this.player.x - 1 &&  this.moveList[this.attractionPosition][0] <= this.player.x + 1) {
        this.attractionPosition += 1
      }
      else {
        this.moveToX(-1)
      }
    }
    else if (this.attractionPosition === 10) {
      this.moveInY(0)
      this.moveInX(-1)
    }
    else if (1 === 2) {
      this.stopMove()
    }
    else if (this.attractionPosition === 11) {
      this.moveInX(-1)
    }
    else if (1 === 2) {
      this.stopMove()
    }
    else if (this.attractionPosition === 12) {
      this.moveInY(-1)
    }
    else if (this.attractionPosition === 13) {
      this.moveInX(-1)
    }
    else {
      this.deleteFromList()
    }
  }
  
  deleteFromList() {
    for (let index = 0; index < this.scene.entitiesList.length; index++) {
      if (index === 0) {
        this.player.destroy()
      }
      else {
        this.scene.entitiesList[index].index -= 1
      }
    }
    this.scene.entitiesList.shift()
  }
}