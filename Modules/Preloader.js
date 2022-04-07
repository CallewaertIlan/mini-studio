export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader')
    }

    preload() {
        this.load.image('arc', '../Assets/arc.png')
        this.load.image('glace', '../Assets/glace.png')
        this.load.image('frite', '../Assets/frite.png')
        this.load.image('autotamponeuse', '../Assets/autotamponeuse.png')
        this.load.image('chapito', '../Assets/chapito.png')
        this.load.image('chateau_gonflable', '../Assets/chateau_gonflable.png')
        this.load.image('train', '../Assets/train.png')
        this.load.image('map', '../Assets/map.png')
        this.load.atlas('personnages', '../Assets/persos.png', '../Assets/persos_atlas.json')
        this.load.animation('personnages_anim', '../Assets/persos_anim.json')
    }

    create() {
        this.scene.start('game')
    }
}