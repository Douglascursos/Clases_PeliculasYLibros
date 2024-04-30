//Aqui se utilizan las clases o plantllas Pelicula y Libro para guardar los datos de los nuevas peliculas y libros.
const Pelicula = require("./Pelicula");
const Libro = require("./Libro");

class Agregar {
 pelicula;
 libro;
 totalPeliculas = [];
 totalLibros = [];

 constructor (opcion, datos){
 if (opcion == 1){
  this.mostrarPeliculas();
 } else if (opcion == 2){
  this.mostrarLibros();
 } else if (opcion == 3){
 this.pelicula = new Pelicula(datos.titulo, datos.autor, datos.version, datos.fechaPublicacion, datos.duracion, datos.precio, datos.origen, datos.cantidadDisponible, datos.lugarDeCompra);
 this.totalPeliculas.push(this.pelicula);
 } else if (4){
this.libro = new Libro(datos.titulo, datos.autor, datos.codigo, datos.isbn, datos.edicion, datos.editorial, datos.precio, datos.origen, datos.cantidadDisponible, datos.lugarDeCompra);
this.totalLibros.push(this.libro);
 } 
}

 mostrarPeliculas () {
    var contador = 0;
    var resultado = ()=>{
        for (var indice = 0; indice < this.totalPeliculas.length; indice ++){
        contador += 1;
        return  `\n Total libros: ${contador}` + `\n ` + `Titulo: ${this.totalPeliculas[indice].titulo + `\n Autor: ` + this.totalPeliculas[indice].autor + `\n Version: ` + this.totalPeliculas[indice].version + `\n Fecha de publicacion: ` + this.totalPeliculas[indice].fechaPublicacion + `\n Duracion: ` + this.totalPeliculas[indice].duracion + ` Hrs` + `\n Precio: ` + this.totalPeliculas[indice].precio + ` Lps` + `\n Pais de origen: ` + this.totalPeliculas[indice].origen + `\n Cantidad disponible: ` + this.totalPeliculas[indice].cantidadDisponible + ` \n Comprar en: ` + this.totalPeliculas[indice].lugarDeCompra}`;
        }
    }
    return console.log(resultado());
    }

  mostrarLibros (){
    var resultado = ()=>{
        for (var indice = 0; indice < this.totalLibros.length; indice ++){
        return  `\n ` + `Titulo: ${this.totalLibros[indice].titulo + `\n Autor: ` + this.totalLibros[indice].autor + `\n Codigo: ` + this.totalLibros[indice].codigo + `\n Isbn: ` +  this.totalLibros[indice].isbn + `\n Edicion: ` + this.totalLibros[indice].edicion + `\n Editorial: ` + this.totalLibros[indice].editorial + `\n Precio: ` + this.totalLibros[indice].precio + `\n Origen: ` + this.totalLibros[indice].origen + `\n Cantidad: ` + this.totalLibros[indice].cantidadDisponible + ` \n Comprar en: ` + this.totalLibros[indice].lugarDeCompra}`;
        }
    }
    return console.log(resultado());
 }

}

module.exports = Agregar;