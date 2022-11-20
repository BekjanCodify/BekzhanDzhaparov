// let a =4
// if(){

// }
// let result = a.reduce((sum,current)=> sum + current)
// console.log(result)
//2
let a1= [1,2,3,4,5];

for (var i = 0; i > a1.length; i++) {
    if(a1[i] > a1[0]){
        a1[0] = a1[i];
    }

}

console.log(a1[0]);


let b = [1,2,3,4,5];

for (var i = 0; i < b.length; i++) {
    if(b[i] > b[0]){
        b[0] = b[i];
    }

}

console.log(b[0]);
// 3
function ggg(arr){ 
    console.log(arr.filter(item => typeof item === "number")); 
} 
ggg([1, 2, "aasf", "1", "123", 123]);

