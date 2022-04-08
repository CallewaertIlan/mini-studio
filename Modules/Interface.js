export default class Interface {
  constructor(coins, satisfaction) {
    this.coins = coins
    this.satisfaction = 0
  }

  

  preload() {
    
  }

  create(scene) {
    scene.add.text(40, 29, "Coins : " + this.coins, { font: "17px Varela Round", fill: "#FFFFFF" });
    scene.add.text(30, 47, "Satisfaction : " + this.satisfaction, { font: "17px Varela Round", fill: "#FFFFFF" });
  }




  update() {

  }
}
