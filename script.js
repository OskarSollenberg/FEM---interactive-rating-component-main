let rating__btn = document.querySelectorAll(".rating-btn");
let btn = document.getElementById("btn");
let page__unsubmitted = document.querySelector(".page__unsubmitted");
let page__submitted = document.querySelector(".page__submitted"); 
let span = document.getElementById("rating"); 

for (let i = 0; i < rating__btn.length; i++) {
    rating__btn[i].addEventListener("click", () => {
        let rating = rating__btn[i].innerHTML;
        for (let i = 0; i < rating__btn.length; i++) {
            rating__btn[i].classList.contains("selected");
            rating__btn[i].classList.remove("selected");
        }
        
        rating__btn[i].classList.add("selected");
        btn.addEventListener("click", () => {
            page__unsubmitted.style.display = "none";
            page__submitted.style.display = "block";
            span.innerHTML = rating;
        });
    });
};