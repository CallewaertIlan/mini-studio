import Batiment from "./Batiment.js"
import Visiteur from "./Visiteur.js"

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game')
	}

	preload() {

    }

    create() {

        this.listEntities = []

        
        // mise en place du fond d'écran
        this.add.image(680, 384, 'map')
        
        // création d'un joueur
        this.listEntities.push(new Visiteur(20, 404, 'perso1-1'))
        
        // création d'une maison
        // this.listEntities.push(new Batiment(376, 200, 'maison'))
        // this.listEntities.push(new Batiment(920, 200, 'maison'))
        // this.listEntities.push(new Batiment(376, 600, 'maison'))
        // this.listEntities.push(new Batiment(920, 600, 'maison'))

        for (let index = 0; index < this.listEntities.length; index++) {
            this.listEntities[index].create(this)           
        }
    }

    update() {
        for (let index = 0; index < this.listEntities.length; index++) {
            this.listEntities[index].update()           
        }
    }
}
