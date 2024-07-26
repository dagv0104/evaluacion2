//Ejercicio 1
let libro = {
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes Saavedra',
    añoPublicacion: '1605'
}

console.log(libro)

//Ejercicio 2
let estudiante = {
    nombre: 'Diego Garcia',
    edad : '24'
}

estudiante.edad = '25'
estudiante.curso = 'Tercer semestre'

console.log(estudiante)

//Ejercicio 3
let carro = {
    marca: 'Dodge',
    modelo: 'Challenger',
    año: '1970'
}

carro['modelo'] = 'Charger'

console.log(carro)

//Ejercicio 4
let persona = {
    nombre: 'Diego Garcia',
    edad: '24',
    ciudad: 'Naguanagua'
}

for(i in persona){
    console.log(persona[i])
}

//Ejercicio 5
let producto = {
    nombre: 'Ryzen 5 5600GT',
    precio: '115$',
    stock: 10
}

console.log(Object.keys(producto), Object.values(producto))
console.log(Object.entries(producto))

//Ejercicio 6
let empleado = {
    nombre: 'Diego Garcia',
    salario: '240$'
}

let nuevoSalario = '220$'

empleado.salario = nuevoSalario

console.log(empleado)

//Ejercicio 7
let usuario = {
    nombre: 'Diego Garcia',
    email: 'garciadiego@gmail.com'
}

console.log(`Holaaa!!! ${usuario.nombre}`)

//Ejercicio 8
let configuracion = {
    tema: 'dark',
    idioma: 'aleman'
}

Object.freeze(configuracion)

configuracion.tema = 'light'

console.log(configuracion)