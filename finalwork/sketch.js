// 最終課題　赤ちゃんの着せ替えゲーム

let scaleSize;
let offsetX, offsetY;
let outfitColorIndex = 0;
let skinToneIndex = 0;
let eyeColorIndex = 0;
let hairColorIndex = 0;
let isComplete = false;

const skinTones = [
  { body: [248, 203, 183], face: [250, 205, 183], ear: [246, 194, 174], detail: [210, 145, 130] },
  { body: [111, 72, 54], face: [132, 88, 68], ear: [119, 76, 58], detail: [95, 60, 48] },
  { body: [255, 224, 205], face: [255, 229, 212], ear: [246, 209, 191], detail: [216, 165, 146] }
];

const eyeColors = [
  [83, 63, 65],
  [137, 187, 222],
  [179, 188, 197],
  [126, 81, 57]
];

const hairColors = [
  [63, 49, 48],
  [137, 85, 58],
  [225, 184, 102]
];

const hairAreas = [
  { x: 450, y: 135, w: 290, h: 190 },
  { x: 385, y: 115, w: 110, h: 75 },
  { x: 450, y: 100, w: 105, h: 85 },
  { x: 515, y: 115, w: 110, h: 75 }
];

const outfitColors = [
  [190, 224, 240],
  [195, 226, 205],
  [202, 211, 241],
  [244, 198, 215],
  [246, 224, 173]
];

const outfitAreas = [
  { x: 450, y: 395, w: 285, h: 270 }
];

const faceArea = { x: 450, y: 205, w: 275, h: 250 };
const diaperArea = { x: 450, y: 485, w: 225, h: 115 };
const handAreas = [
  { x: 262, y: 439, w: 65, h: 52 },
  { x: 638, y: 439, w: 65, h: 52 }
];
const skinAreas = [
  { x: 325, y: 390, w: 85, h: 155 },
  { x: 575, y: 390, w: 85, h: 155 },
  { x: 375, y: 515, w: 105, h: 145 },
  { x: 525, y: 515, w: 105, h: 145 },
  { x: 303, y: 589, w: 78, h: 48 },
  { x: 597, y: 589, w: 78, h: 48 },
  ...handAreas
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("sans-serif");
}

function draw() {
  background(250, 232, 242);

  // 背景の飾り
  noStroke();
  fill(255, 255, 255, 170);
  for (let x = 30; x < width; x += 100) {
    for (let y = 30; y < height; y += 100) {
      circle(x, y, 7);
    }
  }

  // 赤ちゃんの大きさと位置
  scaleSize = min(width / 900, height / 700) * 0.85;
  offsetX = (width - 900 * scaleSize) / 2;
  offsetY = max((height - 700 * scaleSize) / 2, 100 - 40 * scaleSize);

  push();
  translate(offsetX, offsetY);
  scale(scaleSize);
  drawBaby();
  pop();

  drawText();
}

// 赤ちゃんを描く
function drawBaby() {
  const skinTone = skinTones[skinToneIndex];

  // おふとん
  noStroke();
  fill(255, 250, 245);
  ellipse(450, 350, 680, 500);

  // 腕と脚
  stroke(255);
  strokeWeight(8);
  fill(...skinTone.body);
  ellipse(325, 390, 85, 155);
  ellipse(575, 390, 85, 155);
  ellipse(375, 515, 105, 145);
  ellipse(525, 515, 105, 145);
  ellipse(303, 589, 78, 48);
  ellipse(597, 589, 78, 48);

  // 服とおむつ
  fill(...outfitColors[outfitColorIndex]);
  ellipse(450, 395, 285, 270);
  fill(255, 235, 245);
  ellipse(450, 485, 225, 115);

  // 手
  fill(...skinTone.body);
  ellipse(262, 439, 65, 52);
  ellipse(638, 439, 65, 52);

  // 足の指
  stroke(...skinTone.detail);
  strokeWeight(4);
  for (let i = -1; i <= 1; i++) {
    line(303 + i * 12, 582, 303 + i * 12, 597);
    line(597 + i * 12, 582, 597 + i * 12, 597);
  }

  // 髪と耳
  noStroke();
  fill(...hairColors[hairColorIndex]);
  ellipse(450, 135, 290, 190);
  fill(...skinTone.ear);
  ellipse(311, 215, 48, 72);
  ellipse(589, 215, 48, 72);

  // 顔
  stroke(255);
  strokeWeight(9);
  fill(...skinTone.face);
  ellipse(450, 205, 275, 250);

  // 前髪
  noStroke();
  fill(...hairColors[hairColorIndex]);
  ellipse(385, 115, 110, 75);
  ellipse(450, 100, 105, 85);
  ellipse(515, 115, 110, 75);

  // 目
  fill(...eyeColors[eyeColorIndex]);
  ellipse(395, 218, 18, 23);
  ellipse(505, 218, 18, 23);

  fill(255);
  circle(399, 212, 6);
  circle(509, 212, 6);

  // ほっぺ
  noStroke();
  fill(238, 151, 157, 130);
  ellipse(365, 250, 48, 24);
  ellipse(535, 250, 48, 24);

  // 口
  noFill();
  stroke(185, 105, 116);
  strokeWeight(6);
  arc(450, 263, 42, 25, 0, Math.PI);
}

