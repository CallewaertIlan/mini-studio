import Visitor from "./visitor.js"

export default class Player {
  constructor() {
    this.entitiesList = []
  }

  create(scene) {
    this.scene = scene
    this.characterTime = this.scene.time.now
    this.maxCharacters = 15
    this.spawnTime = 5000

    for (let i = 0; i < 2; i++) {
      this.entitiesList.push(new Visitor(-100 * i, 375))
    }

    for (let i = 0; i < this.entitiesList.length; i++) {
        this.entitiesList[i].create(this.scene)
    }
  }

  update() {
    if (this.characterTime + this.spawnTime <= this.scene.time.now && this.maxCharacters > this.entitiesList.length) {
      this.characterTime = this.scene.time.now
      this.newVisitor(-100, 375)
    }

    for (let i = 0; i < this.entitiesList.length; i++) {
        this.entitiesList[i].update()
    }

    console.log(this.entitiesList.length)
    this.scene.interface.setVisitors(this.entitiesList.length)
    this.scene.interface.setMaxVisitors(this.maxCharacters)
  }

  newVisitor(x, y) {
    this.scene.interface.addCoins(10)
    this.entitiesList.push(new Visitor(x, y))
    this.entitiesList[this.entitiesList.length - 1].create(this.scene)
  }
}