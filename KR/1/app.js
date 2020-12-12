//1 задание
console.log("1 задание")


   class User {



        set name(name) {

          this._name = name.replace(/\s/g, '');
        }
    
        get name() {
          return this._name;
        }


    }

    let Petya = new User;
    Petya.name = "Petya"
    console.log(Petya._name)

    let Sanya = new User;
    Sanya.name = "Sasha"
    console.log(Sanya._name)





//2 задание
console.log("2 задание")



class Human {

     constructor(name){

    this._name = name

}
}

const Jane = new Human("Jane")
console.log(Jane._name)





//3 задание
console.log("3 задание")

console.log("node.js это это среда, где осуществляется работа с java scirpt")





//4 задание
console.log("4 задание")

console.log("DOM – это объектная модель документа, которую браузер создаёт в памяти компьютера на основании HTML-кода, полученного им от сервера.")





//5 задание
console.log("5 задание")



function summa(a,b){
    return a + b
}
console.log(summa(1,2))


function age(age){

  age = prompt("Возрасат")
if (age > 18)
 alert ("Вход разрешен")
else {
 alert ("Вход зарещен")
}
} 
age()




//6 задание
console.log("6 задание")



let Usser = {

  name : "  Alex  ".toLowerCase().trim()  ,

  age : 23

}

console.log(Usser.name)





//7 задание
console.log("7 задание")



let namee=prompt("Введите имя")
let num = ["привет","мир"]
console.log(num)
num.pop(1,1)//удаление элемента c конца массива
console.log(num)

num.push(namee)//добавление элемента в конец массива
console.log(num)

num.splice(1,1,"мир")//замена элемента
console.log(num)

let words = num.join(" ")
console.log(words)//преобразует массив в сторку

let numm = words.split(" ")
console.log(num)//преобразует строку в массив

let delnum = numm.splice(1,1)
console.log(delnum)//возвращение массива из удаленных элементов




//8 задание
console.log("8 задание")



a = prompt()
b = prompt()
let text = JSON.stringify({a ,b });
downloadAsFile(text);

function downloadAsFile(data) {
let a = document.createElement("a");
let file = new Blob([data], {type: 'application/json'});
a.href = URL.createObjectURL(file);
a.download = "example.txt";
a.click();
}




//9 задание
console.log("9 задание")



console.log("Cамое важное в css это умение его использовать")




//10 задание
console.log("10 задание")



console.log("Cамое важное в HTML это умение его использовать")