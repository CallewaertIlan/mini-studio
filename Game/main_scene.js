import Preloader from "../modules/preloader.js"
import Game from "../modules/game.js"

const config = {
	type: Phaser.AUTO,
	width: 1360,
	height: 768,
	backgroundColor: "#333333",
	physics: {
		default: "matter",
		matter: {
			gravity: {
				y: 0,
			},
		},
	},
	scene: [Preloader, Game],
}

export default new Phaser.Game(config)