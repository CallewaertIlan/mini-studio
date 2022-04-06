export default class Visiteur {
  constructor(x, y, skin) {
    this.x = x
    this.y = y
    this.listNamePerso = ['perso1-1', 'perso2-1', 'perso3-1']
    this.skin = this.listNamePerso[Math.floor(Math.random() * 3)]
    this.path = []
  }

  create(scene) {
    this.player = new Phaser.Physics.Matter.Sprite(scene.matter.world, this.x, this.y, 'personnages', this.skin)
    scene.add.existing(this.player)

    // créer la liste des attractions a faire
    for (let index = 0; index < 3; index++) {
      this.path.push(this.addPath())
    }
    // trie la liste
    this.path.sort()

    this.player.setVelocityX(1)
    console.log(this.player.x, this.player.y)
    this.count = 0
  }

  update() {
    // animation du visiteur
    if (this.skin == 'perso1-1') {
      this.player.anims.play('perso-walk-1', true)
    }
    else if (this.skin == "perso2-1") {
      this.player.anims.play('perso-walk-2', true)
    }
    else if (this.skin == "perso3-1") {
      this.player.anims.play('perso-walk-3', true)
    }

    // chemin qu'il suit pour aller jusque la 1ere attraction
    if (this.count <= 450) {
      this.count += 1
      this.moveToAttraction1()
    }
    
    // chemin qu'il suit pour aller jusque la 2eme attraction
    else if (this.count <= 840) {
      this.count += 1
      this.moveToAttraction2()
    }

    // chemin qu'il suit pour aller jusque la 3eme attraction
    else if (this.count <= 1150) {
      this.count += 1
      this.moveToAttraction3()
    }

    // chemin qu'il suit pour aller jusque la 4eme attraction
    else if (this.count <= 1305) {
      this.count += 1
      this.moveToAttraction4()
    }

    // S'arréter
    else {
      this.stopMovement()
    }
  }

  addPath() {
    let rand = Math.floor(Math.random() * 7)
    if (this.path.indexOf(rand, 0) == -1) {
      return rand
    }
    else {
      return this.addPath()
    }
  }

  moveToAttraction1() {
    if (this.count <= 255) {
      this.player.setVelocityX(1)
    }
    else{
      this.player.setVelocityX(0)
      this.player.setVelocityY(-1)
    }
  }

  moveToAttraction2() {
    if (this.count <= 840) {
      this.player.setVelocityY(0)
      this.player.setVelocityX(1)
    }
  }

  moveToAttraction3() {
    if (this.count <= 1155) {
      this.player.setVelocityY(0)
      this.player.setVelocityX(1)
    }
  }

  moveToAttraction4() {
    if (this.count <= 1205) {
      this.player.setVelocityX(1)
    }
    else {
      this.player.setVelocityY(1)
    }
  }

  stopMovement() {
    this.player.setVelocityX(0)
    this.player.setVelocityY(0)
  }
}
