import Building from "./Building.js"
import Button from './Button.js'
import Duck from "./Duck.js"
import Player from "./Player.js"
import Image from "./Image.js"
import Upgrade from './Upgrade.js'
import Interface from "./Interface.js"

export default class Game extends Phaser.Scene {
    constructor() {
        super("game")
    }

    create() {
        
        this.characterTime = this.time.now
        this.buildingsList = []
        
        this.add.image(680, 384, "map")
        
        this.buildingsList.push(new Building(275, 85, "ice_cream", 0))
        this.buildingsList.push(new Button(675, 65, 500, "bumper_car", 1))
        this.buildingsList.push(new Button(1200, 70, 1000, "marquee", 2))
        this.buildingsList.push(new Button(1260, 310, 4000, "inflatable_marquee", 3))
        this.buildingsList.push(new Button(1200, 550, 32000, "arc", 4))
        this.buildingsList.push(new Button(780, 610, 512000, "train", 5))
        this.buildingsList.push(new Button(275, 610, 1000000, "fried", 6))
        this.buildingsList.push(new Duck(600, 400, "duck"))
        this.buildingsList.push(new Duck(700, 300, "duck"))
        
        this.player = new Player()
        this.player.create(this)
        
        this.wood = new Image(80, 30, "wood")
        this.wood.create(this)
        
        this.upgrade = new Upgrade()
        this.upgrade.create(this)
        
        let entitiesListSize = this.player.entitiesList.length
        
        this.interface = new Interface(0, 100, this.player.maxCharacters, entitiesListSize)
        this.interface.create(this)

        for (let i = 0; i < this.buildingsList.length; i++) {
            this.buildingsList[i].create(this)
        }
    }

    update() {
        this.upgrade.update()
        this.interface.update()
        this.player.update()
        for (let i = 0; i < this.buildingsList.length; i++) {
            this.buildingsList[i].update()
        }
    }
}