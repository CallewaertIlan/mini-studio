export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game')
	}

	preload() {

    }

    create() {
        const map = this.make.tilemap({key: "map"})
        const tileset = map.addTilesetImage('map_tiles', 'tiles')
    
        map.createStaticLayer('ground', tileset)
    }
}
