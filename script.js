
const startButton = document.getElementById('start-btn');

const currentPage = 0;

startButton.onclick = () => {
    location.href = './pages/page1/index.html';
}

// document.addEventListener('onkeydown', )
document.onkeydown = e => {
    // console.log('pressed key')
    if(e.key === 'Escape')
    {
        location.reload();
        // console.log('reloaded');
    }
}