// 画面の文字
function drawText() {

  fill(132, 91, 119);
  noStroke();
  textAlign("center", "center");
  textStyle("bold");
  textSize(45);
  text("あかちゃんの きせかえをしよう！", width / 2, 35);

  textStyle("normal");
  textSize(22.5);
  fill(100, 78, 91);
  text("ふく・はだ・め・かみ をタップして、すきな色にかえてみよう！", width / 2, 78);

  // 説明パネル
  fill(255, 255, 255, 235);
  stroke(255);
  strokeWeight(2);
  rectMode("center");
  rect(width / 2, height - 65, min(width - 30, 650), 65, 18);

  noStroke();
  fill(105, 78, 96);
  textSize(15);

  text("きせかえ後は右下の「OK」を押してね！左下のボタンをおすともういちど遊べるよ！", width / 2, height - 65);

  // ゲームの案内
  fill(255);
  noStroke();
  rect(width - 135, 38, 230, 54, 18);

  fill(105, 78, 96);
  textSize(17);
  text("おきがえのじかん", width - 135, 38);

  // コーデをリセットするボタン
  fill(151, 126, 184);
  rect(85, height - 35, 150, 50, 18);

  fill(255);
  textSize(18);
  text("もういちど", 85, height - 35);

  fill(230, 143, 171);
  rect(width - 85, height - 35, 150, 50, 18);

  fill(255);
  text("OK", width - 85, height - 35);

  if (isComplete) {
    drawThankYouBubble();
  }
}

function isInOutfit(x, y) {
  return outfitAreas.some((area) => pointInEllipse(x, y, area)) &&
    !pointInEllipse(x, y, faceArea) &&
    !pointInEllipse(x, y, diaperArea) &&
    !handAreas.some((area) => pointInEllipse(x, y, area));
}

function isInSkin(x, y) {
  return skinAreas.some((area) => pointInEllipse(x, y, area)) &&
    !pointInEllipse(x, y, faceArea) &&
    !isInOutfit(x, y);
}

function isInHair(x, y) {
  const [head, ...bangs] = hairAreas;
  return bangs.some((area) => pointInEllipse(x, y, area)) ||
    (pointInEllipse(x, y, head) && !pointInEllipse(x, y, faceArea));
}

function pointInEllipse(x, y, area) {
  const dx = (x - area.x) / (area.w / 2);
  const dy = (y - area.y) / (area.h / 2);
  return dx * dx + dy * dy <= 1;
}

function drawThankYouBubble() {
  const bubbleWidth = min(260, width - 24);
  const bubbleX = constrain(
    offsetX + 115 * scaleSize,
    bubbleWidth / 2 + 12,
    width - bubbleWidth / 2 - 12
  );
  const bubbleY = max(offsetY + 155 * scaleSize, 130);

  noStroke();
  fill(255);
  triangle(
    bubbleX + bubbleWidth * 0.38, bubbleY + 18,
    bubbleX + bubbleWidth * 0.43, bubbleY + 34,
    bubbleX + bubbleWidth * 0.48, bubbleY + 30
  );
  rect(bubbleX, bubbleY, bubbleWidth, 74, 20);

  fill(132, 91, 119);
  textAlign("center", "center");
  textSize(18);
  text("かわいくしてくれて\nありがとう！", bubbleX, bubbleY);
}

function mousePressed() {

  // コーデを最初の状態に戻す
  if (mouseX >= 10 && mouseX <= 160 && mouseY >= height - 60 && mouseY <= height - 10) {
    outfitColorIndex = 0;
    skinToneIndex = 0;
    eyeColorIndex = 0;
    hairColorIndex = 0;
    isComplete = false;
    return;
  }

  if (mouseX >= width - 160 && mouseX <= width - 10 &&
      mouseY >= height - 60 && mouseY <= height - 10) {
    isComplete = true;
    return;
  }

  const x = (mouseX - offsetX) / scaleSize;
  const y = (mouseY - offsetY) / scaleSize;

  if (dist(x, y, 395, 218) < 18 || dist(x, y, 505, 218) < 18) {
    eyeColorIndex = (eyeColorIndex + 1) % eyeColors.length;
  } else if (isInHair(x, y)) {
    hairColorIndex = (hairColorIndex + 1) % hairColors.length;
  } else if (pointInEllipse(x, y, faceArea)) {
    skinToneIndex = (skinToneIndex + 1) % skinTones.length;
  } else if (isInOutfit(x, y)) {
    outfitColorIndex = (outfitColorIndex + 1) % outfitColors.length;
  } else if (isInSkin(x, y)) {
    skinToneIndex = (skinToneIndex + 1) % skinTones.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
