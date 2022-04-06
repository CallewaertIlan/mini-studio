export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader')
    }

    preload() {
        this.load.image('maison', '../Assets/maison.png')
        this.load.image('map', '../Assets/map.png')
        this.load.atlas('personnages', '../Assets/persos.png', '../Assets/persos_atlas.json')
        this.load.animation('personnages_anim', '../Assets/persos_anim.json')
    }

    create() {
        this.scene.start('game')
    }
}