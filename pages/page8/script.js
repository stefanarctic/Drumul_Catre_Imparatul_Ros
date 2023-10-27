
const startButton = document.getElementById('start-btn');
const nextStoryButton = document.getElementById('next-story-button');

const currentPage = 8;

// startButton.onclick = () => {
//     location.href = './pages/page1/index.html';
// }

// document.addEventListener('onkeydown', )
document.onkeydown = e => {
    // console.log('pressed key')
    if(e.key === 'Escape')
    {
        location.reload();
        // console.log('reloaded');
    } else if(e.key === 'ArrowRight')
    {
        nextPage();
    } else if(e.key === 'ArrowLeft')
    {
        previousPage();
    }
}

const nextPage = () => {
    const path = `../page${currentPage + 1}/index.html`;
    location.href = path;
}

const previousPage = () => {
    let path = '';
    if(currentPage === 1)
        path = '../redirect.html';
    else
        path = `../page${currentPage - 1}/index.html`;
    
    location.href = path;
}