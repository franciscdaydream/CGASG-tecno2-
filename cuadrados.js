/*/////////////////////
ANCHO CUADRADO
//////////////////////*/

let anchocuadros = 38;

class cuadros{
      
  constructor(pX,pY/*,paleta*/){
        this.x = pX;
        this.y = pY;
        /*paleta = paleta;*/
  }
  dibujar(){
    push();
    translate(50,50)
    noStroke();
    fill(0,0,random(0,50));
    square(this.x,this.y,anchocuadros);
    pop();
  }

}