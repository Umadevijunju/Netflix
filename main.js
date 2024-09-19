const nav = document.getElementById('nav');

window.addEventListener('scroll',()=>{
if(window.scrollY >=100) {
    nav.classList.add('nav_block');
}else{
nav.classList.remove('nav_black');
}
})
