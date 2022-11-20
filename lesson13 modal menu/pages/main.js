let a = [0,0,1,3,12]
a.push(0,0)

let b = a.slice(2)
console.log(b)

//z2
let button = document.querySelector('button')

button.addEventListener('click',()=>{
    let box = document.querySelector(".box")
    box.style.width = '200px';
    box.style.height = '100px';
    box.style.background = 'grey';
    box.textContent='Что бы офрмить подписку перейдите на сайт ......'

    let cancel = document.querySelector(".cancel")
    cancel.style.width = '18px'
    cancel.style.height = '18px'
    cancel.textContent='x'
    cancel.style.family='sans-serif'
    cancel.style.background='red'
    cancel.style.size ='40px'
    // font-family: sans-serif;
    // width: 16px;
    // height: 16px;
    // color: aliceblue;
    // background-color: red;

    cancel.addEventListener('click',()=>{
        box.style.width='0'
        box.style.height='0'
        box.textContent=''
        box.background=''

        cancel.style.width='0'
        cancel.style.height='0'
        cancel.textContent=''
        cancel.background=''
    })
})