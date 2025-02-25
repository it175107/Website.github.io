// Update date and time every second
function updateDateTime() {
  var now = new Date();
  var date = now.toLocaleDateString();
  var options = { hour12: false };
  var time = now.toLocaleTimeString(undefined, options);
  var dateTimeString = date + ' ' + time;

  document.getElementById('datetime').innerHTML = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Profile Fullscreen
const profileImage = document.querySelector('.profile');
const profileFullscreen = document.getElementById('profile-fullscreen');
const profileFullscreenImg = document.getElementById('profile-fullscreen-img');
const profileFullscreenCaption = document.getElementById('profile-fullscreen-caption');

profileImage.addEventListener('click', () => {
  openFullscreen(profileFullscreen, profileFullscreenImg, profileFullscreenCaption, profileImage);
});

// Gallery Fullscreen
const galleryImages = document.querySelectorAll('.gallery-img');
const galleryFullscreen = document.getElementById('gallery-fullscreen');
const galleryFullscreenImg = document.getElementById('gallery-fullscreen-img');
const galleryFullscreenCaption = document.getElementById('gallery-fullscreen-caption');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    openFullscreen(galleryFullscreen, galleryFullscreenImg, galleryFullscreenCaption, image);
  });
});

let currentIndex = 0; 

function changeImage(direction) {
  const images = document.querySelectorAll('.gallery-img');
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  const selectedImage = images[currentIndex];
  openFullscreen(galleryFullscreen, galleryFullscreenImg, galleryFullscreenCaption, selectedImage);
}

function openFullscreen(fullscreenContainer, fullscreenImgElement, fullscreenCaptionElement, clickedElement) {
    const src = clickedElement.dataset.src;
    const caption = clickedElement.dataset.caption;

    fullscreenImgElement.setAttribute('src', src);
    fullscreenCaptionElement.textContent = caption;
    fullscreenCaptionElement.style.display = "block"; //
    fullscreenContainer.style.display = 'flex';
}

function closeFullscreen(fullscreenId) {
  document.getElementById(fullscreenId).style.display = 'none';
}
