import Visitor from "./visitor.js"

export default class Player {
  constructor() {
    this.entitiesList = []
  }

  create(scene) {
    this.scene = scene
    this.characterTime = this.scene.time.now
    this.maxCharacters = 5
    this.spawnTime = 4000
    this.price = 1

    for (let i = 0; i < 1; i++) {
      this.entitiesList.push(new Visitor(-20 * i, 375, this.entitiesList.length, this.price))
    }

    for (let i = 0; i < this.entitiesList.length; i++) {
        this.entitiesList[i].create(this.scene)
    }
  }

  update() {
    this.scene.entitiesList = this.entitiesList
    if (this.characterTime + this.spawnTime <= this.scene.time.now && this.maxCharacters > this.entitiesList.length) {
      this.characterTime = this.scene.time.now
      this.newVisitor(-20, 375)
    }

    for (let i = 0; i < this.entitiesList.length; i++) {
        this.entitiesList[i].update()
    }

    this.scene.interface.setVisitors(this.entitiesList.length)
    this.scene.interface.setMaxVisitors(this.maxCharacters)
  }

  newVisitor(x, y) {
    this.scene.interface.addCoins(10)
    this.entitiesList.push(new Visitor(x, y, this.entitiesList.length, this.price))
    this.entitiesList[this.entitiesList.length - 1].create(this.scene)
  }
}