sprites.onOverlap(SpriteKind.Player, SpriteKind.Guard, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(5, 155), randint(5, 115))
})
sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    NamorX = 12
    if (Math.percentChance(50)) {
        NamorX = 148
    }
    Namor.setPosition(NamorX, randint(5, 115))
    Namor.startEffect(effects.spray)
})
info.onScore(20, function () {
    Namor.destroy()
    scene.setBackgroundImage(assets.image`boston-bridge`)
    effects.confetti.startScreenEffect()
    Shuri.sayText("WAKANDA FOREVER!", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Namor.setPosition(148, 5)
})
let NamorX = 0
let Namor: Sprite = null
let Shuri: Sprite = null
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose your attempt! ", DialogLayout.Full)
scene.setBackgroundImage(assets.image`wakanda`)
Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri, 0, 100)
Shuri.setStayInScreen(true)
Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.startEffect(effects.spray)
Namor.setPosition(148, 5)
Namor.follow(Shuri, 50)
let Riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
Riri.setPosition(randint(0, 70), randint(0, 120))
let Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
Okoye.setPosition(randint(90, 160), randint(0, 120))
controller.moveSprite(Riri, 34, -53)
controller.moveSprite(Okoye, -68, -58)
