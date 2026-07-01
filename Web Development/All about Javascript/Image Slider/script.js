const slider = document.getElementById('slider')
const slides = document.getElementById('slides')
const allSlides = document.querySelectorAll('.slide')
const dots = document.getElementById('dots')

let currentIdx = 0

let autoTimer

allSlides.forEach((slides,i)=>{
    const dot = document.createElement('button')
    dot.className = 'dot'
    dot.addEventListener('click',function() { gotoSlide(i)})
    dots.appendChild(dot)
})

function gotoSlide(slideIdx){
    currentIdx = slideIdx
    slides.style.transform = `translateX(-${currentIdx * 100}%)`
}