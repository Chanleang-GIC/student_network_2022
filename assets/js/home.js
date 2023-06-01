function drawRectangular(ctx , i, j){
    ctx.fillRect(i*j,i*j,150,100);
    ctx.strokeRect(i*j,i*j,150,100);
}
const canvas = document.querySelector('#canvas' );
canvas.width = 1000;
if ( canvas.getContext){
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "red";
    let j=100;
    for(let i = 0; i<3; i++){
        drawRectangular(ctx, i,j);
    
    }
}

console.log(canvas)
var canvas1 = null;
let canvas2 = null; 