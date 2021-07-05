import {intro, respuestaEjercicio2, respuestaEjercicio3, respuestaEjercicio5} from './aboutMe.js';
// Ejercicio 1
console.log("%cEjercicio 1", "color:#C78283");
console.log(intro);

// Ejercicio 2
console.log("%cEjercicio 2", "color:#C78283");
console.log(respuestaEjercicio2);

// Ejercicio 3
console.log("%cEjercicio 3", "color:#C78283");
console.log(respuestaEjercicio3);

// Ejercicio 4
console.log("%cEjercicio 4", "color:#C78283");

for(let i=1;i<=100;i++)
{
    if(i%7==0)
    {
       console.log(`${i} es divisor de 7`); 
    }
}

// Ejercicio 5
console.log("%cEjercicio 5", "color:#C78283");
console.log(respuestaEjercicio5);

// Ejercicio 6
console.log("%cEjercicio 6", "color:#C78283");


 const formatter = {
    
    append: function(strg) {
      return this.prefix + strg;
    }
  }
  
  const prefix = {
    prefix:"Hello ",
  }

  var result = formatter.append.call(prefix, "World");
  var resultLowerCase = formatter.append.call(prefix, "I'm Fer").toLowerCase();
  console.log(result);
  console.log(resultLowerCase);



  

  