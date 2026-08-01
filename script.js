/*=========================================
        STICKY GLASS NAVBAR
=========================================*/

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/*=========================================
        ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*=========================================
        CLOSE MOBILE MENU
=========================================*/

const navItems = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});
/*=========================================
            HERO TYPING EFFECT
=========================================*/

const typingElement = document.querySelector("#typing");

if (typingElement) {

    new Typed("#typing", {

        strings: [

            "Graphic Designer",

            "Brand Identity Designer",

            "Logo Designer",

            "Social Media Designer",

            "Creative Thinker"

        ],

        typeSpeed: 80,

        backSpeed: 45,

        backDelay: 1800,

        loop: true

    });

}


/*=========================================
            HERO COUNTER
=========================================*/

const counters = document.querySelectorAll(".stat-card h3");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 70;

            const updateCounter = ()=>{

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count) + "+";

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:0.5});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/*=========================================
            IMAGE PARALLAX
=========================================*/

const heroImage = document.querySelector(".hero-image");

document.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth/2 - e.pageX)/40;

    const y = (window.innerHeight/2 - e.pageY)/40;

    heroImage.style.transform =
    `translate(${x}px,${y}px)`;

});


/*=========================================
        HERO FADE IN
=========================================*/

window.addEventListener("load",()=>{

    const heroContent =
    document.querySelector(".hero-content");

    const heroImg =
    document.querySelector(".hero-image");

    if(heroContent){

        heroContent.animate([

            {
                opacity:0,
                transform:"translateX(-60px)"
            },

            {
                opacity:1,
                transform:"translateX(0)"
            }

        ],{

            duration:1000,

            easing:"ease-out",

            fill:"forwards"

        });

    }

    if(heroImg){

        heroImg.animate([

            {
                opacity:0,
                transform:"translateX(60px)"
            },

            {
                opacity:1,
                transform:"translateX(0)"
            }

        ],{

            duration:1200,

            easing:"ease-out",

            fill:"forwards"

        });

    }

});
/*=========================================
        ABOUT SECTION COUNTERS
=========================================*/

const aboutCounters = document.querySelectorAll(".about-card h3");

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            let text = counter.innerText;

            let target = parseInt(text.replace(/\D/g, ""));

            let suffix = text.replace(/[0-9]/g, "");

            let count = 0;

            let speed = target / 80;

            function updateCounter() {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count) + suffix;

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + suffix;

                }

            }

            updateCounter();

            aboutObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

aboutCounters.forEach(counter => {

    aboutObserver.observe(counter);

});


/*=========================================
        ABOUT IMAGE ANIMATION
=========================================*/

const aboutImage = document.querySelector(".about-image");

const aboutContent = document.querySelector(".about-content");

const aboutSection = document.querySelector("#about");

const revealAbout = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            if (aboutImage) {

                aboutImage.animate([

                    {
                        opacity: 0,
                        transform: "translateX(-80px)"
                    },

                    {
                        opacity: 1,
                        transform: "translateX(0)"
                    }

                ], {

                    duration: 1200,

                    easing: "ease-out",

                    fill: "forwards"

                });

            }

            if (aboutContent) {

                aboutContent.animate([

                    {
                        opacity: 0,
                        transform: "translateX(80px)"
                    },

                    {
                        opacity: 1,
                        transform: "translateX(0)"
                    }

                ], {

                    duration: 1200,

                    easing: "ease-out",

                    fill: "forwards"

                });

            }

            revealAbout.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.3
});

if (aboutSection) {

    revealAbout.observe(aboutSection);

}


/*=========================================
        ABOUT CARD HOVER EFFECT
=========================================*/

const aboutCards = document.querySelectorAll(".about-card");

aboutCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(108,99,255,.18),
        rgba(255,255,255,.05))
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});


/*=========================================
        FLOATING BADGES PARALLAX
=========================================*/

const badges = document.querySelectorAll(".design-badge");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 60;
    const y = (window.innerHeight / 2 - e.clientY) / 60;

    badges.forEach((badge, index) => {

        badge.style.transform =
            `translate(${x * (index + 1)}px, ${y * (index + 1)}px)`;

    });

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn-main,.btn-outline");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";

        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
/*=========================================
        SERVICES REVEAL ANIMATION
=========================================*/

