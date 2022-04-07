import Batiment from "./Batiment.js"
import Visiteur from "./Visiteur.js"
import Interface from "./Interface.js"
import Image from "./Image.js"

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
        let rand = Math.floor(Math.random() * 3)
        this.listEntities.push(new Visiteur(20, 404))
        // this.listEntities.push(new Visiteur(20, 404, 'perso3-1'))
        // this.listEntities.push(new Visiteur(275, 211, 'perso1-1'))               Spawn Maison 1
        // this.listEntities.push(new Visiteur(674, 211, 'perso1-1'))               Spawn Maison 2

        // création d'une maison
        this.listEntities.push(new Batiment(275, 85, 'glace'))
        this.listEntities.push(new Batiment(670, 80, 'autotamponeuse'))
        this.listEntities.push(new Batiment(1200, 70, 'chapito'))
        this.listEntities.push(new Batiment(1260, 310, 'chateau_gonflable'))
        this.listEntities.push(new Batiment(1200, 550, 'arc'))
        this.listEntities.push(new Batiment(780, 610, 'train'))
        this.listEntities.push(new Batiment(275, 610, 'frite'))

        for (let index = 0; index < this.listEntities.length; index++) {
            this.listEntities[index].create(this)           
        }

        let wood = new Image(80, 30, 'wood')
        wood.create(this)

        let coins = new Interface(0)
        coins.create(this)


    }

    update() {
        // if (this.persoTimer + 5000 <= this.time.now) {
        //     console.log("C'est l'heure !!")
        //     this.persoTimer = this.time.now
        //     this.listEntities.push(new Visiteur(20, 404))
        // }

        for (let index = 0; index < this.listEntities.length; index++) {
            this.listEntities[index].update()
        }        
    }
}
