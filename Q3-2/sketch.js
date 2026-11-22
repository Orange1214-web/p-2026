// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect( 0, groundY, width, height - groundY );


  // BLANK[1] キャラクターの左右移動
  if ( keyIsDown(RIGHT_ARROW) ){
    vx = 5;
    if( keyIsDown(SHIFT) ){
      vx = 10;  //走る
    }
  } else if (keyIsDown(LEFT_ARROW)){
    vx = -5;
    if (keyIsDown(SHIFT)){
      vx = -10; //走る
    }
  } else {
    vx = 0
  }



  // BLANK[2] 重力とジャンプ
  vy += g //重力を与える
  if ( y + size / 2 >= groundY ){ //地面に着地したら
    y = groundY - size / 2;
    vy = 0; //落下速度をリセット
  }
  if ( keyIsDown && key === " " && y + size /2 >= groundY ){
    vy = -15; //ジャンプの初速
  } 

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(150, 150, 0);
  ellipse(x, y, size, size);
}