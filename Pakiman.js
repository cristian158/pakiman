class Pakiman {
  constructor(n,v,a) {
    this.imagen = new Image();
    this.nombre = n;      //nombre es un atributo
    this.vida = v;
    this.ataque = a;
          // this es indicador de la instancia de la CLase (i.g. Pakiman)
          // en la que estoy (i.g. cauchin) y le agrega un tipo (i.g. tierra)
    this.imagen.src = images[this.nombre];
  }
  hablar(){
    alert(this.nombre)
  }
  mostrar(){
    document.body.appendChild(this.imagen); // not directly on document; body es etiqueta raíz
    document.write("<strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + '<hr />');

  }
}
