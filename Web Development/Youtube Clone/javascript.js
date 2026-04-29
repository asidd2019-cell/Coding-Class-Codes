// const searchBarInput = document.getElementById("searchBarInput")

// searchBarInput.addEventListener("focus",function (){

// })

const topicsParent = document.getElementById("topicsParent")
const rightBtn = document.getElementById("rightTopicButton")

const amountOfScroll = 800

rightBtn.addEventListener('click', function () {
    topicsParent.scrollBy({left:amountOfScroll,behavior:"smooth"})
});