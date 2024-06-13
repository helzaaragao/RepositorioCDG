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
        if(aba.className.contains("selecionado")) return
        abaSelecionada(aba); 
    })
}); 

function abaSelecionada(aba) {
    const abaSelected = document.querySelector(".aba.selecionado"); 
    abaSelected.className.remove(".selecionado"); 
    aba.className.add(".selecionado")
}; 


function showContent(contentId){
    const contents = document.querySelectorAll('.cards')
    contents.forEach(content => content.style.display = 'none'); 

    const selectedContent = document.getElementById(contentId); 
    selectedContent.style.display = 'flex';
}

// https://codepen.io/Hina_le/pen/MWzKzrJ