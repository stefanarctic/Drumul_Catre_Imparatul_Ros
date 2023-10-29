
const startButton = document.getElementById('start-btn');
const nextStoryButton = document.getElementById('next-story-button');

const currentPage = 5;

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
    nextPageAnimation();
    setTimeout(() => {
        location.href = path;
    }, 500);
}

const previousPage = () => {
    let path = '';
    if(currentPage === 1)
        path = '../redirect.html';
    else
        path = `../page${currentPage - 1}/index.html`;
    
    location.href = path;
}

// Loading animation
const hiddenElements_ = document.querySelectorAll('.hidden');

window.onload = () => {
    hiddenElements_.forEach((element) => {
        element.classList.add('show');
    })
}

const nextPageAnimation = () => {
    hiddenElements_.forEach((element) => {
        // element.classList.remove('show2');
        element.classList.add('hidden2');
    })
}