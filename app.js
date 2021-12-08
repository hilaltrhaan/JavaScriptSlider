const Slider= document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');
//button için
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter =1 ;
const size = sliderImages[0].clientWidth;
Slider.style.transform='translateX('+(-size*counter)+'px)';

nextBtn.addEventListener('click',() =>{
    if(counter >= sliderImages.length -1) return;
    Slider.style.transition="transform 0.4s ease-in-out";
    counter++;
   Slider.style.transform='translateX('+(-size*counter)+'px)';
});

prevBtn.addEventListener('click',() =>{
    if(counter <=0) return;
    Slider.style.transition="transform 0.4s ease-in-out";
    counter--;
    Slider.style.transform= 'translateX('+(-size*counter)+'px)';

});
Slider.addEventListener('transitionend', () =>{
    if(sliderImages[counter].id === 'lastClone'){
         Slider.style.transition="none";
        counter = sliderImages.length - 2;
        Slider.style.transform='translateX('+(-size*counter)+'px)';
    }
    if(sliderImages[counter].id === 'firstClone'){
        Slider.style.transition="none";
        counter = sliderImages.length - counter;
        Slider.style.transform='translateX('+(-size*counter)+'px)';
    }
});