class Ball{
    constructor(x,y,degree,spriteImg,app){
        this.windowHeight = window.innerHeight//temp
        this.windowWidth = window.innerWidth//temp
        var sprite = new PIXI.Sprite(spriteImg)
        this.block = new PIXI.Container()
        this.block.x = x
        this.block.y = y
        //this.block.mySpeed = speed
        this.block.myAgle=degree
        this.block.isSended = false
        this.block.addChild(sprite)
        //this.tiktak = setInterval(()=>{
          //  this.moveBall()
        //},50)
        app.ticker.add(() => this.moveBall(this.block))
        app.stage.addChild(this.block)
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
        if(ball.isSended&&ball.x>this.windowWidth+10){
            //clearInterval(this.tiktak)
        }
    }
}