export default class Canards
 {
    constructor(x, y, skin) {
      this.x = x
      this.y = y
      this.skin = skin
    }
  
    create(scene) {
      scene.add.image(this.x, this.y, this.skin)
    }
    floating() {
        this.Canards.setVelocityY(5)
      }
    update() {
     
    }
  }
  


