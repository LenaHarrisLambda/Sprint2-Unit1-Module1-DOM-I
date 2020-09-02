const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018",
  },
};

// Selectors //
// Header //
const header = document.querySelector('header');
const nav = header.children[0];
const logo = header.children[1];

// CTA //
const cta = document.querySelector('.cta');
const ctatext = cta.children[0]; 
const ctaimg = cta.children[1];

// Main //
const main = document.querySelector('.main-content');
const toptext = main.children[0];
const middleimg = main.children[1];
const bottomtext = main.children[2];

const features = toptext.children[0];
const about = toptext.children[1];
const services = bottomtext.children[0];
const product = bottomtext.children[1];
const vision = bottomtext.children[2];

// Contact //
const contact = document.querySelector('.contact');

// Footer //
const footer = document.querySelector('footer');
const copy = footer.children[0];

// New Nav Items //
const newnav = {
  "1": "Home",
  "2": "Locations",
}

// Images //
logo.setAttribute('src', siteContent["nav"]["img-src"]);
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Text Elements //
// Nav Text //
nav.style.color = "green";
nav.children[0].textContent = siteContent["nav"]["nav-item-1"];
nav.children[1].textContent = siteContent["nav"]["nav-item-2"];
nav.children[2].textContent = siteContent["nav"]["nav-item-3"];
nav.children[3].textContent = siteContent["nav"]["nav-item-4"];
nav.children[4].textContent = siteContent["nav"]["nav-item-5"];
nav.children[5].textContent = siteContent["nav"]["nav-item-6"];
nav.prepend(newnav["1"]);
nav.append(newnav["2"]);

// Cta Text //
ctatext.children[0].textContent = siteContent["cta"]["h1"];
ctatext.children[1].textContent = siteContent["cta"]["button"];

// Main Text //
// Features //
features.children[0].textContent = siteContent["main-content"]["features-h4"];
features.children[1].textContent = siteContent["main-content"]["features-content"];

// About //
about.children[0].textContent = siteContent["main-content"]["about-h4"];
about.children[1].textContent = siteContent["main-content"]["about-content"];

// Services //
services.children[0].textContent = siteContent["main-content"]["services-h4"];
services.children[1].textContent = siteContent["main-content"]["services-content"];

// Product //
product.children[0].textContent = siteContent["main-content"]["product-h4"];
product.children[1].textContent = siteContent["main-content"]["product-content"];

// Vision //
vision.children[0].textContent = siteContent["main-content"]["vision-h4"];
vision.children[1].textContent = siteContent["main-content"]["vision-content"];

// Contact Text //
contact.children[0].textContent = siteContent["contact"]["contact-h4"];
contact.children[1].textContent = siteContent["contact"]["address"];
contact.children[2].textContent = siteContent["contact"]["phone"];
contact.children[3].textContent = siteContent["contact"]["email"];

// Footer Text //
copy.textContent = siteContent["footer"]["copyright"];