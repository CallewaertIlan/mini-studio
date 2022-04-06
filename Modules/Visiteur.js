export default class Visiteur {
  constructor(x, y, skin) {
    this.x = x
    this.y = y
    this.skin = skin
  }

  create(scene) {
    this.player = new Phaser.Physics.Matter.Sprite(scene.matter.world, this.x, this.y, 'personnages', this.skin)
    scene.add.existing(this.player)
  }
}
