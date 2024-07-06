 // Array of background images
 const images = [
     'url("https://bwvision.com/wp-content/uploads/2023/02/Doha-Skyline-with-Burj-Doha-no-border.jpg")',
    'url("https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?cs=srgb&dl=pexels-joshkjack-135018.jpg&fm=jpg")',
    'url("https://www.londonfineartphotography.co.uk/wp-content/uploads/2018/09/Building.jpg")'
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

//for bg-color
let isBlack = false;

function setColor() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.querySelector('.text-box').style.color = 'black';
    document.querySelector('.swap').style.color = 'black';
    document.getElementById('nav-list1').style.color = 'white';
    document.getElementById('nav-list2').style.color = 'white';
    document.getElementById('nav-list3').style.color = 'white';
    document.getElementById('nav-list4').style.color = 'white';
    document.getElementById('nav-list5').style.color = 'white';
    document.querySelector('.text-over-img').style.borderColor='white';
}

function resetColor() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.querySelector('.text-box').style.color = '';
    document.querySelector('.swap').style.color = '';
    document.getElementById('nav-list1').style.color = '';
    document.getElementById('nav-list2').style.color = '';
    document.getElementById('nav-list3').style.color = '';
    document.getElementById('nav-list4').style.color = '';
    document.getElementById('nav-list5').style.color = '';
    document.querySelector('.text-over-img').style.borderColor='black';
}

document.getElementById('bg-color').addEventListener('click', () => {
    if (isBlack) {
        resetColor();
    } else {
        setColor();
    }
    isBlack = !isBlack;
});