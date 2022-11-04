import {Player} from './Player.js';

//* Elements to create*/
const canvas = document.createElement('canvas');
const style = document.createElement('style');
var ctx = canvas.getContext('2d');

let player;

//coordinates
let x = 0, y = 0;

let settings = {
    fps: 60,
}

//setup canvas and the main things
function setup(){
    document.body.appendChild(canvas);//insert the canvas on the document
    document.head.appendChild(style);//insert the style of the js into the DOM
    css2Canvas(800, 800);//Call the function to give the style to the canvas
    draw();
}

//Draw char and map
function draw(){
    player = new Player(50, 50, 1, 1);
    //draw the personage
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "green";
    ctx.rect(player.x, player.y, player.width, player.height);
    ctx.stroke();


}

function update(){
    canvas.update();
}

/* Function to give the css to canvas*/
function css2Canvas(width, height){
    var css = `canvas{border: 1px solid white;width: ${width}px; height: ${height}px}`;
    style.innerHTML = css;
}

/*Section to call functions for start*/
setup();