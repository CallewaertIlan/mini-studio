import Preloader from "../Modules/Preloader.js"
import Game from "../Modules/Game.js"

const config = {
	type: Phaser.AUTO,
	width: 1360,
	height: 768,
	// width: 680,
	// height: 384,
	backgroundColor: '#333333',
	physics: {
		default: 'matter',
		matter: {
			debug: true,
			gravity: {y: 0}
		}
	},
	// scale: {
	// 	zoom: 2
	// },
	scene: [Preloader, Game]
}

export default new Phaser.Game(config)