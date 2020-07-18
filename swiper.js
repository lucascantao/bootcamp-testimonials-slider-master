//Images
const ImageSlider = document.querySelector('.image-slider');
const Images = document.querySelectorAll('.image-slider img');

//Buttons
const PrevBtn = document.querySelector('#prev-btn');
const NextBtn = document.querySelector('#next-btn');

//Header Texts
const HeaderTexts = document.querySelectorAll('#header-texts');

let counter = 0;

const size = Images[0].clientWidth;

ImageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Listeners
NextBtn.addEventListener('click', () => {
    if (Images[counter].id != null && Images[counter].id === "last") return;

    for (let index = 0; index < HeaderTexts.length; index++) {
        HeaderTexts[index].classList.toggle('hidden');
    }

    ImageSlider.style.transition = "transform 0.4s ease-in-out";
    counter = counter + 1;
    ImageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

PrevBtn.addEventListener('click', () => {
    if (Images[counter].id != null && Images[counter].id === "first") return;

    for (let index = 0; index < HeaderTexts.length; index++) {
        HeaderTexts[index].classList.toggle('hidden');
    }
    
    ImageSlider.style.transition = "transform 0.4s ease-in-out";
    counter = counter - 1;
    ImageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

    
});