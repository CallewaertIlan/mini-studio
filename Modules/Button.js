import Building from "./building.js"

export default class Button {
  constructor(x, y, attractionImage) {
    this.x = x
    this.y = y
    this.attractionImage = attractionImage
  }

  create(scene) {
    this.scene = scene
    this.padlock = scene.add.sprite(this.x, this.y, "padlock").setInteractive()
    this.padlock.attractionImage = this.attractionImage
    this.padlock.on("pointerdown", this.displayAttraction)
    this.firstUpgrade = scene.add.image(75, 500, "upgrade").setInteractive()
    this.secondUpgrade = scene.add.image(75, 600, "upgrade").setInteractive()
    this.thirdUpgrade = scene.add.image(75, 700, "upgrade").setInteractive()
    this.firstUpgrade.setScale(0.1)
    this.secondUpgrade.setScale(0.1)
    this.thirdUpgrade.setScale(0.1)
    this.firstUpgrade.on("pointerdown", this.upgradeSpawnSpeed)
    this.secondUpgrade.on("pointerdown", this.upgradePrizeWon)
    this.thirdUpgrade.on("pointerdown", this.upgradeVisitorsNumber)
  }

  update() {}

  displayAttraction() {
    let building = new Building(this.x, this.y, this.attractionImage)
    building.create(this.scene)
    this.setActive(false).setVisible(false)
  }

  upgradeSpawnSpeed() {
    this.scene.player.spawnTime = this.scene.player.spawnTime - 25 / 100 * this.scene.player.spawnTime
    // this.price = this.scene.interface.coins -= 50
  }

  upgradePrizeWon() {
    this.scene.player.price += 1
    // this.price = this.scene.interface.coins -= 50
  }

  upgradeVisitorsNumber() {
    this.scene.player.maxCharacters *= 2
    // this.price = this.scene.interface.coins -= 50
  }
}