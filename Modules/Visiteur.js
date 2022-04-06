export default class Visiteur {
  constructor(x, y, skin) {
    this.x = x
    this.y = y
    this.skin = skin
    this.path = []
  }

  create(scene) {
    this.player = new Phaser.Physics.Matter.Sprite(scene.matter.world, this.x, this.y, 'personnages', this.skin)
    scene.add.existing(this.player)

    for (let index = 0; index < 3; index++) {
      this.path.push(this.addPath())
    }

    console.log(this.path)

    this.path.sort()

    console.log(this.path)
  }

  update() {
    // animation du visiteur
    this.player.anims.play('perso-walk-1', true)

    // chemin qu'il suit
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
}
