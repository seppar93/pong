class Vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Rect {
  constructor(w,h) {
    this.pos = new Vec;
    this.size = new Vec(w,h)
  }
}

class Ball extends Rect {
  constructor(){
    super(10, 10);
    this.vel = new Vec
  }
}


const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

const ball = new Ball;
ball.pos.x = 100;
ball.pos.y = 50;
console.log(ball);
ball.vel.x = 100;
ball.vel.y = 100;
let lastTime;
function callBack(millis){
  if (lastTime){
    update((millis - lastTime) / 1000);
  }
  lastTime = millis;
  requestAnimationFrame(callBack);
}



function update(dt){
  ball.pos.x += ball.vel.x * dt; // ball movement is relvetive to the time
  ball.pos.y += ball.vel.y * dt;


  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#fff";
  context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}
callBack();
