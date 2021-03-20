document.body.className += "js-loading";

showpage = () =>{
    document.body.className = document.body.className.replace("js-loading","")
}

window.onload = () =>{
    showpage()
    let navbar = document.getElementById("fixedNav")
    let toggler = document.querySelector(".navbar-toggler")
    let brand = document.querySelector('.brand-img')
    let scroll = document.querySelector(".scroll-up-btn")

    let sections = document.querySelectorAll("section")
    let navlists = document.querySelectorAll(".nav-link")

    window.onscroll = () =>{
        if(window.pageYOffset > 0) {
            navbar.classList.add("sticky")
            scroll.classList.add("show")
            brand.src = '../Assets/msp-cusit-white.svg'
        }else{
            navbar.classList.remove("sticky")
            scroll.classList.remove("show")
            brand.src = '../Assets/msp-cusit.svg'
        }

        let current = ''
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            if(pageYOffset >= (sectionTop-700/3)) current = section.getAttribute("id")
        })

        navlists.forEach(li => {
            li.classList.remove("active")
            if(li.classList.contains(current)){
                li.classList.add("active")
            }
        })
    }

    toggler.addEventListener('click', () => toggler.classList.toggle('toggle'))
}