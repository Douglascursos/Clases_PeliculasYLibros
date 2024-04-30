//Plantilla necesaria para el formato de las peliculas.
class Pelicula {
 titulo;
 autor;
 version;
 fechaPublicacion;
 duracion;
 precio;
 origen;
 cantidadDisponible;
 lugarDeCompra;

 constructor (titulo, autor, version, fechaPublicacion, duracion, precio, origen, cantidadDisponible, lugarDeCompra){
  this.titulo = titulo;
  this.autor = autor;
  this.version = version;
  this.fechaPublicacion = fechaPublicacion;
  this.duracion = duracion;
  this.precio = precio;
  this.origen = origen;
  this.cantidadDisponible = cantidadDisponible;
  this.lugarDeCompra = lugarDeCompra;
 }
}
module.exports = Pelicula;

