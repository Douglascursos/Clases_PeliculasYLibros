//Plantilla necesaria para el formato de los Libros.
class Libro {
 titulo;
 autor;
 codigo;
 isbn;
 edicion;
 editorial;
 precio;
 origen;
 cantidadDisponible;
 lugarDeCompra;

 constructor (titulo, autor, codigo, isbn, edicion, editorial, precio, origen, cantidadDisponible, lugarDeCompra){
  this.titulo = titulo;
  this.autor = autor;
  this.codigo = codigo;
  this.isbn = isbn;
  this.edicion = edicion;
  this.editorial = editorial;
  this.precio = precio;
  this.origen = origen;
  this.cantidadDisponible = cantidadDisponible;
  this.lugarDeCompra = lugarDeCompra;
 }
}
module.exports = Libro;