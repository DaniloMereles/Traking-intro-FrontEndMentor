function NavActive(){
    const nav = document.getElementById('navLinks')
    const hamburger = document.getElementById('hamburger')

    hamburger.addEventListener('click', ()=>{
        nav.classList.toggle('active')

        if(nav.className == 'navbar__links active'){
            hamburger.innerHTML = ` 
            <img src="./app/public/img/icon-close.svg" alt="hamburger">
            `
        }else{
            hamburger.innerHTML = `
                <img src="./app/public/img/icon-hamburger.svg" alt="hamburger">
            `
        }
    })

}

NavActive()