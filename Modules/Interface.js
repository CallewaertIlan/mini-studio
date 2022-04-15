export default class Interface {
  constructor(coins, satisfaction, visitors, maxVisitors) {
    this.coins = coins
    this.satisfaction = satisfaction
    this.visitors = visitors
    this.maxVisitors = maxVisitors
  }

  create(scene) {
    this.scene = scene
    this.textCoins = this.scene.add.text(40, 29, "Coins : " + this.coins, { font: "17px Varela Round", fill: "#FFFFFF" })
    this.textSatisfaction = this.scene.add.text(22, 47, "Satisfaction : " + this.satisfaction, { font: "17px Varela Round", fill: "#FFFFFF" })
    this.textVisitors = this.scene.add.text(65, 120, this.visitors + " / " + this.maxVisitors, { font: "17px Varela Round", fill: "#FFFFFF" })
  }

  update() {
    this.textCoins.text = "Coins : " + this.coins
    this.textSatisfaction.text = "Satisfaction : " + this.satisfaction
    this.textVisitors.text = this.visitors + " / " + this.maxVisitors
  }

  addCoins(addCoins) {
    this.coins += addCoins
  }

  setVisitors(setVisitors) {
    this.visitors = setVisitors
  }

  setMaxVisitors(setMaxVisitors) {
    this.maxVisitors = setMaxVisitors
  }
}