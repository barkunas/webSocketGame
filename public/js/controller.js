class Controller{
    constructor(){
        document.addEventListener('click',()=>this.addBall())
    }
    addBall(config){
        if(!config){var config={"width":-200,"x":0,"y":0,"agle":-30}}
        new Ball(config.width*(-1),config.y,config.agle,game.ballSprite,game.app)
    }
}