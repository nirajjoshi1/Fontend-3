const homepageAnimation = () => {
    gsap.set(".arrow", { scale: 4 });

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });

    tl.to(".viddiv", {
        '--clip': "0%", // Corrected property name
        ease: Power2 // Corrected easing function
    }, 'a');

    tl.to(".arrow", {
        ease: Power2, // Corrected easing function
        scale: 1,
    }, 'a');

    tl.to(".lft", {
        xPercent: -10,
        stagger: .03,
        ease: Power4 // Corrected easing function
    }, 'b');

    tl.to(".rgt", {
        xPercent: 10,
        stagger: .03,
        ease: Power4 // Corrected easing function
    }, 'b');

}

const realAimation = ()=>{gsap.to(".slide", {
    scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
 },
        xPercent: -330,
        ease: Power4
    });
};

const teamAnimation = () => {
    document.querySelectorAll(".listelem")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    ease: Power4,
                    duration: .5,
                })
            });
            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector(".picture"), { opacity: 0, ease: Power4, duration: .5 })
            });
        });
};

const textAnimation = ()=>{
    var clutter = "";
    document.querySelector(".textpara")
        .textContent.split("")
        .forEach(function (e) {
            if (e === "") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        });
    document.querySelector(".textpara").innerHTML = clutter;
    gsap.set(".textpara span", { opacity: .1 });

    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 50%",
            end: "bottom bottom",
            scrub: .2
        },
        opacity: 1,
        stagger: .3,
        ease: Power2
    })
}
function capsulesAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4

    });

    gsap.to(".capsule:nth-child(1)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        x: -100,
        ease: Power4
    })
};
const colorChange = () =>{document.querySelectorAll(".section")
    .forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color);
            },
                onEnterBack: function() {
                    document.body.setAttribute("theme", e.dataset.color);
                },
                });
    });
};

var cards = document.querySelectorAll('.card');
const animation = ()=>{
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        cards.forEach(function (card) {
            var cardPosition = card.getBoundingClientRect().top + window.scrollY;

            if (scrollPosition > cardPosition - (windowHeight / 2) && scrollPosition < cardPosition + (windowHeight / 2)) {
                card.style.backgroundColor = '#000';
                card.style.scale = 1.1; // Change to the desired color
            } else {
                card.style.backgroundColor = '#fff';
                card.style.scale = 1; // Change back to default color
            }
        });
    });
};

animation();
colorChange();
textAnimation()
teamAnimation();
homepageAnimation();
capsulesAnimation();
realAimation();





