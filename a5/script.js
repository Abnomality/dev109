const images = [
    { src: 'images/image1.jpg', description: 'Description of Image 1' },
    { src: 'images/image2.jpg', description: 'Description of Image 2' },
    { src: 'images/image3.jpg', description: 'Description of Image 3' },
    { src: 'images/image4.jpg', description: 'Description of Image 4' },
    { src: 'images/image5.jpg', description: 'Description of Image 5' }
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
    interval = setInterval(nextImage, 10000);  // 10000ms = 10s
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

interval = setInterval(nextImage, 10000);
