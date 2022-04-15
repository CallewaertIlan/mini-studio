export default class Mario {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    
    create(scene) {
        this.scene = scene
        this.key = this.scene.input.keyboard.createCursorKeys()
        this.player = new Phaser.Physics.Matter.Sprite(this.scene.matter.world, this.x, this.y, "mario")
        this.player.body.collisionFilter.category = 1
        this.scene.add.existing(this.player)
    }

    update() {
        this.setVelociteX(0)
        this.setVelociteY(0)
        if (this.key.up.isDown) {
            this.setVelociteY(-2)
        }
        if (this.key.down.isDown) {
            this.setVelociteY(2)
        }
    
        if (this.key.left.isDown) {
            this.editTexture('mario_reverse')
            this.setVelociteX(-2)
        }
    
        if (this.key.right.isDown) {
            this.editTexture('mario')
            this.setVelociteX(2)
        }

        if (this.player.x > 1330) {
            this.player.x = 1330
        }
        if (this.player.x < 28) {
            this.player.x = 28
        }

        if (this.player.y > 740) {
            this.player.y = 740
        }
        if (this.player.y < 32) {
            this.player.y = 32
        }
    }

    setVelociteX(x) {
        this.player.setVelocityX(x);
    }

    setVelociteY(y) {
        this.player.setVelocityY(y);
    }

    editTexture(name) {
        this.player.texture.key = name;
    }
}