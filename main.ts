scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        noj = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (noj < Max_Jumps) {
        Ck1.vy = -80
        noj += 1
    }
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Play") {
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level1`)
        stats.turnStats(true)
        Ck1 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(Ck1, assets.tile`myTile`)
        controller.player1.moveSprite(Ck1, 100, 0)
        scene.cameraFollowSprite(Ck1)
        Ck1.ay = 150
        noj = 0
        Max_Jumps = 2
    }
})
let Ck1: Sprite = null
let Max_Jumps = 0
let noj = 0
blockMenu.showMenu(
["Play", "Spells"],
0,
MenuLocation.BottomHalf,
[img`
    f . . . . . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    f f f f f f f . . . . . . . . . 
    f f f f f f f f f . . . . . . . 
    f f f f f f f f f f f . . . . . 
    f f f f f f f f f f f f f . . . 
    f f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f . . . 
    f f f f f f f f f f f . . . . . 
    f f f f f f f f f . . . . . . . 
    f f f f f f f . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . c d 5 d c . . . . . 
    . . . b c c d 5 5 5 d c c b . . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . . . . c d 5 d c . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
)
forever(function () {
	
})
