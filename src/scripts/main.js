window.addEventListener('pageshow', () => {
    console.log("Event[pageshow]");
    const contactForm = document.getElementById('contact-form');
    contactForm && contactForm.reset();
});