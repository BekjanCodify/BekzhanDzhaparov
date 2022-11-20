// // Reduce
// let a = [1,2,3,4,5]
// let result = a.reduce((sum,current)=> sum + current)
// console.log(result)

// // filter
// let str=['Google','Yandex','Apple','Minrgjgbbg']
// let resultArr = str.filter((item,index,arr)=>{
//     return  index < 3 
// })
// console.log(resultArr)

// //concat()
// let arr = [1,2,3]
// let arr2= arr.concat([4,5])
// console.log(arr2)

// //split
// let str2 ='Hello world'
// let str2Arr=str2.split('')
// console.log(str2Arr)



// zadanie 1 
// let a=[true,false,true,true]
// a.splice(1,1)
// console.log(a)

// let a2=[true,false]
// a2.splice(1,1)
// console.log(a2)

// // zadanie 2
// let s= "urod ishaks"
// let results=s.split(' ')
// console.log(results[1].length)

// //zadanie 3
// let b = [1,2,3,4,5]
// let result = b.reduce((sum,current)=> sum + current)
// console.log(result)

// let b2 = [2,11,5]
// let result2 = b2.reduce((sum,current)=> sum + current)
// console.log(result2)

// //zadanie 4
// let str=[1,2,5,7,9,10,15,19]
// let resultArr = str.filter((item,index,arr)=>{
//     return  item < 10
// })
// console.log(resultArr)

// let str2=[2,11,5]
// let resultArr2 = str2.filter((item,index,arr)=>{
//     return  item < 10
// })
// console.log(resultArr2)



// dz 1
let a = [1, 2, 3, 4, 5];
let b = [1, 12, 3, 8, 5];
const w = a.filter(item => b.includes(item));
console.log(w);
// dz 2
let c = [true, false, false, true,false]
c.splice(1,2)
c.splice(2,1)
let result = c.reduce((sum,current)=> sum + current)
console.log(result)

let c2=[false, false, false, false]
let result2= c2.reduce((sum,current)=> sum + current)
console.log(result2)
// dz 3

let d =['ab']
let d2=d.concat(['abc'])
let d3=d2.concat(['abcd'])
console.log(d3)

let e=[1,2,3]
let e2=e.concat([4,5])
let e3=e2.concat([6])
let e4=e3.concat([7,8,9])
console.log(e4)