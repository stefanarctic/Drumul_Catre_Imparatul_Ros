
// Loading animation
const hiddenElements_ = document.querySelectorAll('.hidden');

window.onload = () => {
    hiddenElements_.forEach((element) => {
        element.classList.add('show');
    })
}