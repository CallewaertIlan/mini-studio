export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader')
    }

    preload() {
        this.load.image('tiles', '../Assets/map_tiles.png')
        this.load.tilemapTiledJSON('map', '../Assets/map.json')
    }

    create() {
        this.scene.start('game')
    }
}