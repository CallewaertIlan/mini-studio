import Batiment from "./Batiment.js"
import Visiteur from "./Visiteur.js"
import Interface from "./Interface.js"
import Image from "./Image.js"
import Canards from "./Canards.js"
import Button from "./Button.js"

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
        
        this.listEntities = []
        this.listBatiments = []
        
        // mise en place du fond d'écran
        this.add.image(680, 384, 'map')
        
        // création d'un joueur
        for (let index = 0; index < 2; index++) {
            this.listEntities.push(new Visiteur(-100 * index, 375))
        }

        // création d'une maison
        
        // this.listBatiments.push(new Button(255, 65))
        
        this.listBatiments.push(new Batiment(275, 85, 'glace'))
        this.listBatiments.push(new Button(675, 65, 'autotamponeuse'))
        this.listBatiments.push(new Button(1200, 70, 'chapito'))
        this.listBatiments.push(new Button(1260, 310, 'chateau_gonflable'))
        this.listBatiments.push(new Button(1200, 550, 'arc'))
        this.listBatiments.push(new Button(780, 610, 'train'))
        this.listBatiments.push(new Button(275, 610, 'frite'))
        // this.listBatiments.push(new Button(600, 400, 'canard'))

        for (let index = 0; index < this.listEntities.length - 1; index++) {
            this.listEntities[index].create(this)           
        }

        for (let index = 0; index < this.listBatiments.length; index++) {
            this.listBatiments[index].create(this)           
        }

        this.wood = new Image(80, 30, 'wood')
        this.wood.create(this)

        this.coins = new Interface(0)
        this.coins.create(this)

        this.satisfaction = new Interface(0)
        this.satisfaction.create(this)
    }

    update() {
        
        if (this.persoTimer + 2000 <= this.time.now) {
            this.persoTimer = this.time.now
            this.newVisiteur(-100, 375)
        }

        for (let index = 0; index < this.listEntities.length - 1; index++) {
            this.listEntities[index].update()
        }

        for (let index = 0; index < this.listBatiments.length; index++) {
            this.listBatiments[index].update()
        }          
    }

    newVisiteur(x, y) {
        this.listEntities[this.listEntities.length - 1].create(this)
        this.listEntities.push(new Visiteur(x, y))
    }
}
