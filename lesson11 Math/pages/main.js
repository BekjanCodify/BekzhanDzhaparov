// function palin(num){
//     let numStr = num.split('').reverse().join('')
//     if(num === numStr){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(palin('121'))

// z 2

// z 3
// function qq(rev){
// let revStr = String(rev).split('').reverse().join('')
// return revStr
// }
// console.log(qq(5121))

// Math
// console.log(Math.abs(-120)) //возвращеает абсолютное число

// console.log(Math.max(112,20))//

// let arr = [1,2,3,4,5]
// console.log(Math.max(...arr))

// console.log(Math.min(22,11))//

// console.log(Math.ceil(25.3))//

// console.log(Math.floor(25.99))//

// console.log(Math.round(25.5))//возвращает наименьшее число если меньше 0.5 если больше 0.5 то округляет до наибольшего числа

// console.log(Math.random())





// dz 1
function num(a,b){
    if (a%b == 0) {
        console.log('без остатка:'+ a/b)
        } else {
        console.log ("Делится с остатком :" + a/b)
}
}
console.log(num(15,3))

// dz 2
function st(x){
    console.log(Math.pow(x,10))
}
console.log(st(2))

// dz 3
function ds(){
    let s = []
    for(i = 0;i< 10;i++){
        s[i]=Math.round(Math.random()*100)
    }
    console.log(s)
}
ds()