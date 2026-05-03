// const searchBarInput = document.getElementById("searchBarInput")

// searchBarInput.addEventListener("focus",function (){

// })

const topicsParent = document.getElementById("topicsParent")
const rightBtn = document.getElementById("rightTopicButton")
const leftBtn = document.getElementById("leftTopicButton")


const amountOfScroll = 800

rightBtn.addEventListener('click', function () {
    topicsParent.scrollBy({left:amountOfScroll,behavior:"smooth"})
});

leftBtn.addEventListener('click', function () {
    console.log("not working");
    topicsParent.scrollBy({ left: -amountOfScroll, behavior: "smooth" });
});

function updateScrollButtonsDisplay () {
    if (topicsParent.scrollLeft <= 0) {
        leftBtn.style.display = "none"
    }

    else {
        leftBtn.style.display = "flex"
    }

    const maxScroll = topicsParent.scrollWidth - topicsParent.clientWidth;
    if (topicsParent.scrollLeft >= maxScroll) {
        rightBtn.style.display = "none"
    }

    else {
        rightBtn.style.display = "flex"
    }
}


topicsParent.addEventListener('scroll',updateScrollButtonsDisplay )

updateScrollButtonsDisplay()