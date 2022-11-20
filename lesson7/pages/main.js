// let obj = new Date();
// console.log(obj);

//СОЗДАТЬ
// let obj=new Date('2021 09 23')
// console.log(obj)

//zadanie 1
// function keys(obj){
//     const arrs =[Object.keys(obj),Object.values(obj)]
//     return arrs
// }
// console.log(keys({ a: 1, b: 2, c: 3 }))

// //zadanie 2 
// let obj={
//   D: 1,
//   B: 2,
//   C: 3
// }
// let result = Object.entries(obj)
// console.log(result)

// //Методы строк
// //string
// let str ='string';
// console.log(str.substring(0,3))

//Методы чисел
// Number()
// parseInt()
// parseFloat()


// dz 1
let m = prompt('минуты');
function seconds () {
return m * 60
}
alert(seconds())

// dz 2
let arrayOfMultiples =(a , b) =>{
let c = 1
let arr =[]
for (let y= 1; y <= b; y++) {
  arr.push(a*c)
 c++
}
 return arr
}
console.log(arrayOfMultiples(7, 5))
console.log(arrayOfMultiples(12,10))
console.log(arrayOfMultiples(17,6))

// dz 3
const get = (numbers) => { 
  const s = numbers.reduce((acc, number) => acc + number, 0) 
  const length = numbers.length 
  return s / length 
}; 
 
numbers = [2,4,6]
console.log(get(numbers))


const get2 = (numbers2) => { 
  const s = numbers2.reduce((acc, number) => acc + number, 0) 
  const length = numbers2.length 
  return s / length 
}
 
numbers2=[1,3,5]
console.log(get(numbers2))
  
    
    