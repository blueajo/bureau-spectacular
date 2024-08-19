// image hover
const archiveLinks = document.querySelectorAll('.project');

archiveLinks.forEach(link => link.addEventListener('mouseenter', event => {
    // let imageNumber = event.target.querySelector('.project-number').innerHTML;
    let imageNumber = Math.floor(Math.random() * 9);
    document.querySelector('.image' + imageNumber).classList.add('visible');
}));

archiveLinks.forEach(link => link.addEventListener('mouseleave', event => {
    document.querySelectorAll('.background-image > img').forEach(image => image.classList.remove('visible'));
}));