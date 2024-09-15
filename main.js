const tabs = document.querySelectorAll('[data-target]')
const tabcontents = document.querySelectorAll('[data-content]')

const projectBtn = document.getElementById("project-btn")
const skillBtn = document.getElementById("skill-btn")

const skillsSection = document.getElementById("Skills")
const projectSection = document.getElementById("projects")

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.target)

//         tabcontents.forEach(tc => {
//             tc.classList.remove('filters_active')
//         })

//         target.classList.add('filters_active')

//         tabs.forEach(t => {
//             t.classList.remove('filer-tab-active')
//         })
        
//         tab.classList.add('filer-tab-active')
//     })
// })

skillBtn.addEventListener('click', () => {
    skillsSection.style.display = "block";
    projectSection.style.display = "none";
    projectBtn.classList.remove("filer-tab-active");
    skillBtn.classList.add("filer-tab-active");
})

projectBtn.addEventListener('click', () => {
    skillsSection.style.display = "none";
    projectSection.style.display = "block";
    skillBtn.classList.remove("filer-tab-active");
    projectBtn.classList.add("filer-tab-active");
})

/*- light-*/
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='fa-moon'

/*-user selected-*/
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

/*=-drock or light logic--*/
const getCurrentTheme=()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'
 /* user chose topic */
 if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add':'remove'](darkTheme)
    themeButton.classList [selectedIcon==='fa-moon' ? 'add':'remove'](iconTheme)
 }

 themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
 })
`   `