document.addEventListener('DOMContentLoaded',function(){
let nombre = 'Roberto';
let apellidos = 'Ochaeta';
let profesion = 'Desarrollador Web'
let NIA = nombre + " " +   apellidos + "\n" + profesion;

let plantilla =`
${nombre} ${apellidos}
${profesion}

`
function Ficha(nombre,apellidos,profesion){
    let fichaTecnica=
    `
    <div class="ficha">
    <h2>${nombre} ${apellidos}</h2>
    <h3> ${profesion}</h3>
    <p>Forma parte del equipo de DanKenSoft</p>
    `
    return fichaTecnica;
}


let CajaFicha=document.createElement("section");

CajaFicha.innerHTML=Ficha('Jaquelinne', 'Hernandez','Estudiante')
CajaFicha.innerHTML+=Ficha('Sofia ', 'Sarceño','Estudiante')
CajaFicha.innerHTML+=Ficha('Ayezuana', 'Gonzales','Cobradora');


    document.body.appendChild(CajaFicha);
},false)
// console.log(plantilla)
// console.log(NIA);