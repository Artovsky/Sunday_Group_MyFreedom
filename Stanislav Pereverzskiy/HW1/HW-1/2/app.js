let name=prompt("Введите имя")
let num = ["привет","мир"]
console.log(num)
num.splice(1,1)//удаление элемента
console.log(num)
num.splice(1,0,name)//добавление элемента
console.log(num)
num.splice(1,1,"мир")//замна элемента
console.log(num)
let delnum = num.splice(1,1)
console.log(delnum)//возвращение массива из удаленных элементов
num.splice(0)
console.log(num)//удалене всех элементов после выбранного

