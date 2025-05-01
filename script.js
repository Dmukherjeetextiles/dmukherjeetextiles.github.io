document.addEventListener('DOMContentLoaded', () => {
    // --- Initialize AOS ---
    AOS.init({
        duration: 800, // Animation duration
        once: true,    // Animation happens only once
        mirror: false, // Does not animate out when scrolling past
        offset: 50,    // Trigger animations slightly earlier
    });

    // --- Mobile Menu Toggle ---
    const menuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('nav-links-list');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuButton.classList.toggle('active'); // For hamburger 'X' animation
        });

        // Close menu when a link is clicked (optional)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuButton.classList.remove('active');
            });
        });
    } else {
        console.error("Mobile menu button or nav links not found!");
    }


    // --- Interactive Alphabet Links ---
    const capitalD = document.getElementById("capitalD");
    const capitalE = document.getElementById("capitalE");
    const capitalB = document.getElementById("capitalB");
    const capitalR = document.getElementById("capitalR");
    const capitalU = document.getElementById("capitalU");
    const capitalP = document.getElementById("capitalP");
    const body = document.body;

    // D -> Dark Mode Toggle
    if (capitalD) {
        capitalD.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            // Optional: Save preference to localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
        // Optional: Check localStorage on load
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark-mode");
        }
    }

    // E -> Enquiry (Contact)
    if (capitalE) {
        capitalE.addEventListener("click", () => {
            // Smooth scroll to section
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            // Or simple jump: window.location.href = "#contact";
        });
    }

    // B -> Bio (About)
    if (capitalB) {
        capitalB.addEventListener("click", () => {
             document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            // Or: window.location.href = "#about";
        });
    }

    // R -> Resume Section (More Projects)
    if (capitalR) {
        capitalR.addEventListener("click", () => {
             document.getElementById('more-projects')?.scrollIntoView({ behavior: 'smooth' });
            // Or: window.location.href = "#more-projects";
        });
    }

    // U -> Utilities (Pricing)
    if (capitalU) {
        capitalU.addEventListener("click", () => {
             document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            // Or: window.location.href = "#pricing";
        });
    }

    // P -> Portfolio
    if (capitalP) {
        capitalP.addEventListener("click", () => {
             document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            // Or: window.location.href = "#portfolio";
        });
    }


    // --- Dynamic Hue Rotation ---
    let lastTime = null;
    const HUE_CHANGE_RATE = 0.015; // Degrees per millisecond (adjust speed)

    function updateHue(time) {
        if (lastTime != null) {
            const delta = time - lastTime;
            const currentHue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue'));
            // Ensure currentHue is a number, default to root value if NaN
            const validCurrentHue = isNaN(currentHue) ? parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue')) || 221 : currentHue;

            const newHue = (validCurrentHue + delta * HUE_CHANGE_RATE) % 360;
            document.documentElement.style.setProperty('--hue', newHue.toFixed(2)); // Update CSS variable
        }
        lastTime = time;
        requestAnimationFrame(updateHue); // Continue the loop
    }
    requestAnimationFrame(updateHue); // Start the animation loop


    // --- Testimonial Slider ---
    const testimonials = document.querySelectorAll('#testimonials .testimonial');
    const nextButton = document.querySelector('#testimonials .next');
    const prevButton = document.querySelector('#testimonials .prev');
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
        // Optional: Disable buttons at ends
        // prevButton.disabled = index === 0;
        // nextButton.disabled = index === testimonials.length - 1;
    }

    if (nextButton && prevButton && testimonials.length > 0) {
        nextButton.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            showTestimonial(currentTestimonialIndex);
        });

        prevButton.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonialIndex);
        });

        showTestimonial(currentTestimonialIndex); // Show initial testimonial
    }


     // --- Update Footer Year ---
     const yearSpan = document.getElementById('current-year');
     if (yearSpan) {
         yearSpan.textContent = new Date().getFullYear();
     }

    // --- Intersection Observer for Cards (Optional Enhancement) ---
    // const cards = document.querySelectorAll('.project-card, .pricing-card, .more-item');
    // const cardObserver = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.style.opacity = 1;
    //             entry.target.style.transform = 'translateY(0)';
    //             observer.unobserve(entry.target); // Stop observing once visible
    //         }
    //     });
    // }, { threshold: 0.1 }); // Trigger when 10% visible

    // cards.forEach(card => {
    //     card.style.opacity = 0;
    //     card.style.transform = 'translateY(30px)';
    //     card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    //     cardObserver.observe(card);
    // });

}); // End DOMContentLoaded