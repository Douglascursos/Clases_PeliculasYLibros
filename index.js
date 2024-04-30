/*Este es el archivo principal.
Aqui se muestran las opciones que ofrece el programa.
Cuenta con 3 opciones en el menu de inicio, la primer opcion 1) Peliculas, permite listar las peliculas existentes.
La segunda opcion 2) Libros, permite listar los libros existentes.
La tercera opcion 3) Panel administrativo, permite agregar peliculas y libros.
*/

//Importamos la clase Agregar, se utiliza para agregar nuevas peliculas y libros.
const Agregar= require("./modelos/Agregar");
//Menu, muestra las opciones del programa.
function menu(){
 var opcion = 3;
 console.log(`\n Cuento con una serie de servicios para descargar peliculas y libros. \n Ingresa la opcion para ver los resultados \n Servicios:` + `\n 1) Peliculas \n 2) Libros \n \n Ingresa la opcion:`);
 if (opcion == 1){//Si opcion es 1, deberia mostrar las lista de Peliculas existentes, el resultado sera undefined ya que se debe agregar en la tercer opcion las pelicula.
 var datosPelicula = new Agregar(1, []);
 datosPelicula.mostrarPeliculas();
 } else if (opcion == 2){//Si opcion es 2, deberia mostrar las lista de Libros existentes, el resultado sera undefined ya que se debe agregar en la tercer opcion los libros.
    var datosLibro = new Agregar(2, []);
 datosLibro.mostrarLibros();
 } else if (opcion == 3) {//Si opcion es 3, permite agregar nueva pelicula o libro. Segun la opcion se crean objetos y se pasan como argumentos intanciado la clase Agregar.
 console.log(`\n Panel Administrativo \n Agregar Pelicula o Libro \n 1) Agregar Pelicula  \n 2) Agregar Libro \n Ingresa la opcion: `);
  opcion = 1;
 if (opcion == 1){
 var datos = {//Nuevo objeto Pelicula
    titulo: "Vivimos en una simulacion",
    autor: "Douglas Espinoza",
    version: "1.0",
    fechaPublicacion: "01/01/2024",
    duracion: 1,
    precio: 100,
    origen: "Honduras",
    cantidadDisponible: 1,
    lugarDecompra: "Cines y librerias"
 }
 var pelicula = new Agregar(3, datos);//Se pasa el objeto Pelicula.
 pelicula.mostrarPeliculas();//Se muestran las Peliculas.
 } else if(opcion == 2) {
 var datos = {//Nuevo objeto Libro
    titulo: "Las paredes del Universo",
    autor: "Douglas Espinoza",
    codigo: "1ashi",
    isbn: "Shk",
    edicion: 1,
    editorial: "Guaymuras",
    precio: 100,
    origen: "Honduras",
    cantidadDisponible: 1,
    lugarDecompra: "Librerias a nivel nacional"
 }

 var nuevoLibro = new Agregar(4, datos);//Se pasa el objeto Libro.
 nuevoLibro.mostrarLibros();//Se muestran los libros.
 }else {
   menu();
 }
 }

}

menu();

