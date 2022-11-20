// let user = '{"name":"John","age":35}'
// console.log(JSON.parse(user))

// JSON.stringify - превращает обьект в JSON
// JSON.parse-превращает JSON в обьект

//fetch




let inputCity = document.querySelector('#cityinput');
let btn = document.querySelector('#add');
let  city = document.querySelector('#cityoutput');
let desc = document.querySelector('#description');
let  temp = document.querySelector('#temp');
let  wind = document.querySelector('#wind');
// let error = document.querySelector('#error')

let KEY = '6a13a3e0da5951e0d49805e3e4abbf52'

function Convert(value){
    return (value - 273).toFixed()
}

btn.addEventListener('click',function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${KEY}`)
    .then(res => res.json())
    .then(data =>{
        
        let cityName = data['name']
        let Desc = data['weather']['0']['description']
        let Temp = data ['main']['temp']
        let Speed = data['wind']['speed']
        
        city.innerHTML = `Weather of <span>${cityName}</span>`
        temp.innerHTML = `Temperature:<span>${Convert(Temp)}°C</span>`
        desc.innerHTML = `Sky <span>${Desc}</span>`
        wind.innerHTML = `Wind speed <span>${Speed}</span>`
    })
    
})

// function drinks(){
//     let a = [
//         {name: "lemonade", price: 50},
//         {name: "lime", price: 10}
// ]
// }

let drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]
const d = drinks.sort((a,b)=>(a.price-b.price))
console.log(d)



function tuckIn(arr1,arr2){
    arr1.push(arr2)
    const v = arr1.flat().sort((a,b)=> a-b)
    console.log(v)
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))


