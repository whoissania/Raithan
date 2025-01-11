// Function to open popup with image details
function openPopup(name, info) {
    document.getElementById('imageName').textContent = name;
    document.getElementById('imageInfo').textContent = info;
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Add click event listeners to each image
const images = document.querySelectorAll('.image');
images.forEach(image => {
    image.addEventListener('click', () => {
        const name = image.getAttribute('data-name');
        const info = image.getAttribute('data-info');
        openPopup(name, info);
    });
});
