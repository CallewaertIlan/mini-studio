export default class Image {
    constructor(x, y, skin) {
      this.x = x
      this.y = y
      this.skin = skin
    }
  
    create(scene) {
      scene.add.image(this.x, this.y + 80, this.skin)
      scene.add.image(this.x, this.y, this.skin)
    }
  
    update() {
      
    }
}