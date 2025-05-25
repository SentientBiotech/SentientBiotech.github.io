let t = 0;
let cycleDuration = 6; // seconds
let minRadius = 50;
let maxRadius = 150;
let startTime;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textFont('Arial');
  startTime = millis();
}

function draw() {
  background(255);
  let elapsed = (millis() - startTime) / 1000;
  let phase = Math.floor(elapsed / cycleDuration) % 2 === 0 ? "inhale" : "exhale";
  let localTime = elapsed % cycleDuration;
  let t = sin((localTime / cycleDuration) * (PI / 2));

  let radius, colorVal, text;
  if (phase === "inhale") {
    radius = lerp(minRadius, maxRadius, t);
    colorVal = lerpColor(color(135, 206, 250), color(255, 182, 193), t);
    text = "Inhale";
  } else {
    radius = lerp(maxRadius, minRadius, t);
    colorVal = lerpColor(color(255, 182, 193), color(135, 206, 250), t);
    text = "Exhale";
  }

  fill(colorVal);
  noStroke();
  circle(width / 2, height / 2, radius * 2);

  fill(0);
  textSize(map(radius, minRadius, maxRadius, 30, 72));
  text(text, width / 2, height / 2);
}
