import Batiment from "./Batiment.js"

export default class Button {
    constructor(x, y, attractionImg) {
      this.x = x
      this.y = y
      this.attractionImg = attractionImg
      console.log(this.attractionImg)
    }
  
    create(scene) {
        this.scene = scene
        this.cadenas = scene.add.sprite(670, 80, 'cadenas').setInteractive()
        this.cadenas.on('pointerdown', this.test)
    }
  
    update() {
      
    }

    test() {
        let building = new Batiment(670, 80, this.attractionImg)
        building.create(this.scene)
    }
  }

  // object.setActive(false).setVisible(false);