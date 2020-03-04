const imgContainer = () => {
    const img = document.querySelector('#command');
    let image;
    img.addEventListener('mouseover', e => {
        let target = e.target.matches('img');
        image = e.target.src;
        if(target) {
          event.target.src = event.target.dataset.img;
        }
    });

    img.addEventListener('mouseout', e => {
        event.target.src = image;
    });

};

export default imgContainer;