//#1
class user {
    constructor() {

    }
    set name(name) {
        this._name = name.trim().toLowerCase(); 
    }
    get name() {
        return this._name;
    }
}

const student = new user();
student.name = '        ALEx      '
console.log(student)
console.log(student.name)

class CoffeeMachine {
    _waterAmount = 0;
    set waterAmount(value) {
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
    get waterAmount() {
      return this._waterAmount;
    }
    constructor(power) {
      this._power = power;
    }
  }
  let coffeeMachine = new CoffeeMachine(100);
  coffeeMachine.waterAmount = 10;



//#2
class Arina {
    constructor(height, age) {
        this.height = height;
        this.age = age;
    }
    set height(height) {
        this.height = height.trim().toLowerCase(); 
    }
    get name() {
        return this.name;
    }   
}

//const student = new Arina(); //выдаёт ошибку, я не понимаю почему
student.height = '                 167          '
console.log(student);
console.log(student.name);

//#3
/*Node или Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода.*/

//#4
/*Объектная Модель Документа (DOM) – это программный интерфейс (API) для HTML и XML документов.*/

//#5
let User = 'Арина'
function message() {
    let mess = 'Привет,' + User + '!'
    console.log(mess)
}

message();

function sum(a,b) {
    return a + b;
}
 let res = sum(6,5)
 console.log(res);

//#6
const userr = {
    age: 16,
    name: 'Arina',
    gender: 'female',
    status: 'student',
};
const keys = Object.keys(userr);
console.log(keys)

//#7
let vs = ['satana', 'bojenka', 'allah', 'budda']
console.log(vs)

vs.pop()
console.log(vs)//удаляет последний элемент

vs.unshift('Zevs')//добавляет элемент в начало массива
console.log(vs)

vs.push('Aid')//добавляет последний элемент
console.log(vs)

vs.splice(3,1) //удаляет элемент стоящий под данным индексом (3), столько элементов удаляет (1)
console.log(vs)

vs.forEach(alert) //каждый элемент массива вызывается отдельно через alert

//#9,10
//Всё очеень важно)