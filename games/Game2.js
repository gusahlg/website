const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const cookie = document.getElementById("cookie");
let Counter = document.getElementById("Counter");
let GregPosition = 800;
let ObstaclePosition = 1600;
let JumpCounter = 0;
if(!ctx){
    console.error('Canvas 2D context not supported');
}
function checkCollision(){
    const gregX = 675;
    const gregY = GregPosition - 225;
    const gregWidth = 250;
    const gregHeight = 225;
    const obstacleX = ObstaclePosition - 50;
    const obstacleY = 575;
    const obstacleWidth = 55;
    const obstacleHeight = 225;
    return (
      gregX < obstacleX + obstacleWidth &&
      gregX + gregWidth > obstacleX &&
      gregY < obstacleY + obstacleHeight &&
      gregY + gregHeight > obstacleY
    );
}
 function DrawGreg(){
    ctx.beginPath();
    ctx.moveTo(725, GregPosition);
    ctx.lineTo(725, GregPosition - 225);
    ctx.lineTo(875, GregPosition - 225);
    ctx.lineTo(875, GregPosition);
    ctx.closePath();
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.fillStyle = 'blue';
    ctx.fillRect(725, GregPosition - 225, 50, 50);
    ctx.fillRect(825, GregPosition - 225, 50, 50);
    ctx.fillStyle = 'red';
    ctx.fillRect(675, GregPosition - 25, 50, 25);
    ctx.fillRect(875, GregPosition - 25, 50, 25);
    ctx.fillRect(675, GregPosition - 125, 50, 25);
    ctx.fillRect(875, GregPosition - 125, 50, 25);
};
function DrawObstacle(){
    ctx.fillStyle = 'black';
    ctx.fillRect(ObstaclePosition, 575, -50, 225);
    ctx.clearRect(ObstaclePosition - 50, 575, 20, 25);
    ctx.clearRect(ObstaclePosition - 15, 575, 20, 25);
};
DrawObstacle();
DrawGreg();
let GregAnimateJump;
let GregAnimateDrop;
let ObstacleAnimateMove;
let GameOver = false;
let JumpActive;
let ObstacleRunning = false;
function GregDrop(){
    ctx.clearRect(675, GregPosition - 225, 250, 225);
    GregPosition += 15;
    DrawGreg();
    checkCollision();
    GregAnimateDrop = requestAnimationFrame(GregDrop);
    if(GregPosition > 800){
        cancelAnimationFrame(GregAnimateDrop);
        ctx.clearRect(675, GregPosition - 225, 250, 225); 
        GregPosition = 800;
        DrawGreg();
        setTimeout(()=>{
            JumpActive = false;
        }, 800);
    }
    if(checkCollision()){
        console.log("Greg got eaten by the pointy thing");
        cancelAnimationFrame(GregAnimateDrop);
        GameOver = true;
    }
};
function GregJump(){
    ctx.clearRect(675, GregPosition - 225, 250, 225);
    GregPosition -= 15;
    DrawGreg();
    checkCollision();
    GregAnimateJump = requestAnimationFrame(GregJump);
    if(GregPosition <= 300){
        cancelAnimationFrame(GregAnimateJump);
        GregDrop();
    }
    if(checkCollision()){
        console.log("Greg got eaten by the pointy thing");
        cancelAnimationFrame(GregAnimateJump);
        GameOver = true;
    }
};
function ObstacleMove(){
    ctx.clearRect(ObstaclePosition - 50, 575, 55, 225);
    ObstaclePosition -= 10;
    DrawObstacle();
    checkCollision();
    ObstacleAnimateMove = requestAnimationFrame(ObstacleMove);
    if(checkCollision()){
        console.log("WHY DID YOU JUST STAND THERE WATCHING GREG GET EATEN YOU MONSTER!");
        cancelAnimationFrame(ObstacleAnimateMove);
        GameOver = true;
    }
    if(ObstaclePosition <= 0 && !SpawningActive){
        SpawnObstacle();
        SpawningActive = true;
        JumpCounter += 1;
        Counter.textContent = JumpCounter;
    }
};
cookie.onclick = function(){
    if(!GameOver && !ObstacleRunning){
        ObstacleRunning = true;
        ObstacleMove();
    }
};
document.addEventListener('keydown', (event) =>{
    if(event.code === 'Space' && GregPosition === 800 && !GameOver && !JumpActive){
        event.preventDefault();
        JumpActive = true;
        GregJump();
    }
});
let SpawningActive = false;
function SpawnObstacle(){
    ObstaclePosition = 1600 * (Math.random() + 1);
    setTimeout(() => {
        SpawningActive = false;
    }, 100);
}
