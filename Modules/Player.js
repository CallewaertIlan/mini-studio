import Visiteur from "./Visiteur.js"

export default class You {
  constructor() {
    this.listEntities = []
  }

  create(scene) {
    this.scene = scene
    this.persoTimer = this.scene.time.now
    // création d'un visiteur
    for (let index = 0; index < 2; index++) {
      this.listEntities.push(new Visiteur(-100 * index, 375))
    }

    for (let index = 0; index < this.listEntities.length; index++) {
        this.listEntities[index].create(this.scene)
    }
  }

  update() {

    console.log(this.scene.time.now) 
    console.log(this.scene.time.now) 
    if (this.persoTimer + 5000 <= this.scene.time.now) {
      this.persoTimer = this.scene.time.now
      this.newVisiteur(-100, 375)
    }

    for (let index = 0; index < this.listEntities.length; index++) {
        this.listEntities[index].update()
    }
  }

  newVisiteur(x, y) {
    this.listEntities.push(new Visiteur(x, y))
    this.listEntities[this.listEntities.length - 1].create(this.scene)
  }
}