const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br>Is <br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Tasks 1 & 2

document.querySelector('nav a:nth-child(1)').textContent = siteContent['nav']['nav-item-1'];
document.querySelector('nav a:nth-child(2)').textContent = siteContent['nav']['nav-item-2'];
document.querySelector('nav a:nth-child(3)').textContent = siteContent['nav']['nav-item-3'];
document.querySelector('nav a:nth-child(4)').textContent = siteContent['nav']['nav-item-4'];
document.querySelector('nav a:nth-child(5)').textContent = siteContent['nav']['nav-item-5'];
document.querySelector('nav a:nth-child(6)').textContent = siteContent['nav']['nav-item-6'];

document.querySelector('.cta .cta-text h1').innerHTML = siteContent['cta']['h1'];
document.querySelector('.cta .cta-text button').textContent = siteContent['cta']['button'];
document.getElementById('cta-img').src = siteContent['cta']['img-src'];

document.querySelector('.main-content .top-content .text-content:nth-child(1) h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.main-content .top-content .text-content:nth-child(1) p').textContent = siteContent['main-content']['features-content'];
document.querySelector('.main-content .top-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.main-content .top-content .text-content:nth-child(2) p').textContent = siteContent['main-content']['about-content'];

document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];

document.querySelector('.main-content .bottom-content .text-content:nth-child(1) h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.main-content .bottom-content .text-content:nth-child(1) p').textContent = siteContent['main-content']['services-content'];
document.querySelector('.main-content .bottom-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.main-content .bottom-content .text-content:nth-child(2) p').textContent = siteContent['main-content']['product-content'];
document.querySelector('.main-content .bottom-content .text-content:nth-child(3) h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.main-content .bottom-content .text-content:nth-child(3) p').textContent = siteContent['main-content']['vision-content'];

document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
document.querySelector('.contact p:nth-child(2)').innerHTML = siteContent['contact']['address'];
document.querySelector('.contact p:nth-child(3)').textContent = siteContent['contact']['phone'];
document.querySelector('.contact p:nth-child(4)').textContent = siteContent['contact']['email'];

document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

// Task 3

const peopleLink = document.createElement('a');
peopleLink.textContent = 'People';
const nav = document.querySelector('nav');
nav.appendChild(peopleLink);

const jobsLink = document.createElement('a');
jobsLink.textContent = 'Jobs';
nav.appendChild(jobsLink);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => link.style.color = 'green');



// Stretch

const button = document.querySelector('.cta .cta-text button');
button.style.background = 'lightgreen';
button.style.color = 'white';
button.style.width = '12rem';
button.style.height = '4rem';
button.style.fontSize = '2rem';
button.style.borderRadius = '1rem';
button.style.border = '2px solid black';

button.addEventListener('click', (event) => {
  event.target.style.background = 'red';
  event.target.textContent = '... or not';
  document.querySelector('.cta .cta-text h1').innerHTML = 'the cake <br>is <br>a lie';
  const subHeadings = document.querySelectorAll('h4');
  subHeadings.forEach(heading => heading.textContent = 'Great Idea isn\'t a real company')
});



