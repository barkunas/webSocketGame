class Game {
    constructor() {
        this.windowHeight = window.innerHeight
        this.windowWidth = window.innerWidth
        var app = this.app = new PIXI.Application({
            width: this.windowWidth, height: this.windowHeight, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(app.view);
        this.ballSprite = PIXI.Texture.from('img/krug.png')
        //var ballStage = this.createNewBall()
        //app.stage.addChild(ballStage)
        //app.ticker.add(() => this.moveBall(ballStage))
        //var ballTest = new Ball(0,0,-30,this.ballSprite,app)
    }
    createNewBall() {
        var sprite = new PIXI.Sprite(this.ballSprite)
        var block = new PIXI.Container()
        block.myAgle=-30
        block.isSended = false
        block.addChild(sprite)
        return block
    }
    moveBall(ball){
        var x = ball.x
        var y = ball.y
        var A = ball.myAgle
        var c = 10
        var a = c*Math.sin(A)
        var b = c*Math.cos(A)
        ball.x = x+b
        ball.y = y+a
        if(ball.y>this.windowHeight-ball.height||ball.y<0){ball.myAgle=ball.myAgle*(-1)}
        if(ball.x>this.windowWidth-ball.width&&!ball.isSended){
            ball.isSended = true
            socket.send(`{
                "width":${ball.width},
                "x":${ball.x},
                "y":${ball.y},
                "agle":${ball.myAgle}
            }`)
        }
    }
}