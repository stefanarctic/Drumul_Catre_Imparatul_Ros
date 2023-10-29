
const startButton = document.getElementById('start-btn');

const currentPage = 0;

startButton.onclick = () => {
    location.href = './pages/page1/index.html';
}

// document.addEventListener('onkeydown', )
document.onkeydown = e => {
    // console.log('pressed key')
    if(e.key === 'Enter')
    {
        startButton.onclick();
    }
}

window.onload = () => {
    // gsap.to('.main-content', { y: 100, duration: 0 });
    // gsap.to('.main-content', { y: -100 });
}