export default class Duck {
  constructor(x, y, skin) {
    this.x = x
    this.y = y
    this.skin = skin
    this.animaton = "up"
    this.duckList = []
  }

  create(scene) {
    this.scene = scene
    this.timeBeforeAnimation = this.scene.time.now
    this.duckList.push(this.scene.add.image(this.x, this.y, this.skin))
  }
  
  update() {
    if (this.animaton == "up") {
      if (this.timeBeforeAnimation + 1000 < this.scene.time.now) {
        this.animaton = "down"
        this.timeBeforeAnimation = this.scene.time.now
      }
      else {
        this.y -= 0.05
      }
    }
    else {
      if (this.timeBeforeAnimation + 1000 < this.scene.time.now) {
        this.animaton = "up"
        this.timeBeforeAnimation = this.scene.time.now
      }
      else {
        this.y += 0.05
      }
    }

    this.duckList.push(this.scene.add.image(this.x, this.y, this.skin))
    this.duckList[0].destroy()
    this.duckList.shift()
  }
}