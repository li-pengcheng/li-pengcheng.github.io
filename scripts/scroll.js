function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar-container').clientHeight;
        window.scrollTo({
            top: section.offsetTop - navHeight,
            behavior: "smooth"
        });
    }
}