const slider = document.getElementById('slider')
const slides = document.getElementById('slides')
const allSlides = document.querySelectorAll('.slide')
const dots = document.getElementById('dots')
const prevBtn = document.getElementById('prev_btn')
const nextBtn = document.getElementById('next_btn')

let currentIdx = 0

let autoTimer

allSlides.forEach((slides,i)=>{
    const dot = document.createElement('button')
    dot.className = 'dot'
    dot.addEventListener('click',function() { gotoSlide(i)})
    dots.appendChild(dot)
})

function gotoSlide(slideIdx){
    if (slideIdx < 0 ) {
        slideIdx = 2
    }

    if (slideIdx > 2) {
        slideIdx = 0
    }
    currentIdx = slideIdx
    slides.style.transform = `translateX(-${currentIdx * 100}%)`
}

prevBtn.addEventListener('click', function() { gotoSlide(currentIdx-1)})
nextBtn.addEventListener('click', function() { gotoSlide(currentIdx+1)})
