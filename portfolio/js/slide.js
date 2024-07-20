// const slides = document.querySelector(".slides");
// const slide = document.querySelectorAll(".slides > li");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// let currentIdx = 0;
// const slideCount = slide.length;
// const slideWidth = 900;

// makeClone();

// function makeClone() {
//     for (let i = 0; i < slideCount; i++) {
//         let cloneSlide = slide[i].cloneNode(true);
//         cloneSlide.classList.add("clone");
//         slides.appendChild(cloneSlide);
//     }

//     for (let i = slideCount - 1; i >= 0; i--) {
//         let cloneSlide = slide[i].cloneNode(true);
//         cloneSlide.classList.add("clone");
//         slides.prepend(cloneSlide);
//     }

//     updateWidth();
//     setInit();
    
//     setTimeout(function() {
//         slides.classList.add("animated");
//     }, 100);
// }

// function updateWidth() {
//     let currentSlides = document.querySelectorAll(".slides > li");
//     let newSlideCount = currentSlides.length;

//     let newWidth =
//     slideWidth * newSlideCount + "px";
//     slides.style.width = newWidth;
// }

// function setInit() {
//     let translateValue = -slideWidth * slideCount;
//     slides.style.transform = "translateX(" + translateValue + "px)";
// }

// prevBtn.addEventListener("click", function() {
//     moveSlide(currentIdx - 1);
// });
// nextBtn.addEventListener("click", function() {
//     moveSlide(currentIdx + 1);
// });

// function moveSlide(num) {
//     let translateValue = -slideWidth * (slideCount + num);
//     slides.style.transform = "translateX(" + translateValue + "px)";

//     currentIdx = num;
//     console.log(currentIdx, slideCount);

//     if (currentIdx === slideCount || currentIdx === -slideCount) {
//         setTimeout(function() {
//             slides.classList.remove("animated");
//             slides.style.transform = "translateX(" + -slideWidth * slideCount + "px)";
//             currentIdx = 0;
//         }, 500);

//         setTimeout(function() {
//             slides.classList.add("animated");
//         }, 600);
//     }
// }