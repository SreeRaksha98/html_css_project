// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});


// Function to handle the scroll event --- Header 
function handleScroll() {
  const navbar = document.getElementById('header');
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
// Attach the event listener for the scroll event
window.addEventListener('scroll', handleScroll);

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//function for slider
let i = 0
let arrayOfImages = ['home_1.jpg', 'home_4.jpg', 'home_5.jpg', 'home_6.jpg']
let slideImage = document.querySelector("#hero")

let homeSlider = () => {
  setTimeout(() => {
    if (i < arrayOfImages.length) {
      slideImage.style.backgroundImage =  'url("/smart/images/home/'+arrayOfImages[i]+'")'
      i++
    }
    else{
      i = 0
    }
    homeSlider();
    console.log('loaded', i)
  }, 3000)
}

window.addEventListener('load', ()=>{
  console.log('entered event')
  homeSlider()
}) 

