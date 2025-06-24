let currentSlide = 0;

// Slide navigation function
function goToSlide(slideIndex) {
  const slider = document.querySelector('.slider');
  currentSlide = slideIndex;
  slider.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

// Background slideshow for "Destination" slide
const destinationImages = ['nagpur.jpg', 'mumbai.jpg', 'pune.jpg'];
let currentImageIndex = 0;
const destinationSlide = document.getElementById('destination-slide');

function updateBackgroundImage() {
  if (currentSlide === 1) {
    destinationSlide.style.backgroundImage = `url(${destinationImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % destinationImages.length;
  }
}
setInterval(updateBackgroundImage, 3000);

// Booking form submission
const bookingForm = document.getElementById('booking-form');
const popup = document.getElementById('confirmation-popup');

bookingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Show random quote
  popup.querySelector('p').innerText = getRandomQuote();
  popup.style.display = 'block';

  // Hide after few seconds and go to first slide
  setTimeout(() => {
    popup.style.display = 'none';
    goToSlide(0);
  }, 4000);
});

function getRandomQuote() {
  const quotes = [
    "Wishing you a journey full of amazing experiences!",
    "Bon voyage! Make every moment count!",
    "Safe travels! May your trip be filled with joy!",
    "Have a blast! The world awaits your footprints.",
    "Let the adventure begin. Happy journey!"
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function closePopup() {
  popup.style.display = 'none';
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
