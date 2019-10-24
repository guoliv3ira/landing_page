//identificar o clique do menu





const menuItems = document.querySelectorAll('.navbar a.nav-link[href^="#"]')
menuItems.forEach(item => {
    item.addEventListener('click', scrollToId)
});

function scrollToId(event){
    event.preventDefault()
    const element = (event.target)
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    
    window.scroll({
        top: to -55,
        behavior: "smooth"
    })
}