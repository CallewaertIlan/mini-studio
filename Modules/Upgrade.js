import Mario from "./Mario.js"

export default class Upgrade {
    constructor() {
        this.addNumber = 0
    }
    
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
        this.firstUpgrade.price = 30
        this.secondUpgrade.price = 10
        this.thirdUpgrade.price = 20
        
        // exécuter une fonction quand on clique
        this.firstUpgrade.on("pointerdown", this.upgradeSpawnTime)
        this.secondUpgrade.on("pointerdown", this.upgradePriceWon)
        this.thirdUpgrade.on("pointerdown", this.upgradeVisitorsNumber)
        
        // ajouter les textes des niveaux
        this.firstText = this.scene.add.text(75, 470, "Spawn Time", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.firstTextLevel = this.scene.add.text(75, 490, "Level " + this.firstUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.firstTextPrice = this.scene.add.text(75, 510, "Price : " + this.firstUpgrade.price + '$', { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondText = this.scene.add.text(75, 570, "Price", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondTextLevel = this.scene.add.text(75, 590, "Level " + this.secondUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.secondTextPrice = this.scene.add.text(75, 610, "Price : " + this.secondUpgrade.price + '$', { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdText = this.scene.add.text(75, 670, "Max Visitors", { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdTextLevel = this.scene.add.text(75, 690, "Level " + this.thirdUpgrade.level, { font: "17px Varela Round", fill: "#FFFFFF" })
        this.thirdTextPrice = this.scene.add.text(75, 710, "Price : " + this.thirdUpgrade.price + '$', { font: "17px Varela Round", fill: "#FFFFFF" })

        // ajouter le bouton magique
        this.you = new Mario(0, 404)
    }

    update() {
        this.firstTextLevel.text = "Level " + this.firstUpgrade.level
        this.secondTextLevel.text = "Level " + this.secondUpgrade.level
        this.thirdTextLevel.text = "Level " + this.thirdUpgrade.level
        this.firstTextPrice.text = "Price " + this.firstUpgrade.price + '$'
        this.secondTextPrice.text = "Price " + this.secondUpgrade.price + '$'
        this.thirdTextPrice.text = "Price " + this.thirdUpgrade.price + '$'

        if (this.firstUpgrade.level == this.firstUpgrade.maxLevel) {
            this.firstTextPrice.text = "Max"
        }

        if (this.secondUpgrade.level == this.secondUpgrade.maxLevel) {
            this.secondTextPrice.text = "Max"
        }

        if (this.thirdUpgrade.level == this.thirdUpgrade.maxLevel) {
            this.thirdTextPrice.text = "Max"
        }

        if (this.addNumber == 0 && this.firstUpgrade.level === this.firstUpgrade.maxLevel && this.secondUpgrade.level === this.secondUpgrade.maxLevel && this.thirdUpgrade.level === this.thirdUpgrade.maxLevel) {
            this.addNumber += 1
            this.you.create(this.scene)
        }
        else if (this.addNumber != 0) {
            this.you.update()
        }
    }

    upgradeSpawnTime() {
        if (this.level < this.maxLevel && this.scene.interface.coins >= this.price) {
            this.level += 1
            this.scene.player.spawnTime = this.scene.player.spawnTime - 35 / 100 * this.scene.player.spawnTime
            this.scene.interface.coins -= this.price
            this.price = Math.floor(Math.exp(this.level) * 30)
        }
    }

    upgradePriceWon() {
        if (this.level < this.maxLevel && this.scene.interface.coins >= this.price) {
            this.level += 1
            this.scene.player.price += 1
            this.scene.interface.coins -= this.price
            this.price = Math.floor(Math.exp(this.level) * 10)
        }
    }

    upgradeVisitorsNumber() {
        if (this.level < this.maxLevel && this.scene.interface.coins >= this.price) {
            this.level += 1
            this.scene.player.maxCharacters = Math.floor(this.scene.player.maxCharacters * 1.7)
            this.scene.interface.coins -= this.price
            this.price = Math.floor(Math.exp(this.level) * 20)
        }
    }
}