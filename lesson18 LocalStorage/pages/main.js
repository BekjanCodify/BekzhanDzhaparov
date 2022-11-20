let input = document.querySelector('.input')
let btn = document.querySelector('.btn')

let obj = {
    name:'codify',
    address:'Bishkek',
    street:'Isanov'
}

btn.addEventListener('click',()=>{
    let text = {
        words:input.value
    }
    console.log(text)

    localStorage
})

//setItem
// let obj = {
//     name:'codify',
//     address:'Bishkek',
//     street:'Isanov'
// }
// localStorage.setItem('first',JSON.stringify(obj))

//getItem
// let getobj =JSON.parse(localStorage.getItem('first'))
// getobj.name = 'codifyteens'
// console.log(getobj)


// let getobj = localStorage.length
// console.log(getobj)
//
