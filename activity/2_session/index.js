// Ejercicio 1
console.log("%cEjercicio 1 | Session 2", "color:#C78283");

const cat = {
  color: 'black',
  name: 'Uma',
  age: '2 years'
}
const propertiesList = [cat.color, cat.name, cat.age];
console.log(propertiesList);

// Ejercicio 2
console.log("%cEjercicio 2 | Session 2", "color:#C78283");
const thisValuesIntro = 'This es keyword o palabra reservada';
const thisValuesGlobal = 'Global: Fuera de una funcion hace referencia a un objeto';
const thisValuesFunction = 'Function: hace referencia el objeto global window y en strict-mode es undefined';
const thisValuesMethod = 'Method: Hace referencia al dueno de un objeto. Y sea llamando a un objeto por ejemplo this.y o referenciado su propio objeto por ejjemplo return this';
const thisValuesAlone = 'Alone: Hace referencia al object window';


console.log(`${thisValuesIntro}\n${thisValuesGlobal}\n${thisValuesFunction}\n${thisValuesMethod}\n${thisValuesAlone}`);


// Ejercicio 3
console.log("%cEjercicio 3 | Session 2", "color:#C78283");
const reverseString = (strg) => strg.split("").reverse().join("");
const strg = 'Hello World';
console.log(`Using arrow function: ${reverseString(strg)}\nNot using arrow function: ${strg}`);

// Ejercicio 4`
console.log("%cEjercicio 4 | Session 2", "color:#C78283");
console.log("Will alert as soon as the page is loaded");

class User {

  username;
  password;

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    var sucecessLogin = 'User logged in';
    if(this.username === 'admin' && this.password === 'passwd'){
      alert(sucecessLogin);
    }
  }
  loginBad(username, password) {
    var invalidLogin = 'Invalid username or password';
    if(this.username != password && this.password != password){
      alert(invalidLogin);
    }
  }

}

// Usage:
let user = new User("admin", "passwd");
user.login();
let userBad = new User("pepe", "qwe");
user.loginBad();


// Ejercicio 5
console.log("%cEjercicio 5 | Session 2", "color:#C78283");
console.log("Use Login Ejercicio 5 btn");
function getCredentials(){
  //variabels
  const password = 'passwd';
  const userName = 'admin';
  const sucessMessage = 'User logged in';
  const errorMessage = 'Invalid user or password';
  //user input
  const userCredential = prompt(`User Name:`, `${userName}`);
  const passCredential = prompt(`Password:`, `${password}`);
  //condition
 if (userCredential === userName && passCredential === password){
   alert(sucessMessage);
 } else {
   alert(errorMessage);
 }
}

// Ejercicio 6
console.log("%cEjercicio 6 | Session 2", "color:#C78283");

// let loginWitUsername = (username, password) => {
//     return new Promise(function (resolve, rejected) {
//       setTimeout(() => {
//         if (username === "admin" && password === "passwd") {
//           resolve("User logged in");
//         } else {
//           rejected("Error: invalid username or password");
//         }
//       }, 200);
//     });
// };

const good = document.getElementById('loginSuccessAsync');
const bad = document.getElementById('loginFailureAsync');
const loginWitUsername = (username, password) => {
return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
          alert("User logged in with promise");
        } else {
            rejected("Error: invalid username or password");
          }
      }, 200).then(function(){
        if(username != "admin" && password != "passwd"){
          alert("Error: invalid username or password -promise-");
        }
      });
  });
};
good.addEventListener('click', () => {
  const password = 'passwd';
  const username = 'admin';
  loginWitUsername(username, password)
    .then(()=>{good.textContent = "User logged in"})
    .catch(()=>{
      bad.addEventListener('click', ()=> {
        loginWitUsername('user', 'invalid')
        alert("Error: invalid username or password -promise-");
      });
    })
});