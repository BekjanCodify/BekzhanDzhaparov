let  button = document.querySelector('button')
let a = document.querySelectorAll('counter_like')

button.addEventListener('click',()=>{
    let input = document.querySelector('input')
    let currentValue = +input.value

    let newValue=currentValue + 1

    input.value=newValue
})