//dz 1
let button = document.querySelector('button')
let form = document.getElementsByClassName('form')
[0]
button.addEventListener('click', ()=>{
  let input = document.createElement('input')
  input.type = 'text'
  form.append(input, button)
});


// dz 2 
let a=document.getElementById('a')
let b=document.getElementById('b')

let button1=document.querySelector('button1')
function cc() {
    sum = parseInt(a.value) + parseInt(b.value)
    document.getElementById('c').value=sum
}
cc()

let obj={
 a: 1, b: 2 
}
let result = Object.entries(obj)
console.log(result)

let obj1={
  shrimp: 15, tots: 12 
}
let result1 = Object.entries(obj1)
console.log(result1)

let obj2={
   
}
let result2 = Object.entries(obj2)
console.log(result2)




function qq() {
  let arr = []
  arr.push(1,2,3,4)
  console.log(arr.slice(-1))
}
qq()

function ww() {
  let arr = []
  arr.push(1,2,3,4,4,6)
  console.log(arr.slice(-1))
}
ww()

function ss() {
  let arr = []
  arr.push(1,2,3,4,10,24)
  console.log(arr.slice(-1))
}
ss()


