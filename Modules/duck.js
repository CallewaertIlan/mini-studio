export default class Duck {
  constructor(x, y, skin) {
    this.x = x
    this.y = y
    this.skin = skin
  }

  create(scene) {
    scene.add.image(this.x, this.y, this.skin)
  }
  


  update() {}

}