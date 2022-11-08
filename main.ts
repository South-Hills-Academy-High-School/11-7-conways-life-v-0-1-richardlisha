namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const newCursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += -1
    cursorY += -10
    drawGrid()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[cursorGridRow][cursorGridCol] = grid[cursorGridRow][cursorGridCol] * -1 + 1
    drawGrid()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += -1
    cursorX += -10
    drawGrid()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += 1
    cursorX += 10
    drawGrid()
})
function drawGrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridSprite = sprites.create(img`
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 f f 7 7 f f 7 7 
                    7 7 f f 7 7 f f 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 f f 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 f 7 7 7 7 f 7 7 
                    7 7 7 f 7 7 f 7 7 7 
                    7 7 7 7 f f 7 7 7 7 
                    `, SpriteKind.Player)
                gridSprite.left = currentX
                gridSprite.top = currentY
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
    cursor.left = cursorX
    cursor.top = cursorY
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += 1
    cursorY += 10
    drawGrid()
})
let gridSprite: Sprite = null
let gridSprites: Sprite[] = []
let cursorX = 0
let cursorY = 0
let currentY = 0
let currentX = 0
let cursorGridRow = 0
let cursorGridCol = 0
let cursor: Sprite = null
let grid: number[][] = []
grid = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let colume = 0; colume <= 15; colume++) {
        grid[row].push(1)
    }
}
cursor = sprites.create(img`
    2 2 2 2 . . 2 2 2 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 2 2 2 . . 2 2 2 2 
    `, SpriteKind.newCursor)
cursorGridCol = 0
cursorGridRow = 0
currentX = 0
currentY = 0
cursor.z = 10
drawGrid()
