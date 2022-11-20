let year = document.querySelector('#year')
let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let countdown = document.querySelector('#countdown')
let preloader = document.querySelector('#preloader')

// РАСЧЕТ
let currentYear = new Date().getFullYear()
let nextYear = new Date(`01,01 ${currentYear + 1} 00:00:00`)
console.log(nextYear)

year.innerHTML = currentYear + 1

function UpdateCounter(){
    let currentTime = new Date()
    let diff = nextYear - currentTime
    
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerHTML = daysLeft < 10 ? '0' + daysLeft:daysLeft
    hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft:hoursLeft
    minutes.innerHTML = minutesLeft < 10 ?'0' + minutesLeft:minutesLeft
    seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft:secondsLeft
}
setInterval(UpdateCounter,1000)

setTimeout(function(){
    preloader.remove()
    countdown.style.display='flex'
},1000)