import Building from "./Building.js"

export default class Button {
  constructor(x, y, attractionPrice, attractionImage) {
    this.x = x
    this.y = y
    this.attractionPrice = attractionPrice
    this.attractionImage = attractionImage
  }

  create(scene) {
    this.scene = scene
    this.padlock = scene.add.sprite(this.x, this.y, "padlock").setInteractive()
    this.padlock.attractionImage = this.attractionImage
    this.padlock.attractionPrice = this.attractionPrice
    this.padlock.on("pointerdown", this.displayAttraction)
  }

  update() { }

  displayAttraction() {
    if (this.scene.interface.coins >= this.attractionPrice) {
      let building = new Building(this.x, this.y, this.attractionImage)
      building.create(this.scene)
      this.setActive(false).setVisible(false)
      this.scene.interface.coins -= this.attractionPrice
    }
  }
}