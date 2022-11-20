let element = document.createElement('div')
let H = document.createElement('H1')
element.setAttribute('class','element')
element.append(H)
console.log(element)

// let input = document.querySelector('input')
// console.log(".input")
76543
// let btn = document.querySelector('.btn')
// let box = document.querySelector('.box')

// btn.addEventListener('click',()=>{
//     box.innerHTML = 'first event'
// })

// let btn = document.querySelector('.btn');
// let box = document.querySelector(".box");


// btn.addEventListener('click',() => {
//     box.style.width = '500px';
//     box.style.height = '500px';
//     box.style.background = 'red';  
// })

// btn.onclick=()=>{
//     box.style.width = '500px';
//     box.style.height = '500px';
//     box.style.background = 'red';  
// }


// z 1
let input = document.querySelector('input')
input.addEventListener('click',()=>{
input.setAttribute('id','You were hacked')
})
console.log(input)

// z 2
let button= document.querySelector('button')
let li3 =  document.querySelector('li3')
let li2= document.querySelector('li2')
let li1 = document.querySelector('li1')

button.addEventListener('click',()=>{
    li2.innerHTML='Заполнено'
    li1.innerHTML='Заполнено'
    li3.innerHTML='Заполнено'
})

//z 3
function ww(){
    let div2 = document.querySelector('div2')
    let div3 = document.createElement('div3')
    let p = document.querySelector('p')
    
    div2.append(div3)
    div3.append(p)
    console.log(div2)
}
ww()

