/* // String
let texto = 'Roberto Ochaeta';

// number
let numero = 14;
let decimal = 15.25;



// Boolean 
let mayor_Edad = true;
let menor_Edad = Boolean(0);

//Array
let paises =['España','Mexico', 'Alemania']

 
// null
let vacio = null;
// undefined
let no_definido = undefined;

console.log(paises[1]);
console.log(typeof texto, typeof decimal,typeof numero,typeof mayor_Edad,typeof menor_Edad,typeof paises,
    typeof vacio,
    typeof no_definido); */

/* JSON
    JavaScript Object Notation
*/    

let pelicula ={
    titulo: 'EL Juego del calamar',
    genero: 'Violencia',
    year: 2021,
    director: 'Robertio Ochaeta',
    mostrar: function(){
        return `
        ***** La Pelicula de la semana *****
         Titulo: ${this.titulo} 
         Genero. ${this.genero} \n
        Director: ${this.director}
        Año: ${this.year}
        `
    }
};
pelicula["pais"] = "Guatemala"
delete pelicula.director;
// delete pelicula.year;
delete pelicula['year'];
pelicula.genero= null;
// console.log(pelicula.mostrar())
// console.log(pelicula.titulo, pelicula.genero);
console.log("titulo" in pelicula)
console.log("year" in pelicula);

for (let clave in pelicula){
    console.log(clave);
}