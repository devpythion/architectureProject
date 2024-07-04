 // Array of background images
 const images = [
    'url("https://www.popphoto.com/uploads/2019/01/04/YYSUPG6ZZHM3IIOPABLJMBCGFE.jpg?auto=webp")',
    'url("https://www.londonfineartphotography.co.uk/wp-content/uploads/2018/09/Building.jpg")',
    'url("https://bwvision.com/wp-content/uploads/2023/02/Doha-Skyline-with-Burj-Doha-no-border.jpg")'
    // Add more image URLs as needed
];

let currentIndex = 0;

// Function to update background image
function updateBackgroundImage(index) {
    const imageDiv = document.querySelector('.change-img');
    imageDiv.style.backgroundImage = images[index];
}

// Event listeners for the swap controls
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateBackgroundImage(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateBackgroundImage(currentIndex);
});

// Initialize with the first image
updateBackgroundImage(currentIndex);