document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE MENU */

    const mobileButton =
        document.querySelector(".mobile-menu");

    const mobileNav =
        document.querySelector(".mobile-nav");

    if (mobileButton && mobileNav) {

        mobileButton.addEventListener("click", () => {

            mobileNav.classList.toggle("open");

        });

        mobileNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileNav.classList.remove("open");

                });

            });
    }


    /* ACTIVE NAVIGATION */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-links a");


    function updateNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateNavigation
    );

    updateNavigation();


    /* SMOOTH SCROLL */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const targetId =
                        anchor.getAttribute("href");

                    if (targetId === "#") {
                        return;
                    }

                    const target =
                        document.querySelector(targetId);

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* SERVICE BUTTONS */

    document
        .querySelectorAll(".service-arrow")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const card =
                        button.closest(".service-card");

                    if (!card) {
                        return;
                    }

                    const title =
                        card.querySelector("h3");

                    if (title) {

                        console.log(
                            "Selected service:",
                            title.textContent
                        );

                    }

                }
            );

        });


    /* SCROLL REVEAL */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .team-card, .about-image, .about-content, .contact-inner"
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* HERO PARALLAX */

    const heroVisual =
        document.querySelector(".hero-visual");


    if (
        heroVisual &&
        window.innerWidth > 900
    ) {

        window.addEventListener(
            "mousemove",
            event => {

                const x =
                    (event.clientX /
                        window.innerWidth - 0.5) * 8;

                const y =
                    (event.clientY /
                        window.innerHeight - 0.5) * 8;

                heroVisual.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );

    }

});
