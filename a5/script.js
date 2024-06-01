const images = [
    { src: 'images/image1.png', description: 'This is my first artifact assignment in dev 109. We learned how to bold, italicize, and space text in HTML.' },
    { src: 'images/image2.png', description: 'This is a static chessboard we made. It helped show us how to center bojects and images and how IDs work.' },
    { src: 'images/image3.png', description: 'This is a rhombus generator. It was a great exercise on how to implement Javascript with HTML to make a shape generator.' },
    { src: 'images/image4.png', description: 'This is a project where we had to create a form for a usar to complete. You had to make sure all the fields worked, and to throw the usar an error message if something was wrong.' },
    { src: 'images/image5.png', description: 'This is a module assignment where we had to track the curser and whenever the curser clicks it draws a dot.' }
];

let currentIndex = 0;
let interval;

const imageElement = document.getElementById('slideshow-image');
const descriptionElement = document.getElementById('description');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showImage(index) {
    imageElement.src = images[index].src;
    descriptionElement.textContent = images[index].description;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetInterval();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetInterval();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextImage, 10000);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

interval = setInterval(nextImage, 10000);
