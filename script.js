class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
           link.style.animation
           ? (link.style.animation = "")
           : (link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`) 
        })
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass)
        this.animateLinks()
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)

mobileNavbar.init();

const abas = document.querySelectorAll(".abas");
// document.query mais detalhados para as aba

abas.forEach(aba => {
    aba.addEventListener("click", function(){ 
        if(aba.classList.contains("selecionado")) return
        abaSelecionada(aba); 
        mostrarInfosAba(aba);
    })
}); 

function abaSelecionada(aba) {
    const abaSelected = document.querySelector(".aba.selecionado"); 
    abaSelected.classList.remove("selecionado"); 
    aba.classList.add("selecionado")
}; 

function mostrarInfosAba(aba) { 
    const infoSelected = document.querySelector("cards.selecionado"); 
    infoSelected.classList.remove("selecionado")

    const idElementInfoAba = `info-${aba.id}` 

    const infoMostrar = document.getElementById(idElementInfoAba)
    infoMostrar.classList.add("selecionado")
}

// https://codepen.io/Hina_le/pen/MWzKzrJ