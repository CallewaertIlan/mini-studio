import Preloader from "../modules/preloader.js"
import Game from "../modules/game.js"
import PlayMenu from "../Modules/PlayMenu.js"

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
	scene: [Preloader, PlayMenu, Game],
}

export default new Phaser.Game(config)