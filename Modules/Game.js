import Batiment from "./Batiment"

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game')
	}

	preload() {

    }

    create() {
        maisons = new Batiment
        this.add.image(680, 384, 'map')
    }
}
