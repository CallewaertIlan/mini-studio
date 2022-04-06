import Preloader from "../Modules/Preloader.js"
import Game from "../Modules/Game.js"

const config = {
	type: Phaser.AUTO,
	width: 1360,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Preloader, Game]
}

export default new Phaser.Game(config)