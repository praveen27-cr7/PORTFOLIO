//show menu
const showMenu = (toggleId , navId) => {
    const toggle =document.getElementById(toggleId);
    const  nav = document.getElementById(navId)

    if(toggle || nav){
        toggle.addEventListener('click' ,() =>{
            nav.classList.toggle('show')
        }) ;

    }
}

showMenu('togglemenu','nav_menu')
// ACTIVE AND REMOVE ACTIVE
const navLink = document.querySelectorAll('.link')
/* navLink.forEach(n => n.classList.remove('act')) */
function linkAction(){
    
    
   
    

    const navMenu =document.getElementById('nav_menu')
    navMenu.classList.remove('show')
    navMenu.style.transition='1.5s'




}

navLink.forEach(n => n.addEventListener('click' , linkAction))