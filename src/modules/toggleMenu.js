const toggleMenu = () => {
    const menu = document.querySelector('nav');
    let menuOpen = true;

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        let menuBtn = target.closest('.menu');
        if (menuBtn && menuOpen) {
            menuOpen = false;
            menu.style.transform = `translate(0)`;
        } else if (target !== menu && !menuOpen) {
            menuOpen = true;
            menu.style.transform = `translate(-100%)`;
        }
    });
};

export default toggleMenu;
