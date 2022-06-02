const canvas = document.
    querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const scoreEl = document.querySelector('#scoreEl')
const startGameBtn = document.querySelector('#startGameBtn')
const modalEl = document.querySelector('#modalEl')
const bigScoreEl = document.querySelector('#bigScoreEl')

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 
            0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 
            0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Enemy {
    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 
            0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

const friction = 0.99
class Partical {
    constructor(x, y, radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }

    draw() {
        c.save()
        c.globalAlpha = this.alpha
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 
            0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.restore()
    }

    update() {
        this.draw()
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}

const x = canvas.width / 2
const y = canvas.height / 2

let player = new Player(x, y, 15, 'purple')
let projectiles = []
let enemies = []
let particals = []

function init(){
    player = new Player(x, y, 15, 'purple')
    projectiles = []
    enemies = []
    particals = []
    score = 0
    scoreEl.innerHTML = score
    bigScoreEl.innerHTML = score
}

function spawnEnemis(){
    setInterval(() => {
        const radius = Math.random() * (35 - 5 )+ 5

        let x
        let y

        //enemy spawn
        if(Math.random() < 0.5){
        x = Math.random () < 0.5 ? 0 - radius : canvas.width - radius
        y = Math.random() * canvas.height
        // const y = Math.random () < 0.5 ? 0 - radius : canvas.height - radius
        } else {
            x = Math.random () * canvas.width
            y = Math.random() * canvas.height
            y = Math.random () < 0.5 ? 0 - radius : canvas.height - radius
        }
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`
        const angle = Math.atan2(
            canvas.height / 2 - y, 
            canvas.width / 2 - x)
            const velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle),
            }
        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, 1000)
}

let animationId
let score = 0

function animate(){
    animationId = requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0, 0, 0, 0.1)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    particals.forEach((particle, index) => {
        if (particle.alpha <= 0){
            particals.splice(index, 1)
        }else{
        particle.update()
        }
    })
    projectiles.forEach((projectile, index) => {projectile.update()

        //remove from edges on screen
        if (projectile.x + projectile.radius < 0 || 
            projectile.x -  projectile.radius > canvas.width ||
            projectile.y +  projectile.radius < 0 ||
            projectile.y -  projectile.radius > canvas.height){
            setTimeout(() => {
                projectiles.splice(index, 1)
            }, 0)
        }
    })

    enemies.forEach((enemy, index) => {
        enemy.update()
        //endgame
        const dist = Math.hypot(player.x - enemy.x, 
            player.y - enemy.y)
            if(dist - enemy.radius -player.radius < 1){
                cancelAnimationFrame(animationId)
                modalEl.style.display = 'flex'
                bigScoreEl.innerHTML = score
            }

        //when projectiles touch enemy
        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x, 
                projectile.y - enemy.y)
           
            if(dist - enemy.radius - projectile.radius < 1) {

                //particals when enemy hit
                for (let i = 0; i < enemy.radius * 2; i++){
                    particals.push(new Partical(
                        projectile.x, 
                        projectile.y, 
                        Math.random() * 2, 
                        enemy.color, 
                        {
                            x: (Math.random() -0.5) * (Math.random() *8), 
                            y: (Math.random() -0.5) * (Math.random() *8)
                        }))
                }
                //shrink enemies on hit
                if (enemy.radius -10 > 5) {

                    //increase our score
                    score += 100
                    scoreEl.innerHTML = score
                    gsap.to(enemy, {
                        radius: enemy.radius - 10
                    })
                    setTimeout(() => {
                    projectiles.splice(projectileIndex, 1)
                    }, 0)
                }
                    else{
                        //increase our score
                        score += 250
                        scoreEl.innerHTML = score
                    //remove enemies on kill
                    setTimeout(() => {
                        enemies.splice(index, 1)
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                }
            }
        })
    })
}

//shoot projectiles
addEventListener('click', (event) => {
    const angle = Math.atan2(
    event.clientY - canvas.height / 2, 
    event.clientX - canvas.width / 2)
    const velocity = {
        x: Math.cos(angle) * 3,
        y: Math.sin(angle) * 3,
    }
    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2,
    5, 'purple', velocity)
    )
})

startGameBtn.addEventListener('click', () => {
    init()
    animate()
    spawnEnemis()
    modalEl.style.display = 'none'
})