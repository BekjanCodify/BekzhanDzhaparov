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



//z 1 
// function plus(nums){
// let last = nums.pop() + 1
// let push = nums.push(last)
// console.log(nums)
// }
// console.log(plus([4,3,2,1]))

// //z 2
// let c = [true, false, false, true,false]
// c.splice(1,2)
// c.splice(2,1)
// let result = c.reduce((sum,current)=> sum + current)
// console.log(result) 

//z 3
// function dup(nums2){
//     for(let i=1,g=1;nums2.length;i++){
//         if(nums2[i] !== nums2[n - 1]){
//             nums2[n++] == nums2[1]
//         }
//     }
//     nums2.length = g
//     return nums2
// }
// console.log(dup([1,1,2]))


// dz 1
let button = document.createElement('button')
console.log(button.innerHTML)







