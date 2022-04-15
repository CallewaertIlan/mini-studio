export default class PlayMenu extends Phaser.Scene {
    constructor() {
        super("playmenu")
    }

    create() {    
        this.add.image(680, 384, 'background')
        
        this.playButton = this.add.image(680, 384, "play").setInteractive()
        this.playButton.scene = this
        this.playButton.on("pointerdown", this.playGame)
    }

    update() {

    }

    playGame() {
        this.scene.scene.start("game")
    }
}