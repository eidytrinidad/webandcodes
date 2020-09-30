const btnBurguer = document.querySelector(".btnBurger")
const icon = document.querySelector(".btnBurger i")
const menuBurger = document.querySelector(".menuBurger")

let value= false
btnBurguer.addEventListener('click',()=>{
    if (value==false) {
        icon.classList.add('fa-times')
        menuBurger.style.display='flex'
        value=true
    } else {
        icon.classList.remove('fa-times')
        menuBurger.style.display='none'
        value=false
    }
})