const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionMap = []
for (let i = 0; i < collision.length; i += 70) {
    collisionMap.push(collision.slice(i, 70 + i))
}

const battlezonesMap = []
for (let i = 0; i < battlezonesData.length; i += 70) {
    battlezonesMap.push(battlezonesData.slice(i, 70 + i))
}


const boundaries = []
const offset = {
    x: -210,
    y: -280
}


collisionMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

//battlezones
const battlezones = []

battlezonesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025)
            battlezones.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

//get img
const image = new Image()
image.src = './img/Town.png'

const forgroundImage = new Image()
forgroundImage.src = './img/Forground.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'


//posision map, player
const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2,
    },
    image: playerDownImage,
    frames: {
        max: 4,
        hold: 25
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage,
    }
})


const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    },
    image: image
})

const forground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    },
    image: forgroundImage
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}


const movables = [background, ...boundaries, forground, ...battlezones]

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}


const battle = {
    initiated: false
}

//animation/walking
function animate() {
    const animationId = window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()
    })
    battlezones.forEach(battlezones => {
        battlezones.draw()
    })
    player.draw()
    forground.draw()

    let moving = true
    player.animate = false

    //battle activation
    //walking animation
    if (battle.initiated) return
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        for (let i = 0; i < battlezones.length; i++) {
            const battlezone = battlezones[i]
            const overlappingArea = (Math.min(player.position.x + player.width, battlezone.position.x + battlezone.width)
                - Math.max(player.position.x, battlezone.position.x)) *
                (Math.min(player.position.y + player.height, battlezone.position.y + battlezone.height) -
                    Math.max(player.position.y, battlezone.position.y))

            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: battlezone
                }) &&
                overlappingArea > (player.width * player.height) / 2
                && Math.random() < 0.01
            ) {
                window.cancelAnimationFrame(animationId)

                battle.initiated = true
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    repeat: 3,
                    yoyo: true,
                    duration: 0.4,
                    onComplete() {
                        gsap.to('#overlappingDiv', {
                            opacity: 1,
                            duration: 0.4,
                            onComplete() {
                                //activate a new animation loop
                                initBattle()
                                animateBattle()
                                gsap.to('#overlappingDiv', {
                                    opacity: 0,
                                    duration: 0.4,
                                })
                            }
                        })



                    }
                })
                break
            }
        }
    }

    if (keys.w.pressed && lastKey === 'w') {
        player.animate = true
        player.image = player.sprites.up
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 2
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movables) => {
                movables.position.y += 2
            })
    }
    else if (keys.s.pressed && lastKey === 's') {
        player.animate = true
        player.image = player.sprites.down
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 2
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }


        if (moving)
            movables.forEach((movables) => {
                movables.position.y -= 2
            })
    }
    else if (keys.a.pressed && lastKey === 'a') {
        player.animate = true
        player.image = player.sprites.left
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x + 2,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movables) => {
                movables.position.x += 2
            })
    }
    else if (keys.d.pressed && lastKey === 'd') {
        player.animate = true
        player.image = player.sprites.right
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, position: {
                            x: boundary.position.x - 2,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach((movables) => {
                movables.position.x -= 2
            })
    }

}


let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})
