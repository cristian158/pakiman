var images = [];
images['Cauchin'] = "vaca.png";
images['Pokacho'] = "pollo.png";
images['Tocinauro'] = "cerdo.png";
// if console.log(images), muestra en la consola la info interna, even if it
// doesn't show when invoking images (which shows "[]")

var coleccion = [];
coleccion.push(new Pakiman('Cauchin', 100, 30));
coleccion.push(new Pakiman('Pokacho', 80, 50));
coleccion.push(new Pakiman('Tocinauro', 120, 40));
//instead of defining "var cauchin =..." i can just define it in the push instance
// variables "cauchin", "pokacho", ..., are new objetos de Pakiman

for(var freddito of coleccion){
  freddito.mostrar();
}
