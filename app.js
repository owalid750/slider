// Get slider items
const sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
const slidesCount = sliderImages.length;
let currentSlide = 1;
const slideNumberElement = document.getElementById('slide-number');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicators = document.getElementById('indicators');

// Create pagination bullets
const paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

for (let i = 1; i <= slidesCount; i++) {
    const paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.textContent = i;
    paginationElement.appendChild(paginationItem);
}

indicators.appendChild(paginationElement);

const paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Event Listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Add event listeners to pagination bullets
paginationBullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        currentSlide = parseInt(bullet.getAttribute('data-index'));
        updateSlide();
    });
});

// Initial setup
theChecker();
// Set interval to change slide every 3 seconds
setInterval(nextSlide, 3000);

// Next slide Function
function nextSlide() {
    if (currentSlide < slidesCount) {
        currentSlide++;
        updateSlide();
    }
}

// Previous slide function
function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlide();
    }
}

// Update slide and pagination bullets
function updateSlide() {
    theChecker();
}

// Create the checker function
function theChecker() {
    slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;

    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active');
    paginationBullets[currentSlide - 1].classList.add('active');

    prevButton.classList.toggle('disabled', currentSlide === 1);
    nextButton.classList.toggle('disabled', currentSlide === slidesCount);
}

// Remove All active classes from images and pagination bullets
function removeAllActive() {
    sliderImages.forEach(img => img.classList.remove('active'));
    paginationBullets.forEach(bullet => bullet.classList.remove('active'));
}
