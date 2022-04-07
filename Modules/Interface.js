export default class Interface {
  constructor(coins) {
    this.coins = coins
  }

  preload() {
        
  }

  create(scene) {
    scene.add.text(40, 37, "Coins : " + this.coins, { font: "20px Arial", fill: "#FFFFFF" });
  }

  update() {

  }
}
