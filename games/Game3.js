const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const PLAYBUTTON = document.getElementById("PLAY");
let LinePosition = 0;
let TaxiPosition = 1200;
let ObstaclePositionY = 0;
let ObstaclePositionX = 250;
let GameStart = false;
let GameOver = false;
if(!ctx){
    console.error('Canvas 2D context not supported');
}
function DrawRoad(){
    ctx.beginPath();
    ctx.moveTo(100, 800);
    ctx.lineTo(100, 0);
    ctx.lineTo(1500, 0);
    ctx.lineTo(1500, 800);
    ctx.closePath();
    ctx.fillStyle = "#0f0f0f";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(775, 800);
    ctx.lineTo(775, 0);
    ctx.lineTo(825, 0);
    ctx.lineTo(825, 800);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.fillStyle = "#0f0f0f";
    ctx.fillRect(775, LinePosition, 50, 50);
    ctx.fillRect(775, LinePosition + 100, 50, 50);
    ctx.fillRect(775, LinePosition + 200, 50, 50);
    ctx.fillRect(775, LinePosition + 300, 50, 50);
    ctx.fillRect(775, LinePosition + 400, 50, 50);
    ctx.fillRect(775, LinePosition + 500, 50, 50);
    ctx.fillRect(775, LinePosition + 600, 50, 50);
    ctx.fillRect(775, LinePosition + 700, 50, 50);
}
function DrawTaxi(){
    ctx.fillStyle = "#e6db0b";
    ctx.fillRect(TaxiPosition - 75, 400, 150, 200);
    ctx.fillStyle = "#1863db";
    ctx.fillRect(TaxiPosition - 75, 600, 150, 35);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4; 
    ctx.strokeRect(TaxiPosition - 75, 600, 150, 35);
    ctx.fillStyle = "black";
    ctx.fillRect(TaxiPosition - 90, 410, 15, 50);
    ctx.fillRect(TaxiPosition - 90, 550, 15, 50);
    ctx.fillRect(TaxiPosition + 75, 410, 15, 50);
    ctx.fillRect(TaxiPosition + 75, 550, 15, 50);
    ctx.fillStyle = "#8d960b";
    ctx.fillRect(TaxiPosition - 75, 350, 150, 70);
    ctx.fillStyle = "yellow";
    ctx.fillRect(TaxiPosition - 50, 430, 100, 50);
    ctx.strokeRect(TaxiPosition - 50, 430, 100, 50);
    ctx.strokeRect(TaxiPosition - 75, 405, 150, 15);
    ctx.fillStyle = "#1863db";
    ctx.fillRect(TaxiPosition - 75, 405, 150, 15);
    ctx.fillStyle = "black";
    ctx.fillRect(TaxiPosition - 50, 450, 100, 5);
    ctx.fillStyle = "#8d960b";
    ctx.fillRect(TaxiPosition - 75, 635, 150, 20);
    ctx.fillStyle = "#6e7507";
    ctx.fillRect(TaxiPosition - 75, 655, 150, 10);
}
function DrawObstacle(){
    ctx.fillStyle = "#0c1ea8";
    ctx.fillRect(ObstaclePositionX, ObstaclePositionY, 400, 50);
    ctx.font = '45px Arial';
    ctx.fillStyle = "black";
    ctx.fillText("Police road block", ObstaclePositionX + 28, ObstaclePositionY + 40);
}
let ObstacleMoveAnimate;
let LineMoveAnimate;
function LineMove(){
    LineMoveAnimate = requestAnimationFrame(LineMove);
    LinePosition += 30;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawRoad();
    DrawObstacle();
    DrawTaxi();
    if(LinePosition >= 50){
        LinePosition = 0;
    }
    if(checkCollision()){
        cancelAnimationFrame(LineMoveAnimate);
        cancelAnimationFrame(ObstacleMoveAnimate);
        GameOver = true;
    }
}
PLAYBUTTON.onclick = function(){
    GameStart = true;
    if(GameStart){
        LineMove();
        ObstacleMove();
    }
}

function ObstacleMove(){
    ObstacleMoveAnimate = requestAnimationFrame(ObstacleMove);
    ObstaclePositionY += 20;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawRoad();
    DrawObstacle();
    DrawTaxi();
    checkCollision();
    if(ObstaclePositionY >= 800){
        ObstaclePositionY = (Math.random() - Math.random() - Math.random() - 1) * 1000;
        if(Math.random() > 0.5){
            ObstaclePositionX = 1000;
        }
        else{
            ObstaclePositionX = 250;
        }
    }
    if(checkCollision()){
        console.log("Game over!")
        cancelAnimationFrame(ObstacleMoveAnimate);
        cancelAnimationFrame(LineMoveAnimate);
        GameOver = true;
    }
}
DrawRoad();
DrawTaxi();
DrawObstacle();
function TaxiMoveLeft(){
    if(TaxiPosition == 1200){
        TaxiPosition = 400;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DrawRoad();
        DrawObstacle();
        DrawTaxi();
    }
}
function TaxiMoveRight(){
    if(TaxiPosition == 400){
        TaxiPosition = 1200;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DrawRoad();
        DrawObstacle();
        DrawTaxi();
    }
}
document.addEventListener('keydown', (event) =>{
    if((event.key === 'd' || event.key === 'D') && !GameOver){
        TaxiMoveRight();
    }
});
document.addEventListener('keydown', (event) =>{
    if((event.key === 'a' || event.key === 'A') && !GameOver){
        TaxiMoveLeft();
    }
});
function checkCollision(){
    const gregX = TaxiPosition - 75;
    const gregY = 350;
    const gregWidth = 150;
    const gregHeight = 315;
    const obstacleX = ObstaclePositionX;
    const obstacleY =  ObstaclePositionY;
    const obstacleWidth = 400;
    const obstacleHeight = 50;
    return (
      gregX < obstacleX + obstacleWidth &&
      gregX + gregWidth > obstacleX &&
      gregY < obstacleY + obstacleHeight &&
      gregY + gregHeight > obstacleY
    );
}



