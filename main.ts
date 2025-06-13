input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
    if (game.score() == 2) {
        Vitesse += -500
    } else if (game.score() == 4) {
        Vitesse += -500
    } else if (game.score() == 6) {
        Vitesse += -150
    } else if (game.score() == 8) {
        Vitesse += -150
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
let Vitesse = 1500
game.setScore(0)
basic.forever(function () {
    Sprite.move(1)
    Sprite.ifOnEdgeBounce()
    basic.pause(Vitesse)
})
