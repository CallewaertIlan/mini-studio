export default class Visiteur {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.listNamePerso = ['perso1-1', 'perso2-1', 'perso3-1']
    this.skin = this.listNamePerso[Math.floor(Math.random() * 3)]
    this.path = []
    this.moveX = 0
    this.moveY = 0

    this.listeDeplacement = [
      [275, 404], // 0
      [275, 211], // 1
      [674, 211], // 2
      [975, 211], // 3
      [1040, 211], // 4
      [1060, 300], // 5
      [1060, 350], // 6
      [1050, 300], // 7
      [1050, 460], // 8
      [980, 460], // 9
      [780, 460], // 10
    ]

    this.posAttraction = 0
  }

  create(scene) {
    this.player = new Phaser.Physics.Matter.Sprite(scene.matter.world, this.x, this.y, 'personnages', this.skin)
    scene.add.existing(this.player)

    // créer la liste des attractions a faire
    for (let index = 0; index < 3; index++) {
      this.path.push(this.addPath())
    }
    // trie la liste
    this.path.sort()

    console.log(this.path)

    this.player.setVelocityX(1)
    console.log(this.player.x, this.player.y)
    this.count = 0
  }

  update() {
    // animation du visiteur
    if (this.skin == 'perso1-1') {
      this.player.anims.play('perso-walk-1', true)
    }
    else if (this.skin == "perso2-1") {
      this.player.anims.play('perso-walk-2', true)
    }
    else if (this.skin == "perso3-1") {
      this.player.anims.play('perso-walk-3', true)
    }
    this.moveToAttraction()
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

  stopMovement() {
    this.player.setVelocityX(0)
    this.player.setVelocityY(0)
  }

  moveToX(x) {
    this.player.setVelocityX(x)
  }

  moveToY(y) {
    this.player.setVelocityY(y)
  }

  deplacementX(x) {
    if (this.listeDeplacement[this.posAttraction][0] >= this.player.x - 1 &&  this.listeDeplacement[this.posAttraction][0] <= this.player.x + 1) {
      this.moveToX(0)
      this.posAttraction += 1
    }
    else {
      this.moveToX(x)
    }
  }

  deplacementY(y) {
    if (this.listeDeplacement[this.posAttraction][1] >= this.player.y - 1 &&  this.listeDeplacement[this.posAttraction][1] <= this.player.y + 1) {
      this.moveToY(0)
      this.posAttraction += 1
    }
    else {
      this.moveToY(y)
    }
  }

  moveToAttraction() {
    if (this.posAttraction === 0) {
      this.deplacementX(1)
    }
    else if (this.posAttraction === 1) {
      this.deplacementY(-1)
    }
    else if (this.posAttraction === 2) {
      this.deplacementX(1)
    }
    else if (this.posAttraction === 3) {
      this.deplacementX(1)
    }
    else if (this.posAttraction === 4) {
      if (this.listeDeplacement[this.posAttraction][0] >= this.player.x - 1 &&  this.listeDeplacement[this.posAttraction][0] <= this.player.x + 1) {
        this.posAttraction += 1
      }
      else {
        this.moveToX(1)
      }
    }
    else if (this.posAttraction === 5) {
      if (this.listeDeplacement[this.posAttraction][1] >= this.player.y - 1 &&  this.listeDeplacement[this.posAttraction][1] <= this.player.y + 1) {
        this.moveToY(0)
        this.posAttraction += 1
      }
      else {
        this.moveToY(1)
      }
    }
    else if (this.posAttraction === 6) {
      if (this.listeDeplacement[this.posAttraction][1] >= this.player.y - 1 &&  this.listeDeplacement[this.posAttraction][1] <= this.player.y + 1) {
        this.posAttraction += 1
      }
      else {
        this.moveToX(0)
        this.moveToY(1)
      }
    }
    else if (this.posAttraction === 7) {
      this.deplacementX(-1)
    }
    else if (this.posAttraction === 8) {
      if (this.listeDeplacement[this.posAttraction][1] >= this.player.y - 1 &&  this.listeDeplacement[this.posAttraction][1] <= this.player.y + 1) {
        this.posAttraction += 1
      }
      else {
        this.moveToY(1)
      }
    }
    else if (this.posAttraction === 9) {
      if (this.listeDeplacement[this.posAttraction][0] >= this.player.x - 1 &&  this.listeDeplacement[this.posAttraction][0] <= this.player.x + 1) {
        this.posAttraction += 1
      }
      else {
        this.moveToX(-1)
      }
    }
    else if (this.posAttraction === 10) {
      this.moveToY(0)
      this.deplacementX(-1)
    }
    else {
      console.log(this.player.x, this.player.y)
      this.stopMovement()
    }
  }
}
