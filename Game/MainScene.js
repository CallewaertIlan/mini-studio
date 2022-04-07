import Preloader from "../Modules/Preloader.js"
import Game from "../Modules/Game.js"

const config = {
	type: Phaser.AUTO,
	width: 1360,
	height: 768,
	backgroundColor: '#333333',
	physics: {
		default: 'matter',
		matter: {
			gravity: {y: 0},
		}
	},
	scene: [Preloader, Game]
}

export default new Phaser.Game(config)