// 1
let voc = [1, 956, 765, 34, 0, 4, 215, 86, 2134, 968]
voc.sort(function(a,b) {
    return a - b
})

console.log(voc)

//2
let myfreedom = ['vlad', 'andrei',' egor', 'olga']
myfreedom.splice(0, 0, 'Andrei')
console.log(myfreedom)

myfreedom.splice(2, 1)
console.log(myfreedom)

myfreedom.splice(4,0, [])
console.log(myfreedom)

myfreedom.splice(5,0, {})
console.log(myfreedom)

myfreedom.splice(3,3,'neformal', 'pansexual')
console.log(myfreedom)

//3
let classroom = ['daniil', 'oleg', 'jak fresco', 'god']
document.write(classroom.slice(2))

console.log(classroom.slice(-2, 1))

// идей пока нет, но надеемся, что будут

//4
let arr = [45, 34, "Аериндин", false, 12, "1", 4, "Привет"];

function compareNumeric(a, b) {
if (typeof a == "string") {
return 1;
} else if(typeof a == "number") {
  return b - a
}
}

//понятия не имею как оно работает и правильно ли, но я просто оставлю так


arr.sort(compareNumeric);
alert(arr);


// бот

let courses = {
  JavaScript: 'Выбирая js вы должны уметь уметь использовать использовать вёрстку',
  Python: ' Со временем вы поймете всю ценность матеши, если вы выбираете python',
  layout: 'Если вы решили изучать веб разработку',
  twoDesign: 'UI/UX level design and so on',
  threeDesign: 'Game Design and creating',
  Gamedev: 'Game programming and core developing',
  PM: 'Resourse and people managment(time too)'
  }
  let x = prompt('Какие курсы вас интересуют?')
  x = x.toUpperCase()
  if(x == 'JS' || x =='JAVA SCRIPT' || x == 'ЯВА СКРИПТ' || x == 'ДЖАВА СКРИПТ') {
      alert(courses.JavaScript)
  } else if(x == 'PYTHON' || x == 'ПИТОН' || x == 'ПАЙТОН'){
      alert(courses.Python)
  } else if (x == 'LAYOUT' || x == 'ВЕРСТКА' || x == 'ВЁРСТКА' || x == 'HTML CSS' || x == 'ХТМЛ ЦСС') {
    alert(courses.layout)
  } else if (x == '2Design' || x == '2D' || x == '2Д' || x == 'ВЕБ-ДИЗАЙН' || x == 'VEB-DESIGN') {
    alert(courses.twoDesign)
  } else if (x =='3D' || x =='3Д' || x == '3Д МОДЕЛИРОВАНИЕ') {
    alert(courses.threeDesign)
  } else if (x == 'GAME DEVELOPPING' || x == 'РАЗРАБОТКА ИГР' || x == 'ИГРЫ' || x == 'GAMES') {
    alert(courses.Gamedev)
  } else if (x == 'PM') {
    alert(courses.PM)
  } else {
    alert('увы, таких курсов нет!')
}

//5
let count = 10001 
for (let x = 0; x <=count; x++){ 
  for(let a = 1;a < 2**53 -1;a++) {
    for(let i = 2; i<10; i++) {
      if(a%i != 0 && x == 10001) {
        // alert(a)
      }
    }
  }
}






