// Iteration 8: Making scoreboard functional

let ply_btn = document.getElementById("play-again-button")

ply_btn.addEventListener("click",redirect)

function redirect(){
    location.href="./game.html"
}

let score__ = document.getElementById('score-board');
let l_storage = localStorage.getItem("score");
score__.innerHTML = l_storage;