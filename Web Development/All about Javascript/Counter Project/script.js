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
}

function reset(){
    counter=0
    const inp=document.getElementById('count')
    inp.value = counter
}