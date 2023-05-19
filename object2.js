let persona = {
    nombre: "Brayan",
    edad:29,
    ciudad:"Cali",
    profesion:"Tecnologo Industrial",
}


//punto 3
function presentacion(persona){
    return "Hola mi nombre es "+ persona.nombre + " soy " + persona.profesion + " tengo " + persona.edad + " años y soy de " + persona.ciudad;
}

//punto 4
let mensaje = presentacion(persona);

//punto 5
console.log(mensaje);

//punto 6 

persona.hobbies = ["soccer","swim", "read", "listen music"];

//punto 2
console.log(persona);

//Punto 7
console.log(persona.hobbies.join(","));
