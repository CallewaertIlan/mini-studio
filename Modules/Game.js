import Building from "./building.js"
import Button from './button.js'
import Duck from "./duck.js"
import Player from "./player.js"
import Image from "./image.js"
import Interface from "./interface.js"
import Upgarde from './Upgrade.js'

export default class Game extends Phaser.Scene {
    constructor() {
        super("game")
    }

    create() {
        this.characterTime = this.time.now
        this.buildingsList = []

        this.add.image(680, 384, "map")

        this.buildingsList.push(new Building(275, 85, "ice_cream"))
        this.buildingsList.push(new Button(675, 65, "bumper_car"))
        this.buildingsList.push(new Button(1200, 70, "marquee"))
        this.buildingsList.push(new Button(1260, 310, "inflatable_marquee"))
        this.buildingsList.push(new Button(1200, 550, "arc"))
        this.buildingsList.push(new Button(780, 610, "train"))
        this.buildingsList.push(new Button(275, 610, "fried"))
        this.buildingsList.push(new Duck(600, 400, "duck"))

        this.player = new Player()
        this.player.create(this)

        this.wood = new Image(80, 30, "wood")
        this.wood.create(this)

        this.upgrade = new Upgarde()
        this.upgrade.create(this)

        let entitiesListSize = this.player.entitiesList.length
        console.log(entitiesListSize)
        
        this.interface = new Interface(100, 100, this.player.maxCharacters, entitiesListSize)
        this.interface.create(this)

        for (let i = 0; i < this.buildingsList.length; i++) {
            this.buildingsList[i].create(this)           
        }
    }

    update() {
        this.player.update()
        this.upgrade.update()
        this.interface.update()

        for (let i = 0; i < this.buildingsList.length; i++) {
            this.buildingsList[i].update()
        }          
    }
}