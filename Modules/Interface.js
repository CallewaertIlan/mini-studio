export default class Interface {
  constructor(coins, satisfaction, visiteurMax, visiteur) {
    this.coins = coins
    this.satisfaction = satisfaction
    this.visiteur = visiteur
    this.visiteurMax = visiteurMax
  }

  preload() {
    
  }

  create(scene) {
    this.scene = scene
    this.textCoins = this.scene.add.text(40, 29, "Coins : " + this.coins, { font: "17px Varela Round", fill: "#FFFFFF" });
    this.textSatisfaction = this.scene.add.text(30, 47, "Satisfaction : " + this.satisfaction, { font: "17px Varela Round", fill: "#FFFFFF" });
    this.textVisiteur = this.scene.add.text(65, 120, this.visiteur + " / " + this.visiteurMax, { font: "17px Varela Round", fill: "#FFFFFF" });
  }

  update() {
    this.textCoins.text = "Coins : " + this.coins
    this.textSatisfaction.text = "Satisfaction : " + this.satisfaction
    this.textVisiteur.text = this.visiteur + ' / ' + this.visiteurMax
  }

  addCoins(addCoin) {
    this.coins += addCoin
  }

  setVisiteurs(setVisiteur) {
    this.visiteur = setVisiteur
  }

  setMaxVisiteurs(setMaxVisiteur) {
    this.visiteurMax = setMaxVisiteur
  }
}
