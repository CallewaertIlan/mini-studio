import Batiment from "./Batiment.js"
import Visiteur from "./Visiteur.js"
import Interface from "./Interface.js"
import Image from "./Image.js"
import Canards from "./Canards.js"

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

        
        // mise en place du fond d'écran
        this.add.image(680, 384, 'map')
        
        // création d'un joueur
        for (let index = 0; index < 2; index++) {
            this.listEntities.push(new Visiteur(-100 * index, 375))
        }

        // création d'une maison
        this.listEntities.push(new Batiment(275, 85, 'glace'))
        this.listEntities.push(new Batiment(670, 80, 'autotamponeuse'))
        this.listEntities.push(new Batiment(1200, 70, 'chapito'))
        this.listEntities.push(new Batiment(1260, 310, 'chateau_gonflable'))
        this.listEntities.push(new Batiment(1200, 550, 'arc'))
        this.listEntities.push(new Batiment(780, 610, 'train'))
        this.listEntities.push(new Batiment(275, 610, 'frite'))
        this.listEntities.push(new Canards(600, 400, 'canard'))

        for (let index = 0; index < this.listEntities.length - 1; index++) {
            this.listEntities[index].create(this)           
        }

        this.wood = new Image(80, 30, 'wood')
        this.wood.create(this)

        this.coins = new Interface(0)
        this.coins.create(this)
    }

    update() {

        if (this.persoTimer + 2000 <= this.time.now && this.persoTimer + 6000 >= this.time.now) {
            this.persoTimer = this.time.now
            this.newVisiteur(-100, 375)
        }

        for (let index = 0; index < this.listEntities.length - 1; index++) {
            this.listEntities[index].update()
        }
          
    }

    newVisiteur(x, y) {
        this.listEntities[this.listEntities.length - 1].create(this)
        this.listEntities.push(new Visiteur(x, y))
    }
}
