console.log("Warning this is a developer-only tool.");
const game1 = document.getElementById("Game1Hidden");
const game2 = document.getElementById("Game2Hidden");
const game3 = document.getElementById("Game3Hidden");
const PlayGames = document.getElementById("PlayGames");
PlayGames.onclick = function(){
    game1.textContent = "Cookie game";
    game2.textContent = "Game 2";
    game3.textContent = "Game 3";
};



