export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader')
    }

    preload() {
        this.load.image('maison', '../Assets/maison.png')
        this.load.image('map', '../Assets/map.png')
    }

    create() {
        this.scene.start('game')
    }
}