const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.animate(

                    [
                        {
                            opacity: 0,
                            transform: "translateY(60px)"
                        },

                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }

                    ],

                    {
                        duration: 700,
                        easing: "ease-out",
                        fill: "forwards"
                    }

                );

            }, index * 120);

            serviceObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

serviceCards.forEach(card => {

    serviceObserver.observe(card);

});


/*=========================================
        3D TILT EFFECT
=========================================*/

serviceCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / 15);

        const rotateY = ((rect.width / 2 - x) / 15);

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/*=========================================
        ICON PULSE EFFECT
=========================================*/

serviceCards.forEach(card => {

    const icon = card.querySelector(".service-icon");

    card.addEventListener("mouseenter", () => {

        icon.animate([

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(1.15)"
            },

            {
                transform: "scale(1)"
            }

        ], {

            duration: 500

        });

    });

});


/*=========================================
        CARD GLOW EFFECT
=========================================*/

serviceCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(108,99,255,.18),
        rgba(255,255,255,.05))
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,.05)";

    });

});
/*=========================================
        PORTFOLIO FILTER
=========================================*/

const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(button =>
            button.classList.remove("active")
        );

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {

            item.style.transition =
                "all .45s ease";

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 150);

            } else {

                item.style.opacity = "0";
                item.style.transform = "scale(.8)";

                setTimeout(() => {

                    item.style.display = "none";

                }, 300);

            }

        });

    });

});


/*=========================================
        SCROLL REVEAL
=========================================*/

const portfolioCards =
document.querySelectorAll(".portfolio-card");

const portfolioObserver =
new IntersectionObserver(entries=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show-card");

            },index*120);

        }

    });

},{
    threshold:.2
});

portfolioCards.forEach(card=>{

    portfolioObserver.observe(card);

});


/*=========================================
        IMAGE LIGHTBOX
=========================================*/

const portfolioImages =
document.querySelectorAll(".portfolio-card img");

const lightbox =
document.createElement("div");

lightbox.className = "portfolio-lightbox";

lightbox.innerHTML = `

<div class="lightbox-wrapper">

<img src="">

<span class="close-lightbox">

<i class="fa-solid fa-xmark"></i>

</span>

</div>

`;

document.body.appendChild(lightbox);

const previewImage =
lightbox.querySelector("img");

portfolioImages.forEach(img=>{

    img.addEventListener("click",()=>{

        previewImage.src = img.src;

        lightbox.classList.add("active");

        document.body.style.overflow="hidden";

    });

});

lightbox.addEventListener("click",(e)=>{

    if(

        e.target===lightbox ||

        e.target.closest(".close-lightbox")

    ){

        lightbox.classList.remove("active");

        document.body.style.overflow="";

    }

});


/*=========================================
        ESC CLOSE
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

        document.body.style.overflow="";

    }

});


/*=========================================
        CARD TILT EFFECT
=========================================*/

portfolioCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX-rect.left;

        const y =
        e.clientY-rect.top;

        const rotateX =
        ((y-rect.height/2)/20);

        const rotateY =
        ((rect.width/2-x)/20);

        card.style.transform=`

        perspective(1000px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-12px)

        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});
/*=========================================
        SKILLS SECTION
=========================================*/

const skillCircles = document.querySelectorAll(".skill-circle");

const skillsObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const circle = entry.target.querySelector(".progress-circle");
            const number = entry.target.querySelector(".skill-number");

            const percent = parseInt(entry.target.dataset.percent);

            const radius = 60;
            const circumference = 2 * Math.PI * radius;

            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = circumference;

            let current = 0;

            const counter = setInterval(() => {

                if (current >= percent) {

                    clearInterval(counter);

                } else {

                    current++;

                    number.innerHTML = current + "%";

                    const offset =
                        circumference -
                        (current / 100) * circumference;

                    circle.style.strokeDashoffset = offset;

                }

            }, 18);

            skillsObserver.unobserve(entry.target);

        }

    });

}, {

    threshold:0.4

});

skillCircles.forEach(circle=>{

    skillsObserver.observe(circle);

});


/*=========================================
        SKILL CARD ANIMATION
=========================================*/

const skillCards =
document.querySelectorAll(".skill-card");

const skillCardObserver =
new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show-skill");

            },index*150);

        }

    });

},{

    threshold:.2

});

skillCards.forEach(card=>{

    skillCardObserver.observe(card);

});


/*=========================================
        3D TILT EFFECT
=========================================*/

skillCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height/2) / 18);

        const rotateY = ((rect.width/2 - x) / 18);

        card.style.transform = `

        perspective(1000px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        translateY(-12px)

        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/*=========================================
        HOVER GLOW
=========================================*/

skillCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `

        radial-gradient(circle at ${x}px ${y}px,

        rgba(108,99,255,.18),

        rgba(255,255,255,.05))

        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.05)";

    });

});
/*=========================================
        CONTACT SECTION
=========================================*/

// Contact Form
const contactForm = document.querySelector(".contact-form form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const inputs = this.querySelectorAll(".form-control");
        let valid = true;

        inputs.forEach(input=>{

            if(input.value.trim()===""){

                input.style.borderColor="#ff4d6d";

                valid=false;

            }else{

                input.style.borderColor="#6C63FF";

            }

        });

        if(valid){

            const button=this.querySelector(".btn-main");

            const originalText=button.innerHTML;

            button.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            button.disabled=true;

            setTimeout(()=>{

                button.innerHTML='<i class="fa-solid fa-check"></i> Message Sent';

                button.style.background="#16a34a";

                this.reset();

                setTimeout(()=>{

                    button.innerHTML=originalText;

                    button.style.background="";

                    button.disabled=false;

                },2500);

            },1800);

        }

    });

}

/*=========================================
        INPUT FOCUS EFFECT
=========================================*/

const formInputs=document.querySelectorAll(".contact-form .form-control");

formInputs.forEach(input=>{

    input.addEventListener("focus",()=>{

        input.parentElement.style.transform="translateY(-4px)";

    });

    input.addEventListener("blur",()=>{

        input.parentElement.style.transform="translateY(0)";

    });

});

/*=========================================
        CONTACT CARD REVEAL
=========================================*/

const contactCards=document.querySelectorAll(".contact-card");

const contactObserver=new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show-contact");

            },index*150);

        }

    });

},{
    threshold:.2
});

contactCards.forEach(card=>{

    contactObserver.observe(card);

});

/*=========================================
        FORM REVEAL
=========================================*/

const formBox=document.querySelector(".contact-form");

const formObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            formBox.classList.add("show-form");

        }

    });

},{
    threshold:.2
});

if(formBox){

    formObserver.observe(formBox);

}

/*=========================================
        CONTACT CARD TILT
=========================================*/

contactCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=((y-rect.height/2)/18);

        const rotateY=((rect.width/2-x)/18);

        card.style.transform=`
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/*=========================================
        FORM GLOW EFFECT
=========================================*/

if(formBox){

    formBox.addEventListener("mousemove",(e)=>{

        const rect=formBox.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        formBox.style.background=`
        radial-gradient(circle at ${x}px ${y}px,
        rgba(108,99,255,.18),
        rgba(255,255,255,.05))
        `;

    });

    formBox.addEventListener("mouseleave",()=>{

        formBox.style.background="rgba(255,255,255,.05)";

    });

}
/*=========================================
            FOOTER
=========================================*/

/*==============================
      BACK TO TOP BUTTON
==============================*/

const backTop = document.querySelector(".back-top");

if(backTop){

    backTop.addEventListener("click", function(e){

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==============================
      FOOTER REVEAL
==============================*/

const footer = document.querySelector(".footer");

const footerObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            footer.classList.add("show-footer");

        }

    });

},{

    threshold:.2

});

if(footer){

    footerObserver.observe(footer);

}

/*==============================
      SOCIAL ICON ANIMATION
==============================*/

const socialIcons = document.querySelectorAll(".footer-social a");

socialIcons.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="translateY(-8px) rotate(10deg) scale(1.1)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="translateY(0) rotate(0) scale(1)";

    });

});

/*==============================
      FOOTER LINK EFFECT
==============================*/

const footerLinks=document.querySelectorAll(".footer-links a");

footerLinks.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.paddingLeft="10px";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.paddingLeft="0px";

    });

});

/*==============================
      CURRENT YEAR
==============================*/

const footerYear=document.querySelector(".footer-year");

if(footerYear){

    footerYear.textContent=new Date().getFullYear();

}