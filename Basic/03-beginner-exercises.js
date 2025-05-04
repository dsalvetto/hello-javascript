/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// 2. Escribe un comentario en varias líneas

/* 


fdhg
dfh
dfh
dfh
dfh
dfh
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

//string
let myName = "Diego Salvetto"
//numbers
let age = 22
let height = 1.73
console.log(myName)
console.log(age)
console.log(height)
//boleanos
let isRaining= false
let isCloudy =true
console.log(isRaining)
console.log(isCloudy)   
//undefined
let undefinedValue = undefined
let undefinedValue2
console.log(undefinedValue2)
console.log(undefinedValue)
// null
let nullValue = null
console.log(nullValue)

// symbol
let mySymbol = Symbol("%")
console.log(mySymbol)

// bigInt
let myBigInt = BigInt(1234567890123456789012345678901234567890)
console.log(myBigInt)
// 4. Imprime por consola el valor de todas las variables, hecho


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myName) // string
console.log(typeof age) // number
console.log(typeof height) // number
console.log(typeof isRaining) // boolean
console.log(typeof isCloudy) // boolean
console.log(typeof undefinedValue) // undefined
console.log(typeof undefinedValue2) // undefined
console.log(typeof nullValue) // object (esto es un bug de JavaScript)
console.log(typeof mySymbol) // symbol
console.log(typeof myBigInt) // bigint    

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Juan Pérez"
age = 30
height = 1.80
isRaining = true
isCloudy = false
undefinedValue = "No definido"
undefinedValue2 = "No definido 2"
nullValue = "Valor nulo"
mySymbol = Symbol("Nuevo símbolo")
myBigInt = BigInt(9876543210987654321098765432109876543210)
console.log(myName) // "Juan Pérez"
console.log(age) // 30
console.log(height) // 1.80
console.log(isRaining) // true
console.log(isCloudy) // false
console.log(undefinedValue) // "No definido"
console.log(undefinedValue2) // "No definido 2"
console.log(nullValue) // "Valor nulo"
console.log(mySymbol) // Symbol("Nuevo símbolo")
console.log(myBigInt) // 9876543210987654321098765432109876543210


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myName = 12345 // Cambiado a número
age = "Treinta" // Cambiado a string
console.log(myName) // 12345
console.log(age) // "Treinta"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse