// let arr =[1,2,3]

// let num = arr.map((el,idx,arr)=>{
//     return idx
// })
// console.log(num)

// let obj = {
//     name:'LOshara',
//     age:11,
//     country:'Tadzhukiston',
//     arr:[11,22,33]
// }
// console.log(obj)


// let objNum = {
//     seven:7,
//     five:5,
//     six:6,
//     eight:8
// }

// for(let key in objNum){
//     console.log(objNum[key])
// }



// zadanie 1
let a={
    name:"Ivan",
    age:35
}

for(let key in a){
    console.log(a[key])
}

// zadanie 2 
let b=[{id: 1},{id: 2},{id: 3},{id: 4}]
let key=b.map((el,idx,arr)=>{
    return el.id
})
console.log(key)

let c=[{id:true}]
let key2=c.map((el,idx,arr)=>{
    return el.id
})
console.log(key2)

// zadanie 3

let d=[10,40,30,20,50]
let result= d.filter((item,index,arr)=>{
    return  item > 30 && item < 50
})
console.log(result)

let d2=[25, 143, 89, 13, 105]
let result2= d2.filter((item,index,arr)=>{
    return  item > 100 && item < 140
})
console.log(result2)