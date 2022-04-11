export default class Upgrade {
    constructor() {}
    
    create(scene) {
        this.scene = scene
        
        // ajouter les images d'améliorations
        this.firstUpgrade = this.scene.add.image(45, 500, "upgrade").setInteractive()
        this.secondUpgrade = this.scene.add.image(45, 600, "upgrade").setInteractive()
        this.thirdUpgrade = this.scene.add.image(45, 700, "upgrade").setInteractive()
        this.firstUpgrade.setScale(0.1)
        this.secondUpgrade.setScale(0.1)
        this.thirdUpgrade.setScale(0.1)
        
        // faire des niveaux par améliorations
        this.firstUpgrade.level = 1
        this.secondUpgrade.level = 1
        this.thirdUpgrade.level = 1     
        
        // exécuter une fonction quand on clique
        this.firstUpgrade.on("pointerdown", this.upgradeSpawnSpeed)
        this.secondUpgrade.on("pointerdown", this.upgradePriceWon)
        this.thirdUpgrade.on("pointerdown", this.upgradeVisitorsNumber)
        
        // ajouter les textes des niveaux
        this.firstText = this.scene.add.text(75, 480, "Spawn Time", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.firstTextLevel = this.scene.add.text(75, 500, "Level " + this.firstUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondText = this.scene.add.text(75, 580, "Price", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondTextLevel = this.scene.add.text(75, 600, "Level " + this.secondUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdText = this.scene.add.text(75, 680, "Max Visitors", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdTextLevel = this.scene.add.text(75, 700, "Level " + this.thirdUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })
    }

    update() {
        this.firstTextLevel.text = "Level " + this.firstUpgrade.level
        this.secondTextLevel.text = "Level " + this.secondUpgrade.level
        this.thirdTextLevel.text = "Level " + this.thirdUpgrade.level
    }

    upgradeSpawnSpeed() {
        this.scene.player.spawnTime = this.scene.player.spawnTime - 25 / 100 * this.scene.player.spawnTime
        this.level += 1
        // this.price = this.scene.interface.coins -= 10
    }

    upgradePriceWon() {
        this.scene.player.price += 1
        this.level += 1
        // this.price = this.scene.interface.coins -= 10
    }

    upgradeVisitorsNumber() {
        this.scene.player.maxCharacters *= 2
        this.level += 1
        // this.price = this.scene.interface.coins -= 10
    }
}