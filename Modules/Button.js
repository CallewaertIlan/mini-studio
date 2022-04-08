import Batiment from "./Batiment.js"

export default class Button {
  constructor(x, y, attractionImg) {
    this.x = x
    this.y = y
    this.attractionImg = attractionImg
  }

  create(scene) {
    this.scene = scene
    this.cadenas = scene.add.sprite(this.x, this.y, 'cadenas').setInteractive()
    this.cadenas.attractionImg = this.attractionImg
    this.cadenas.on('pointerdown', this.displayAttraction)
  }

  update() {
    
  }

  displayAttraction() {
    let building = new Batiment(this.x, this.y, this.attractionImg)
    building.create(this.scene)
    this.setActive(false).setVisible(false);
  }
}