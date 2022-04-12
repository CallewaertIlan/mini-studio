import RedButton from './RedButton.js'

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
        this.firstUpgrade.maxLevel = 10
        this.secondUpgrade.maxLevel = 10
        this.thirdUpgrade.maxLevel = 10
        
        // exécuter une fonction quand on clique
        this.firstUpgrade.on("pointerdown", this.upgradeSpawnTime)
        this.secondUpgrade.on("pointerdown", this.upgradePriceWon)
        this.thirdUpgrade.on("pointerdown", this.upgradeVisitorsNumber)
        
        // ajouter les textes des niveaux
        this.firstText = this.scene.add.text(75, 480, "Spawn Time", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.firstTextLevel = this.scene.add.text(75, 500, "Level " + this.firstUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondText = this.scene.add.text(75, 580, "Price", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondTextLevel = this.scene.add.text(75, 600, "Level " + this.secondUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdText = this.scene.add.text(75, 680, "Max Visitors", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdTextLevel = this.scene.add.text(75, 700, "Level " + this.thirdUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })

        // Bouton magique
        this.redButton = new RedButton(680, 384)
    }

    update() {
        this.firstTextLevel.text = "Level " + this.firstUpgrade.level
        this.secondTextLevel.text = "Level " + this.secondUpgrade.level
        this.thirdTextLevel.text = "Level " + this.thirdUpgrade.level

        if (this.firstUpgrade.level === this.firstUpgrade.maxLevel && this.secondUpgrade.level === this.secondUpgrade.maxLevel && this.thirdUpgrade.level === this.thirdUpgrade.maxLevel) {
            this.redButton.create(this)
        }
    }

    upgradeSpawnTime() {
        if (this.level < this.maxLevel) {
            this.level += 1
            this.scene.player.spawnTime = this.scene.player.spawnTime - 35 / 100 * this.scene.player.spawnTime
        }
    }

    upgradePriceWon() {
        if (this.level < this.maxLevel) {
            this.level += 1
            this.scene.player.price += 1
        }
    }

    upgradeVisitorsNumber() {
        if (this.level < this.maxLevel) {
            this.level += 1
            this.scene.player.maxCharacters = Math.floor(this.scene.player.maxCharacters * 1.7)
            console.log(this.scene.player.maxCharacters)
        }
    }
}