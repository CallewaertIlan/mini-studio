import Visiteur from "./Visiteur.js"

export default class You {
  constructor() {
    this.listEntities = []
  }

  create(scene) {
    this.scene = scene
    this.persoTimer = this.scene.time.now
    this.persoMax = 15
    this.spawnTime = 5000

    // création d'un visiteur
    for (let index = 0; index < 2; index++) {
      this.listEntities.push(new Visiteur(-100 * index, 375))
    }

    for (let index = 0; index < this.listEntities.length; index++) {
        this.listEntities[index].create(this.scene)
    }
  }

  update() {
    if (this.persoTimer + this.spawnTime <= this.scene.time.now && this.persoMax > this.listEntities.length) {
      this.persoTimer = this.scene.time.now
      this.newVisiteur(-100, 375)
    }

    for (let index = 0; index < this.listEntities.length; index++) {
        this.listEntities[index].update()
    }

    console.log(this.listEntities.length)
    this.scene.interface.setVisiteurs(this.listEntities.length)
    this.scene.interface.setMaxVisiteurs(this.persoMax)
  }

  newVisiteur(x, y) {
    this.scene.interface.addCoins(10)
    this.listEntities.push(new Visiteur(x, y))
    this.listEntities[this.listEntities.length - 1].create(this.scene)
  }
}