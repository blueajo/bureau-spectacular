let gifNumber = 0;
const gifImage = document.querySelectorAll('div.background-image img');
const gifLength = gifImage.length;
var timePerInterval = 7000;
var interval;
const windowSections = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1], [3,2], [3,3]]; 
const gifOrder = [];

window.onload = (event) => {
    for(let i = 0; i < gifLength; i++) {
        gifOrder.push(i);
    }
    setTimeout(runGif, 1000);
};

window.addEventListener("resize", runGif);

document.querySelector('.background-image').addEventListener('click', event => {
    clearImages();
    cleanUp();
    setTimeout(runGif, 1000);
});

function runGif() {
    clearImages();
    cleanUp();
    placeImages();
    interval = setInterval(showImages, 150);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function clearImages() {
    gifImage.forEach(image => image.classList.remove('visible'));
}

function placeImages() {
    let i = 0;
    let heightBounds = window.innerHeight/5;
    let widthBounds = window.innerWidth/5;

    gifImage.forEach(image => {
        if (i % 9 == 0) {
            shuffleArray(windowSections);
        }
        let dimensions = image.getBoundingClientRect();
        let imageTop = (Math.random()*heightBounds) - dimensions.height/2;
        let imageLeft = (Math.random()*widthBounds) - dimensions.width/2;
        image.style.top = imageTop + (windowSections[i % 9][0]*heightBounds) + "px";
        image.style.left = imageLeft + (windowSections[i % 9][1]*widthBounds) + "px";
        i++;
    });
}

function showImages() {
    if (document.hasFocus()) {
        if (gifLength > gifNumber) {
            gifImage[gifNumber].style.zIndex = gifNumber;
            gifImage[gifNumber].classList.add('visible');
            gifNumber++;
        } else {
            cleanUp();
        }
    }
}

function cleanUp() {
    zIndex = 0;
    gifNumber = 0;
    clearInterval(interval);
}

// get width, height of image in viewport units. Place and size image according to vw/vh; Compute random width and height within viewport, make adjustment based on width, height of image to place by center. Clear on window resize.
// let gifNumber = 0;
// const gifImage = document.querySelectorAll('div.background-image img');
// const gifLength = gifImage.length;
// var timePerInterval = 7000;
// var interval;
// const windowSections = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1], [3,2], [3,3]]; 
// const gifOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// window.onload = (event) => {
//     setTimeout(runGif, 1000);
// };

// window.addEventListener("resize", runGif);

// document.querySelector('.background-image').addEventListener('click', event => {
//     clearImages();
//     cleanUp();
//     setTimeout(runGif, 1000);
// });

// function runGif() {
//     clearImages();
//     cleanUp();
//     placeImages();
//     interval = setInterval(showImages, 150);
// }

// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// function clearImages() {
//     gifImage.forEach(image => image.classList.remove('visible'));
// }

// function placeImages() {
//     let i = 0;
//     let heightBounds = window.innerHeight/5;
//     let widthBounds = window.innerWidth/5;

//     gifImage.forEach(image => {
//         if (i % 9 == 0) {
//             shuffleArray(windowSections);
//             shuffleArray(gifOrder);
//         }
//         let dimensions = image.getBoundingClientRect();
//         let imageTop = (Math.random()*heightBounds) - dimensions.height/2;
//         let imageLeft = (Math.random()*widthBounds) - dimensions.width/2;
//         image.style.top = imageTop + (windowSections[i % 9][0]*heightBounds) + "px";
//         image.style.left = imageLeft + (windowSections[i % 9][1]*widthBounds) + "px";
//         i++;
//     });
// }


// function showImages() {
//     if (document.hasFocus()) {
//         if (gifLength > gifNumber) {
//             let indexNumber = (gifNumber % 9);
//             gifImage[gifOrder[indexNumber] + (Math.floor(gifNumber/9)*9)].style.zIndex = gifNumber;
//             gifImage[gifOrder[indexNumber] + (Math.floor(gifNumber/9)*9)].classList.add('visible');
//             gifNumber++;
//         } else {
//             cleanUp();
//         }
//     }
// }

// function cleanUp() {
//     zIndex = 0;
//     gifNumber = 0;
//     clearInterval(interval);
// }

// // get width, height of image in viewport units. Place and size image according to vw/vh; Compute random width and height within viewport, make adjustment based on width, height of image to place by center. Clear on window resize.