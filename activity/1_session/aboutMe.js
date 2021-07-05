const firstAndLastName = "Maria Fernanda Ibarra Morera";
const profession = "Interior Design";
const job = "Full Stack Developer";
const devtools1 = '1. Elements: para probar cambios a nivel de hmtl y css antes de implementarlos directamente en el codigo, a la hora de usar frameworks como angular se pueden modficar los atributos de hmtl';
const devtools2 = '2.Network: identificar fallos y llamadas al api'
const devtools3 = '3.Console: en proyectos tanto de arquitectura compleja como no tan compleja la consola es parte elemental para el front end ya que nos ayuda a ubicar la ejecuacion del codigo con el UI.'
const typeModule1 = '1.el atributo type module permite definier el scope, el cual se limita a ese modulo, mientras que sin el uso del atributo el scope es global.'
const typeModule2 = '2.Usar imports de otros modulos dentro del tag, al no estar difinido el type module resultaria en un error de compilacion, osea el type module contiene ES6'


//Ejercicio 1
export const intro = `Hi my name is ${firstAndLastName}. I studied ${profession}. \n
But have been working as a ${job} for 3 years and currently getting a Masters degree to become a more complete ${job} professional.`;

//Ejercicio 2
export const respuestaEjercicio2 = 'El orden de ejecucion seria about.js y luego la llamada del console.log en el index';

//Ejercicio 3
export const respuestaEjercicio3 = `${devtools1}\n${devtools2}\n${devtools3}`;

//Ejercicio 4
 export const x = () => {
    
 }

 //Ejercicio 5 
 export const respuestaEjercicio5 = `Algunas diferencias al usar el type module o un script clasico son:\n${typeModule1}\n${typeModule2}`;
