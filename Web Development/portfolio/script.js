const skillsMain = document.querySelector(".skills-main")
const skillsSection =  document.querySelector(".skills-section")

skillsMain.addEventListener('mouseenter',()=>{
    skillsSection.style.display = 'flex'
    skillsSection.style.flexDirection = 'column'
})

skillsMain.addEventListener('mouseleave',()=>{
    skillsSection.style.display = 'none'
})