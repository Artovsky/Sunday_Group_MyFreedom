/* Task 1

function randomInteger(max) {
    let rand = 1 + Math.random() * max;
    return Math.floor(rand);
}
let masive = []
for (let length = 0; length < randomInteger(100); length++) {
    masive.push(randomInteger(100))
}
masive.sort(function(a, b) {
    return a - b;
  })
console.log(masive) */




//Task 2

/* let massive = ['red', 'blue', 'green', 'yellow', 'white', 'black']
massive.splice(3,2)//удаляет два элемента после индекса 3
console.log(massive)
massive.splice(1,0, 'pink', 'pirple')//вставляет после индекса 1 'pink' и 'pirple'
console.log(massive)
massive.splice(4)//удаляет все после индекса 4
console.log(massive)
massive.splice(2,3, 'orange')//после индекса 2 удаляет три элемента и вставляет 'orange'
console.log(massive)
massive.splice(0,1, 'brown')//заменяет элемент под индексом 0 на 'brown' 
console.log(massive) */



/* Task 3

let massive = ['red', 'blue', 'green', 'yellow', 'white', 'black']
massive.splice(3,2)//удаляет два элемента после индекса 3
console.log(massive.sort())
massive.splice(1,0, 'pink', 'pirple')//вставляет после индекса 1 'pink' и 'pirple'
console.log(massive.sort())
massive.splice(4)//удаляет все после индекса 4
console.log(massive.sort())
massive.splice(2,3, 'orange')//после индекса 2 удаляет три элемента и вставляет 'orange'
console.log(massive.sort())
massive.splice(0,1, 'brown')//заменяет элемент под индексом 0 на 'brown' 
console.log(massive.sort())
 */




/* Task 4

function randomInteger(max) {
    let rand = Math.random() * (max + 1);
    return Math.floor(rand);
}
function randomBoolean(max) {
    let rand = Math.random() * (max + 1);
    return Boolean(Math.floor(rand));
}
function randomString(max) {
    let rand = Math.random() * (max + 1);
    return String(Math.floor(rand));
}
let masive = []
for (let length = 0; length < randomInteger(100); length++) {
    let current = randomInteger(3)
    if (current == 1) {
        masive.push(randomInteger(100))
    } else if(current == 2) {
        masive.push(randomBoolean(2))
    } else {
        masive.push(randomString(10000000000))
    }
}
masive.sort(function(a, b) {
    return a - b;
  })
console.log(masive) */



/* Task 5

let masive = [2, 3]
let numb = 5;
while (masive.length < 10001) {
    let remember = true
    for (let aliquot = 3; aliquot <= Math.sqrt(numb); aliquot++) {
        if (numb % aliquot == 0) {
            remember = false
            break
        }
    }
    if (remember == true) {
        masive.push(numb)
    }
    numb += 2;
}
let x = masive[10000]
console.log(x) */



/* Task 6


let number = `73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450`
let temp = 0
 for (let startNumber = 0; startNumber <= number.length - 13; startNumber++) {
    let digits = number.slice(startNumber,startNumber + 13)
    let product = 1
    for(let i = 0; i < digits.length; i++) {
        product *= digits[i];
        
    }
    if (temp < product){
        temp = product
    }
    
} 


console.log(temp) */
