

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100,100);
  angleMode(DEGREES)
}

function marcos(color,saturacion,brillo,grosor){
  push();
  stroke(color,saturacion,brillo)
  strokeWeight(grosor);
  line(0,0,width,0)
  line(width,0,width,height);
  line(width,height,0,height);
  line(0,height,0,0);
  pop();
}

function draw() {
  background(0);

   cuadro = [];
   rombo = [];

  for (let x = 0; x < anchocuadros*16; x += anchocuadros) {
    for (let y = 0; y < anchocuadros*8; y += anchocuadros) {
      cuadro[x] = new cuadros(x, y);
      cuadro[x].dibujar();
    }
  }

  for (let x = anchocuadros-anchocuadros/3; x < anchocuadros*8; x += anchocuadros*2) {
    for (let y = anchocuadros-anchocuadros/3; y < anchocuadros*8; y += anchocuadros*2) {
  
      rombo[x] = new rombos(x, y);
      rombo[x].dibujar();

    }
  }

  marcos(41,8,96,100);
  marcos(165,2,83,70);

}
