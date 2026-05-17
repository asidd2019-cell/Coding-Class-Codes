let counter = 0

function increase(){
    counter=counter+1
    const inp=document.getElementById('count')
    inp.value = counter
}

function decrease(){
    counter=counter-1
    const inp=document.getElementById('count')
    inp.value = counter
    console.log('gsefqud')
}

function reset(){
    counter=0
    const inp=document.getElementById('count')
    inp.value = counter
}

const decBtn=document.getElementById('decreaseButton')
decBtn.addEventListener('click',decrease)

const resetBtn=document.getElementById('resetButton')
resetBtn.addEventListener('click',reset)