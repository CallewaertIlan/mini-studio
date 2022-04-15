export default class Preloader extends Phaser.Scene {
    constructor() {
        super("preloader")
    }

    preload() {
        this.load.image("map", "../assets/map.png")
        this.load.image("background", "../images/background.jpg")
        this.load.image("ice_cream", "../assets/ice_cream.png")
        this.load.image("bumper_car", "../assets/bumper_car.png")
        this.load.image("marquee", "../assets/marquee.png")
        this.load.image("inflatable_marquee", "../assets/inflatable_marquee.png")
        this.load.image("arc", "../assets/arc.png")
        this.load.image("train", "../assets/train.png")
        this.load.image("fried", "../assets/fried.png")
        this.load.image("duck", "../assets/duck.png")
        this.load.image("wood", "../assets/wood.png")
        this.load.image("play", "../assets/play.png")
        this.load.image("padlock", "../assets/padlock.png")
        this.load.image("upgrade", "../assets/upgrade.png")
        this.load.image("redButton", "../assets/redButton.png")
        this.load.atlas("personnages", "../assets/personnages.png", "../assets/persos_atlas.json")
        this.load.animation("personnages_anim", "../assets/persos_anim.json")
    }

    create() {
        this.scene.start("playmenu")
    }
}