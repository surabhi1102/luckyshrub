let sliderIndex = 0;
const slides = document.querySelectorAll('.display article');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const displaySection = document.querySelector('.display');

prevButton.addEventListener('click', function() {
    sliderIndex--;
    updateSlider();
});

nextButton.addEventListener('click', function() {
    sliderIndex++;
    updateSlider();
});

function updateSlider() {
    if(sliderIndex < 0) {
        sliderIndex = slides.length - 1;
    } else if(sliderIndex >= slides.length) {
        sliderIndex = 0;
    }

    const offset = -(sliderIndex * 300); // Assuming each slide is 300px wide
    displaySection.style.transform = `translateX(${offset}px)`;
}
