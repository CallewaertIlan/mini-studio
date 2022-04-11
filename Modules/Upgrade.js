export default class Upgrade {
    constructor() {
    }
    
    create(scene) {
        this.scene = scene
        
        // ajouter les images d'upgrade
        this.firstUpgrade = this.scene.add.image(45, 500, "upgrade").setInteractive()
        this.secondUpgrade = this.scene.add.image(45, 600, "upgrade").setInteractive()
        this.thirdUpgrade = this.scene.add.image(45, 700, "upgrade").setInteractive()
        this.firstUpgrade.setScale(0.1)
        this.secondUpgrade.setScale(0.1)
        this.thirdUpgrade.setScale(0.1)
        
        // faire des lvl par upgrade
        this.firstUpgrade.lvl = 1
        this.secondUpgrade.lvl = 1
        this.thirdUpgrade.lvl = 1     
        
        // lancer une fonction quand on clique
        this.firstUpgrade.on("pointerdown", this.upgradeSpawnSpeed)
        this.secondUpgrade.on("pointerdown", this.upgradePrizeWon)
        this.thirdUpgrade.on("pointerdown", this.upgradeVisitorsNumber)
        
        // ajouter les text des levels
        this.firstText = this.scene.add.text(75, 480, "Spawn Time", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.firstTextLvl = this.scene.add.text(75, 500, "Lvl " + this.firstUpgrade.lvl, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondText = this.scene.add.text(75, 580, "Price", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondTextLvl = this.scene.add.text(75, 600, "Lvl " + this.secondUpgrade.lvl, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdText = this.scene.add.text(75, 680, 'Max visitors', { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdTextLvl = this.scene.add.text(75, 700, "Lvl " + this.thirdUpgrade.lvl, { font: "17px Varela Round", fill: "#FFFFFF" })
    }


    update() {
        this.firstTextLvl.text = "Level " + this.firstUpgrade.lvl
        this.secondTextLvl.text = "Level " + this.secondUpgrade.lvl
        this.thirdTextLvl.text = "Level " + this.thirdUpgrade.lvl
    }

    upgradeSpawnSpeed() {
        this.scene.player.spawnTime = this.scene.player.spawnTime - 25 / 100 * this.scene.player.spawnTime
        this.lvl += 1
        // this.price = this.scene.interface.coins -= 50
    }

    upgradePrizeWon() {
        this.scene.player.price += 1
        this.lvl += 1
        // this.price = this.scene.interface.coins -= 50
    }

    upgradeVisitorsNumber() {
        this.scene.player.maxCharacters *= 2
        this.lvl += 1
        // this.price = this.scene.interface.coins -= 50
    }
}