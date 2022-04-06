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

        // mise en place du fond d'écran
        this.add.image(680, 384, 'map')
        
        // création d'un joueur
        this.perso1 = new Visiteur(100, 434, 'perso1-1')
        this.perso1.create(this)
        
        // création d'une maison
        let maison1 = new Batiment(376, 200, 'maison')
        let maison2 = new Batiment(920, 200, 'maison')
        let maison3 = new Batiment(376, 600, 'maison')
        let maison4 = new Batiment(920, 600, 'maison')
        maison1.create(this)
        maison2.create(this)
        maison3.create(this)
        maison4.create(this)
    }

    update() {
        this.perso1.player.anims.play('perso-walk-1', true)
    }
}
