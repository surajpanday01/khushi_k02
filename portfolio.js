//Nav links----------------------

let nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('nav-scroll',window.scrollY > 0);
})

//--------------active toggle-----------------

let AllNavLinkA = document.querySelectorAll('.nav-links li a');

//-------------------------Active Add--------------------


AllNavLinkA.forEach(item=>{
      item.addEventListener('click',()=>{
        item.classList.add('acitive');
      })
});
//------------------Active Remove----------------

const removeActive =()=> AllNavLinkA.forEach(itme=>{
    item.classList.remove('acitive')
});

//-----------Nav-links Toggler-------------
let menuBars = document.querySelector('nav button');
let navlinks = document.querySelector('.nav-links');
menuBars.addEventListener('click',()=>{
     navlinks.classList.toggle('nav-link-block');
});
      


