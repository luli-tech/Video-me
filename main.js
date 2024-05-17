let carouselChildren = document.querySelectorAll('.carousel-objects');
let bu = document.querySelector('button');
let caroButton=document.querySelectorAll('.dot')
let current = 0;
let max = carouselChildren.length;

carouselChildren.forEach((tracker, index) => {
    tracker.style.transform = `translateX(${index * 100}%)`;
});

let updateSlides = () => {
    carouselChildren.forEach((tracker, index) => {
        tracker.style.transform = `translateX(${(index - current) * 100}%)`;
    });
};

let period = function() {
    current = current !== max - 1 ? current + 1 : 0;
    console.log(current);
    updateSlides();
    updateButtonStyles()
};
setInterval(period, 6000);

let startX = 0;
let endX = 0;

carouselChildren.forEach(carousel => {
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
        let swipeDistance = endX - startX;
        if (swipeDistance > 50) { 
            current = current !== 0 ? current - 1 : max - 1;
        } else if (swipeDistance < -50) {
            current = current !== max - 1 ? current + 1 : 0;
        }
        updateSlides();
        updateButtonStyles()
    });
});

caroButton.forEach((button,index)=>{
  button.addEventListener('click',e=>{
    current=index
    updateSlides()
    updateButtonStyles()
  })
})
let updateButtonStyles = () => {
  caroButton.forEach((button, index) => {
    if (index === current) {
      button.classList.add('red');
    } else {
      button.classList.remove('red');
    }
  });
};

updateButtonStyles()