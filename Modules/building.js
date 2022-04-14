export default class Building {
  constructor(x, y, skin, index, price) {
    this.x = x
    this.y = y
    this.skin = skin
    this.price = price
    this.index = index
  }

  create(scene) {
    this.scene = scene
    this.scene.add.image(this.x, this.y, this.skin)
    this.scene.player.listAttractionUnlock[this.index] = 1
  }

  update() {}
}
