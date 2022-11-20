// Функции

//Expression
// function firstFunc(a,d){
//     console.log(a + d)
// }
// firstFunc(10,33)
//Declaration
// let SecondFunc = function(b,c){
//     console.log(b*c)
// }
// SecondFunc(33,78)
//Стрелочные
// let StrFunc = () =>{
//     console.log('Hello world');
// }
// StrFunc()



//Методы перебора массивов

//push
// let arLast=[1,2,3,4];
// console.log(arLast.push(5));
// console.log(arLast)

//shift
// let arLast=[1,2,3,4]
// console.log(arLast.shift());
// console.log(arLast)

//pop
// let arLast=[1,2,3,4]
// console.log(arLast.pop());
// console.log(arLast)

//unshift
// let arLast=[2,3,4]
// console.log(arLast.unshift(1));
// console.log(arLast)

//map
// let arLast=[2,3,4]
// arLast.map(function(el,idx,arr){
// console.log(arr);
// })

//forEach
// let arLast=[2,3,4]
// arLast.forEach(function(el,idx,arr){
// console.log(el);
//})

//reverse
// let arLast=[2,3,4]
// console.log(arLast.reverse())

//sort
// let arLast=[6,5,7]
// console.log(arLast.sort())

//includes
// let ar =[1,"grgkng",2,"two"]
// console.log(ar.includes(1))


// zadanie 1
function firstFunc(){
    let a=[1,-2,3,-10,20,13,-6]
for(let num = 0;num<a.length;num++){
    if((a[num]<0)){
        console.log(a[num]=0)
    }
}
console.log(a)
}
firstFunc()

// zadanie 2
function newarr(){
    let arr = [1,2,3]
    for(let i = 0;i < arr.length;i++){
        console.log(arr[i]*2)
    }
}
newarr()

//zadanie 3
// function twoarr(){
//     let c =[4,6,'Ivan',5,'Denis']
//     for(let b= 0;b<c.length;b++){
//         if(c[b]=='Ivan'||c[b]=='Denis'){
//             console.log(c[b]=null)
//         }
//     }
//     console.log(c)
// }
// twoarr()
let c =[4,6,'Ivan',5,'Denis']
for(let i =0; i<c.length;i++){
    if(typeof c[i]==="string"){
        c[i]=null
    }
}
console.log(c)