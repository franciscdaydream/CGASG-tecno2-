class rombos{
      
  constructor(pX,pY/*,paleta*/){
        this.x = pX;
        this.y = pY;
        this.ancho = 16;
        /*paleta = paleta;*/
  }
  dibujar(){
    push();
    translate(47,63);
    noStroke();
    fill(0,0,100);
    quad(this.x,this.y,this.x+this.ancho,this.y-this.ancho,this.x+this.ancho*2,this.y,this.x+this.ancho,this.y+this.ancho);
    pop();
  }

}