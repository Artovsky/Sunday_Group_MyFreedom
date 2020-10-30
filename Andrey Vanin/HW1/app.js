
// Z1


let m = [7, 2, 10, 5, 3, 6, 4];

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

m.sort(compareNumeric);

console.log(m);





//Z2


// Заказчик заказал полный набор зимней одежды

let clouthes = ["Куртка ", "Шапка ", "Утеплённые штаны ", "Щарф ", "Сапоги "];

// Заказчику больше не нужны утеплённые штаны, зима будет тёплой

clouthes.splice(1, 1);

console.log(clouthes);

// Заказчик решил, что вместо обычной шапки возьмёт кепку

clouthes.splice(2, 1, "Кепка ");

console.log(clouthes);

// Заказчик хочет себе ещё и шубу, и так, чтобы она была ПЕРВОЙ в очереди

clouthes.splice(0, 0, "Шуба ");

console.log(clouthes);

// Заказчик посчитал, что ему выгоднее заказать полный набор летней одежды

clouthes.splice(0, clouthes.length, "Шорты ", "Кросовки ", "Майка ", "Солнечные очки ", "Носки ");

console.log(clouthes);

// У заказчика оказывается нет денег и ему нечего не нужно

clouthes.splice(0, 5, "Эта корзина пустая");

console.log(clouthes);






//Z3



function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr1 = [7, 2, 10, 5];

arr1.sort(compareNumeric);
console.log(arr1);

arr1.splice(1, 1);

arr1.sort(compareNumeric);
console.log(arr1);


arr1.splice(0, 2, 4, 5, 6);

arr1.sort(compareNumeric);
console.log(arr1);


arr1.splice(0, 0, 100);

arr1.sort(compareNumeric);
console.log(arr1);


arr1.splice(0, arr1.length, 9, 2, 11);

arr1.sort(compareNumeric);
console.log(arr1);


arr1.splice(0, arr1.length, 0);

arr1.sort(compareNumeric);
console.log(arr1);





//Z4



let arr = [4, 34, "8", false, 12, "5", 45, "3"];

function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

arr.sort(compareNumeric);
console.log(arr);
