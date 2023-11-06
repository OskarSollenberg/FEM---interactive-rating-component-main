// BUTTONS
const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".btn");

// PAGES
const page = document.querySelector(".page");
const pageSubmitted = document.querySelector(".page__submitted");

// RATING AFTER SUBMITTIONG
const rating = document.querySelector("#rating");

addClass = (element, className) => {
    element.classList.add(className);
};
removeClass = (element, className) => {
    element.classList.remove(className);
};

for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener("click", () => {
        //
        //
        // REMOVE CLASS TO PREVOUSLY SELECTED BTN
        ratingBtn.forEach((btn) => {
            btn.classList.remove("btn--selected");
        });
        //
        //
        // ADD CLASS TO ACTIVE BTN
        addClass(ratingBtn[i], "btn--selected");

        for (let i = 0; i < ratingBtn.length; i++) {
            if (ratingBtn[i].classList.contains("btn--selected")) {
                submitBtn.addEventListener("click", () => {
                    //
                    //
                    // GO TO SUBMISSION-PAGE
                    addClass(page, "page--not-visable");
                    removeClass(pageSubmitted, "page--not-visable");
                    rating.innerHTML = i + 1;
                });
            }
        }
    });
}
