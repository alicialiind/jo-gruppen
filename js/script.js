const hamburger = document.getElementById('hamburger-lines')
const navBar = document.getElementById('nav-bar')

function navClick() {
    hamburger.classList.toggle('clicked')
    navBar.classList.toggle('nav-visible')
    console.log('hi')
}

hamburger.addEventListener('click', navClick)
