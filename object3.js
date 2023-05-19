let receta = {}

receta.nombre = "Sandwich";
receta.ingredientes = [];

//punto 4
receta.ingredientes.push({nombre: "Pan", cantidad: 2});

//punto 5
receta.ingredientes.push({nombre: "Queso:", cantidad: 1});

//punto 6
console.log(receta.ingredientes[0].nombre);

//punto 7
let cantotal = 0;
for(var i=0; i<receta.ingredientes.length; i++){
    cantotal +=receta.ingredientes[i].cantidad;
}

console.log(cantotal);

