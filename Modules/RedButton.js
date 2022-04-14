export default class RedButton {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  create(scene) {
    this.scene = scene
    this.padlock = this.scene.scene.add.sprite(this.x, this.y, "redButton").setInteractive()
    this.padlock.attractionImage = this.attractionImage
    this.padlock.on("pointerdown", this.blast)
  }

  update() {}

  blast() {
    console.log("Blast")
  }
}