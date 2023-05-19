let pedro = {
    nombre: "Pedro Perez",
    edad: 35,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
};

//punto 2
console.log(pedro.edad);

//punto 3
pedro.estatura = 1.8;

//punto 4
delete pedro.activo

//punto 5
let info = [
    {nombre: "Pedro Perez", edad: 35, hobbies: ["programar", "squash", "piano"], estatura: 1.8}
];

//punto 6
info[0].saluda = function(){
    return "Hola, me llamo "+ this.nombre;
}

for (let i = 0; i<info.length; i++){
    let inf = info[i];
    console.log(inf.saluda());
    console.log("Nombre: " + inf.nombre);
    console.log("Edad: " + inf.edad);
    console.log("Hobbies: " + inf.hobbies);
    console.log("Estatura: " + inf.estatura);

}

