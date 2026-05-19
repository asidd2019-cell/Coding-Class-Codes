function RandomHexValueGenerator(){
    let randHex = '#' + Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6,0)
    return randHex
}

function OnColorChange(){
    let body = document.getElementById('body')
    let CustomColor = RandomHexValueGenerator()
    body.style.backgroundColor = CustomColor
}