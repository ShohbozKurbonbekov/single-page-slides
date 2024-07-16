// Choosing Elements
const slidesContainer = document.querySelector('#slidesContainer');

// declaring a variable
let slideNumberVar = 0;

// creating Slides Elements
const createSlide = function () {
  let searchEL = slides.find(el => el.number === slideNumberVar + 1);

  const html = `
          <div class="slide-item" id="slide-${searchEL.number}">
                <div class="quote-sign">
                    <i class="fas fa-quote-right"></i>
                </div>
                <img  class="slide_img" src="${searchEL.image}"/>
                <div>
                    <h2 class="slide_name">
                        ${searchEL.sliderName}
                    </h2>
                    <p class="slide_position">
                        ${searchEL.jobType}
                    </p>
                </div>
                <p class="slide_description">${searchEL.description}</p>
                <div class="slide_btns">
                    <i class="bi bi-chevron-left"></i>
                    <i class="bi bi-chevron-right"></i>
                </div>
                <button  class="randomChooseBtn" type="button">
                    Suprise Me 
                </button>
          </div>
          `;
  slidesContainer.innerHTML = '';
  slidesContainer.insertAdjacentHTML('beforeend', html);
};
createSlide();

// FUNCTIONS
// Moving to the next slide
const nextSlide = function () {
  //prettier-ignore-start

  //prettier-ignore-end
  slideNumberVar++;
  if (slideNumberVar < slides.length) {
    createSlide();
  } else {
    slideNumberVar = 0;
    createSlide();
  }
};

// moving to the previous slide
const previousSlide = function () {
  slideNumberVar--;
  if (slideNumberVar >= 0) {
    createSlide();
  } else {
    slideNumberVar = slides.length - 1;
    createSlide();
  }
};

// show a random slide
const supriseMeBtn = function () {
  slideNumberVar = Math.floor(Math.random() * slides.length);
  createSlide();
};

// Event Listeners
slidesContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('bi-chevron-right')) nextSlide();
  else if (e.target.classList.contains('bi-chevron-left')) previousSlide();
  else if (e.target.classList.contains('randomChooseBtn')) supriseMeBtn();
});
