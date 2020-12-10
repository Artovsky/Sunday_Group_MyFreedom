//1
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

//2

const Person = class {
    constructor(options) {
        this.name = options.name;
        this.secondName = options.secondName;
        this.age = options.age;
    }

  set name(value) {
    if (value.length < 1) {
      alert("Имя слишком короткое, должно быть более 1 символa");
      return;
    }
    this._name = value;
  }
       
    get fullName() {
        return `${this.name} ${this.surname}`;
      }

}

const dino = new Person({name:'Vlad', secondName:'Haiduk', age: 15})
console.log(dino)

//3

//Node.js — это серверная платформа для работы с JavaScript через движок V8. 
//JavaScript выполняет действие на стороне клиента, а Node — на сервере.

//4 

//DOM это программный эинтерфейс доступа к элементам веб-страниц

//5

function firstFunc(a,b) {
    return(a+b)
}

console.log(firstFunc(1,2))

function secondFunc() {
    alert( 'Всем привет!' );
  }

//6
let company = {
    name: 'SuckBigDick',
    host: '.com',
    people: 22,
    age: '2 days',
    fullName: ""

}

company.fullName = function full() {
    return this.name + this.host
}

console.log(company.name.toLowerCase())

//7

let random = [1,4,2,7,5,9,6,0,3,8]

random.splice(1,2)
console.log(random)

delete(random[1])
console.log(random)

random.forEach(alert)
console.log(random)

console.log(random.indexOf(8))

random.sort()
console.log(random)

//8
function CreateFile() {
 var fso, tf;
 fso = new ActiveXObject("Scripting.FileSystemObject");
 tf = fso.CreateTextFile("c:testfile.js", true);
 // Вставка строки с переносом на новую.
 tf.WriteLine("let a = 10") ;
 // Вставка 3 пустых строк.
 tf.WriteBlankLines(1) ;
 tf.WriteLine("let b = 3") ;
 tf.Close();
}

//9-10

//самое главное в html и css это код!
