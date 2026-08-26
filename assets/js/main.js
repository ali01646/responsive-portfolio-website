/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
//================ HOME TEXT CIRCULAR =================//

const homeText = document.getElementById('home-text')

if (homeText) {
   const letters = homeText.textContent.trim().split('')
   const angleStep = 360 / letters.length

   homeText.textContent = ''

   letters.forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.transform = `rotate(${i * angleStep}deg)`
      homeText.appendChild(span)
   })
}

/*=============== HOME TYPED JS ===============*/
if (document.getElementById('home-typed') && typeof Typed !== 'undefined') {
   new Typed('#home-typed', {
      strings: ['Freelancer', 'Web Developer', 'SEO Specialist'],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
   })
}

/*=============== CHANGE HEADER STYLES ===============*/
/*================ CHANGE HEADER STYLES ================*/

const scrollHeader = () => {
    const header = document.getElementById('header');

    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    window.scrollY >= 50
        ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
scrollHeader()

/*=============== SWIPER WORK ===============*/
if (document.querySelector('.work__swiper') && typeof Swiper !== 'undefined') {
   new Swiper('.work__swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      grabCursor: true,
      speed: 700,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
      },
      pagination: {
         el: '.work .swiper-pagination',
         clickable: true,
      },
      breakpoints: {
         540: {
            slidesPerView: 2,
            spaceBetween: 24,
         },
         1150: {
            slidesPerView: 3,
            spaceBetween: 28,
         },
      },
   })
}

/*=============== SERVICES ACCORDION ===============*/ 
const servicesCards = document.querySelectorAll('.services__card'),
      servicesButtons = document.querySelectorAll('.services__button')

servicesButtons.forEach(button => {
   button.addEventListener('click', () => {
      const currentCard = button.closest('.services__card')
      const isOpen = currentCard.classList.contains('services-open')

      // Close every service before optionally opening the selected one.
      servicesCards.forEach(card => {
         card.classList.replace('services-open', 'services-close')
         card.querySelector('.services__button').setAttribute('aria-expanded', 'false')
      })

      if (!isOpen) {
         currentCard.classList.replace('services-close', 'services-open')
         button.setAttribute('aria-expanded', 'true')
      }
   })
})
/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 
const tracks = document.querySelectorAll('.testimonials__content')

tracks.forEach(track => {
   const cards = [...track.children]

   for (const card of cards) {
      track.appendChild(card.cloneNode(true))
   }
})

/*=============== CONTACT EMAIL JS ===============*/ 
/*=============== CONTACT EMAIL JS ===============*/

// Select form and message elements
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

// Initialize EmailJS with your public key
emailjs.init('u9Fl5GbZWThUm9TlR')

const sendEmail = async (e) => {
    e.preventDefault()

    try {
        // Use the form element reference instead of string
        await emailjs.sendForm(
            'service_akpv8za',
            'template_ypz8ozr',
            contactForm,
            'u9Fl5GbZWThUm9TlR'
        )

        // Success message
        contactMessage.textContent = 'Message sent successfully ✅'
    } catch (error) {
        // Error message + log for debugging
        contactMessage.textContent = 'Message not sent (service error) ❌'
        console.error('EmailJS Error:', error)
    }
}

// Add event listener
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)


/*=============== CUSTOM CURSOR ===============*/
/*=============== CUSTOM CURSOR JS ===============*/

// Select single cursor element
const cursor = document.querySelector('.cursor')

// Store mouse position
let mouseX = 0, mouseY = 0

// Update cursor position
const cursorMove = () => {
    cursor.style.left = `${mouseX}px`   // Horizontal position
    cursor.style.top = `${mouseY}px`    // Vertical position
    cursor.style.transform = 'translate(-50%, -50%)' // Center at pointer
}

// Detect mouse movement and update instantly
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    cursorMove()
})

// Hide custom cursor on links

const a = document.querySelectorAll('a')

a.forEach(item => {
   item.addEventListener('mouseover', () => {
      cursor.classList.add('hide-cursor')
   })

   item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hide-cursor')
   })
})
/*=============== SCROLLREVEAL ANIMATION ===============*/
let sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: '1200',
   delay: 300,
   easing: 'cubic-bezier(0.34, 1.56, 1)',
   //reset: true,   //animaition
})

sr.reveal(`home__subtitle`)
sr.reveal(`.home__title`, {delay: 600})