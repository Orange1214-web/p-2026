// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 10; // マスの一辺の長さ

  noStroke(); // 枠線を消してみる


  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j

　　　 // i + j　が偶数か奇数かで色を変える
      if ((i + j) % 2 == 0) {
        fill(255); // 白色
      } else {
        fill(128); //  灰色
      }
　　　　//背景の市松模様を描く
      rect(size * i, size * j, size, size);


      // 偶数のマスのときだけ丸を描く 
        if( j < 3 && (i + j) % 2 == 1){
          fill(255,0,0); 　//赤色
          circle(i * size + size / 2, j * size + size / 2, size * 0.8);
        } 
        if(j < 10 && j > 6 && (i + j) % 2 != 0){
          fill(0);　//黒色
          circle(i* size + size / 2, j * size + size / 2, size * 0.8 );
        }
    }
  }
}