// Register ScrollTrigger plugin
window.gsap.registerPlugin(window.ScrollTrigger);

// Animations
window.gsap.from(".landing", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power2.out",
});

window.gsap.from(".skill-bubble", {
    duration: 1,
    opacity: 0.4,
    y: 5,
    stagger: 0.2, // Delay between each bubble
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
    },
});

window.gsap.to("body", {
    backgroundPositionY: "20%",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in animations for sections
gsap.utils.toArray(".section-animate").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
    });
});

// Parallax effect for landing section
gsap.to(".landing", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".landing",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
});

// Skill bubbles animation
gsap.from(".skill-bubble", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
    },
});

// Scroll-to-top button
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add("visible");
    } else {
        scrollToTopButton.classList.remove("visible");
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Loading animation
window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none";
});

// Typing effect for name
const nameElement = document.getElementById("name");
const text = "Tanishk Yadav";
let index = 0;

function type() {
    if (index < text.length) {
        nameElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed
    }
}

type();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    sections.forEach(section => {
        observer.observe(section);
    });
});

function toggleCertificate(certId) {
    var certElement = document.getElementById(certId);
    if (certElement.style.display === "none") {
        certElement.style.display = "block";
    } else {
        certElement.style.display = "none";
    }
}

function clickCertificate(certId){
    if(certId=="cert1"||certId=="cert2"){
        toggleCertificate("cert1");
        toggleCertificate("cert2");
    }
    else if(certId=="cert3"||certId=="cert4"){
        toggleCertificate("cert3");
        toggleCertificate("cert4");
    }
    else if(certId=="cert5"||certId=="cert6"){
        toggleCertificate("cert5");
        toggleCertificate("cert6");
    }
    else if(certId=="cert7"||certId=="cert8"){
        toggleCertificate("cert7");
        toggleCertificate("cert8");
    }
    else if(certId=="cert9"||certId=="cert10"){
        toggleCertificate("cert9");
        toggleCertificate("cert10");
    }
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    // Check if the page is scrolled more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// JavaScript for Parallax Scrolling
window.addEventListener('scroll', function() {
    // Select all parallax elements
    const parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(function(element) {
        let scrollPosition = window.scrollY; // Get the scroll position
        // Adjust the background position based on scroll
        element.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust speed by changing the multiplier
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'section-visible' class to trigger animation
                entry.target.classList.add('section-visible');
                // Optionally, unobserve the section after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold for when the animation should trigger

    // Observe each section on the page
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Scroll-triggered animations for experience items
gsap.utils.toArray(".experience-item").forEach((item) => {
    gsap.from(item, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
    });
});

// Scroll-triggered animations for leadership items
gsap.utils.toArray(".leadership-item").forEach((item) => {
    gsap.from(item, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
    });
});
gsap.utils.toArray(".education-item").forEach((item) => {
    gsap.from(item, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
    });
});
// const nameElement = document.getElementById('name');
// const text = "Tanishk Yadav";
// let index = 0;

// function type() {
//     if (index < text.length) {
//         nameElement.textContent += text.charAt(index);
//         index++;
//         setTimeout(type, 100); // Adjust typing speed
//     }
// }

// type();

// // const scrollToTopButton = document.getElementById('scrollToTop');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 300) {
//         scrollToTopButton.classList.add('visible');
//     } else {
//         scrollToTopButton.classList.remove('visible');
//     }
// });

// scrollToTopButton.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });
