export default class Building {
  constructor(x, y, skin, price) {
    this.x = x
    this.y = y
    this.skin = skin
    this.price = price

  }

  create(scene) {
    scene.add.image(this.x, this.y, this.skin)
  }

  update() {}
}
