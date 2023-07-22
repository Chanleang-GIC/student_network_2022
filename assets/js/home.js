const drawRectangular = (ctx, x, y) => {
    ctx.fillRect(x, y, 150, 100);
    ctx.strokeRect(x, y, 150, 100);
  };
const drawRectangular2 = (ctx, x, y) => {
    ctx.fillRect(x, y, 50, 100);
    ctx.strokeRect(x, y, 50, 100);
  };

const drawImage =(context, image) =>{
    const imageObject = new Image();
    imageObject.src= image.src;

    imageObject.onload = function(){
        context.drawImage(imageObject,x,y);
    };
}
  
  const canvas = document.querySelector("#canvas");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    const car = new Image();
    car.src="./assets/images/car.png";
    car.onload = function (){
        ctx.drawImage(car,500,500);
    }

    ctx.fillStyle = "orange";
    ctx.strokeStyle = "black";
  
    let x = 50;
    let y = 50;
    for (let i = 0; i < 20; i++) {
      console.log(i);
      drawRectangular(ctx, x, y);
      x = x + 100;
    }
    drawRectangular2(ctx,50,150);
    let x1 = 100;
    let y1 = 150;
    for (let i = 0; i < 20; i++) {
        console.log(i);
        drawRectangular(ctx, x1, y1);
        x1 = x1 + 100;
    }
    let x2 = 50;
    let y2 = 250;
    for (let i = 0; i < 21; i++) {
        console.log(i);
        drawRectangular(ctx, x2, y2);
        x2 = x2 + 100;
    }
    drawRectangular2(ctx, 50,350);
    let x3 = 100;
    let y3 = 350;
    for (let i = 0; i < 20; i++) {
      console.log(i);
      drawRectangular(ctx, x3, y3);
      x3 = x3 + 100;
    }
  }
  console.log(canvas);

  t