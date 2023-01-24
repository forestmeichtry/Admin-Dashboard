let clickables = document.querySelectorAll(".clickable");

clickables.forEach(element => {
        element.addEventListener('click', onClick);
});

function onClick() {
    this.classList.add('click');
    this.addEventListener("animationend", () => {
        this.classList.remove('click');
    });
}