export class SpriteSheetLoader {
    
  constructor(imagePath, spriteWidth, spriteHeight) {
    this.image = new Image();
    this.image.src = imagePath;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.loaded = false;

this.image.onload = () => {
  this.loaded = true;
  console.log("✅ enemy.png loaded successfully");
};
this.image.onerror = () => {
  console.error("❌ Failed to load enemy.png");
};

  }

drawSprite(ctx, spriteIndex, x, y, width, height) {
  if (!this.loaded) {
    console.log("❌ Image not loaded yet");
    return;
  }

  const cols = Math.floor(this.image.width / this.spriteWidth);
  const sx = (spriteIndex % cols) * this.spriteWidth;
  const sy = Math.floor(spriteIndex / cols) * this.spriteHeight;

  console.log(`🎯 Drawing sprite: index=${spriteIndex}, cols=${cols}`);
  console.log(`📐 Source: sx=${sx}, sy=${sy}, sw=${this.spriteWidth}, sh=${this.spriteHeight}`);
  console.log(`🖼️ Image size: ${this.image.width}x${this.image.height}`);
  console.log(`📍 Destination: x=${x}, y=${y}, w=${width}, h=${height}`);

  ctx.drawImage(
    this.image,
    sx, sy, this.spriteWidth, this.spriteHeight,
    x, y, width, height
  );
}


}
