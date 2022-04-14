export default class Duck {
  constructor(x, y, skin) {
    this.x = x
    this.y = y
    this.skin = skin
    this.animaton = 'up'
    this.listDuck = []
  }

  create(scene) {
    this.scene = scene
    this.timeBeforeAnimation = this.scene.time.now
    this.listDuck.push(this.scene.add.image(this.x, this.y, this.skin))
  }
  


  update() {
    if (this.animaton == "up") {
      console.log("up")
      if (this.timeBeforeAnimation + 1000 < this.scene.time.now) {
        this.animaton = 'down'
        this.timeBeforeAnimation = this.scene.time.now
      }
      else {
        this.y -= 0.05
      }
    }
    else {
      console.log("down")
      if (this.timeBeforeAnimation + 1000 < this.scene.time.now) {
        this.animaton = 'up'
        this.timeBeforeAnimation = this.scene.time.now
      }
      else {
        this.y += 0.05
      }
    }

    this.listDuck.push(this.scene.add.image(this.x, this.y, this.skin))
    this.listDuck[0].visible = false
    this.listDuck.shift()
  }

}