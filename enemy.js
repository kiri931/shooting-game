export class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.speed = 2;
    this.color = "red";
  }

  update() {
    this.y += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export function spawnEnemy(canvasWidth) {
  const x = Math.random() * (canvasWidth - 20);
  return new Enemy(x, -20);
}
