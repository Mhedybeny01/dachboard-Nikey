const storeLinks = [
  { element: document.querySelector('.store'), instoreClass: 'instore' },
  { element: document.querySelector('.mac'), instoreClass: 'instore2' },
  { element: document.querySelector('.ipad'), instoreClass: 'instore3' },
  { element: document.querySelector('.iphone'), instoreClass: 'instore4' },
  { element: document.querySelector('.watch'), instoreClass: 'instore5' },
  { element: document.querySelector('.vision'), instoreClass: 'instore6' },
  { element: document.querySelector('.tv'), instoreClass: 'instore7' },
  { element: document.querySelector('.entertainment'), instoreClass: 'instore8' },
  { element: document.querySelector('.accessories'), instoreClass: 'instore9' },
  { element: document.querySelector('.support'), instoreClass: 'instore10' },
  { element: document.querySelector('.airPods'), instoreClass: 'instore11' },
  { element: document.querySelector('.sch'), instoreClass: 'instore12' },
  { element: document.querySelector('.bag'), instoreClass: 'instore13' },
];
document.querySelector('.search').addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click on search from bubbling up
});
function closeAll(exceptElement) {
  storeLinks.forEach(({ instoreClass }) => {
    if (exceptElement && document.querySelector(`.${instoreClass}`) === exceptElement) return;
    document.querySelector(`.${instoreClass}`).classList.remove('active');
  });
}

// Add event listener to each element
storeLinks.forEach(({ element, instoreClass }) => {
  element.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    const targetElement = document.querySelector(`.${instoreClass}`);

    // Toggle the active class for the clicked element
    if (targetElement.classList.contains('active')) {
      // If it's already active, close it
      targetElement.classList.remove('active');
    } else {
      // Close all other lists
      closeAll(targetElement);
      // Ensure the clicked one is active
      targetElement.classList.add('active');
    }
  });
});

// Close all lists when clicking outside
document.addEventListener('click', () => closeAll(null));












var swiper = new Swiper('.swiper', {
  slidesPerView: 8,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() { 
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}



const navbar = document.querySelector('.navbar');
const mood = document.querySelector('.mood');


mood.addEventListener('click',()=>{
  document.body.classList.toggle('show');
 
})


const items = document.querySelectorAll(".promo-item");
const main = document.querySelectorAll(".main-promo");


main.forEach((main) => {
  const buy = main.querySelector(".buy");

  main.addEventListener('mouseenter', () => {
    buy.classList.add('acct');

  });

  main.addEventListener('mouseleave', () => {
    buy.classList.remove('acct');
   
  });
});
 

items.forEach((item) => {
  const btn = item.querySelector(".btnb");
  const par = item.querySelector('p');
  item.addEventListener('mouseenter', () => {
    btn.classList.add('acct');
   
  });

  item.addEventListener('mouseleave', () => {
    btn.classList.remove('acct');
   
  });
});




const scrollup = document.querySelector(".scrollup");
window.addEventListener('scroll',()=>{
        if(scrollY > 800){
          scrollup.style.display = 'block';
        }else{
          scrollup.style.display = 'none';
        }
})




scrollup.addEventListener('click',()=>{
  window.scrollTo({
    top : 0,
    behavior:'smooth'
  });
});
 
 
const section6 = document.querySelector(".section6");

window.addEventListener('scroll', () => {
    if (scrollY > 4130) {
        section6.style.transform = 'translateX(0)';
        section6.style.opacity = '1';
    } else {
        section6.style.transform = 'translateX(-100%)';
        section6.style.opacity = '0';
    }
});

// Ensure the correct elements are selected
const cardcredit = document.querySelector(".cardshoppay");
const buyButtons = document.querySelectorAll(".grid-container .buy button, .grid-container .btnb button");
const cls = document.querySelector('.close');

buyButtons.addEventListener('click',()=>{
  cardcredit.classList.add('active');
})








const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click',()=>{
  menu.classList.toggle('active');
})




const quntity = document.querySelector('.quntity'),
plus = document.querySelector('.plus'),
cont = document.querySelector('.cont'),
moin = document.querySelector('.moin');
let contour = 0;

plus.addEventListener('click',()=>{
  contour++;
  cont.textContent = contour;
})

moin.addEventListener('click',()=>{
    if(contour <= 0){
      contour = 1;
    };
  contour--;
  cont.textContent = contour;
 
})