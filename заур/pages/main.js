let slides = document.getElementsByClassName('slider__slide')
let navlink = document.getElementsByClassName('slider__navlink')

let currentSlide = 0

document.getElementById('nav-button--next').addEventListener('click',() => {
    changeSlide(currentSlide + 1)
    
})

document.getElementById('nav-button--prev').addEventListener('click',() => {
    changeSlide(currentSlide - 1)
    
})

function changeSlide(MoveTo){
    if(MoveTo>= slides.length){
        MoveTo = 0
    }

    if(MoveTo < 0){
       MoveTo = slides.length - 1;

    }

    slides[currentSlide].classList.toggle('active')
    navlink[currentSlide].classList.toggle('active')
    slides[MoveTo].classList.toggle('active')
    navlink[MoveTo].classList.toggle('active')

    currentSlide = MoveTo
}
