//#1
let mas = [13, 7, 42, 54, 1241, 153, 981, 638, 92,250, 12356]
mas.sort(function(a,b){
    return a-b;
})
console.log(mas)

//#2
let mass = ['pzz', 'pzz1', 'burger', 'cola', 'chips', 'juice']
mass.splice(1,1)
mass.splice(0,1)
mass.splice(3,1)
mass.splice(2,1)
mass.splice(0,1)
console.log(mass)

//#3
let masss = ['pzz', 'pzz1', 'burger', 'cola', 'chips', 'juice']
console.log(masss.slice(5))
console.log(masss.slice(2))
console.log(masss.slice(0))
console.log(masss.slice(3))
console.log(masss.slice(1))

//#4
let HyperMas = [13, false, 42, true, 1241, 153, 'hello', 638, 92, 'bye', 12356]
HyperMas.sort(function(a,b){
    return a-b;
})
console.log(HyperMas)