import Batiment from "./Batiment.js"
import Interface from "./Interface.js"
import Image from "./Image.js"
import Canards from "./Canards.js"
import Player from "./Player.js"
import Button from './Button.js'

export default class Game extends Phaser.Scene
{
    constructor()
	{
        super('game')
	}
    
	preload() {
        
    }
    
    create() {
        this.persoTimer = this.time.now
        this.listBatiments = []
        
        // mise en place du fond d'écran
        this.add.image(680, 384, 'map')

        // création d'une maison
        this.listBatiments.push(new Batiment(275, 85, 'glace'))
        this.listBatiments.push(new Button(675, 65, 'autotamponeuse'))
        this.listBatiments.push(new Button(1200, 70, 'chapito'))
        this.listBatiments.push(new Button(1260, 310, 'chateau_gonflable'))
        this.listBatiments.push(new Button(1200, 550, 'arc'))
        this.listBatiments.push(new Button(780, 610, 'train'))
        this.listBatiments.push(new Button(275, 610, 'frite'))
        this.listBatiments.push(new Canards(600, 400, 'canard'))

        for (let index = 0; index < this.listBatiments.length; index++) {
            this.listBatiments[index].create(this)           
        }

        this.wood = new Image(80, 30, 'wood')
        this.wood.create(this)
        
        this.utilisateur = new Player()
        this.utilisateur.create(this)

        let sizeListEntities = this.utilisateur.listEntities.length
        console.log(sizeListEntities)
        this.interface = new Interface(100, 100, this.utilisateur.persoMax, sizeListEntities)
        this.interface.create(this)

    }

    update() {
        this.utilisateur.update()

        this.interface.update()

        for (let index = 0; index < this.listBatiments.length; index++) {
            this.listBatiments[index].update()
        }          
    }
}
