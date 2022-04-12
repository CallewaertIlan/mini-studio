import Building from "./Building.js"

export default class Button {
  constructor(x, y, attractionImage) {
    this.x = x
    this.y = y
    this.attractionImage = attractionImage
  }

  create(scene) {
    this.scene = scene
    this.padlock = scene.add.sprite(this.x, this.y, "padlock").setInteractive()
    this.padlock.attractionImage = this.attractionImage
    this.padlock.on("pointerdown", this.displayAttraction)
  }

  update() { }

  displayAttraction() {
    let building = new Building(this.x, this.y, this.attractionImage)
    building.create(this.scene)
    this.setActive(false).setVisible(false)
  }
}