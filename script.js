let rating__btn = document.querySelectorAll(".rating-btn");
let btn = document.getElementById("btn");
let page__unsubmitted = document.querySelector(".page__unsubmitted"); // evalutation div //
let page__submitted = document.querySelector(".page__submitted"); // thank you div //
let span = document.getElementById("rating"); // empty span where the user selected rating will be displayed//

// Looping through all the number divs//
for (let i = 0; i < rating__btn.length; i++) {
    // Listening for a click event on each number div //
    rating__btn[i].addEventListener("click", () => {
        // getting the clicked number value property from 1 to 5//
        let rating = rating__btn[i].innerHTML;

        // looping through the numbers to check for a previously selected rating and removing if such. //
        // Necessary in order to have only one rating selected at a time //
        for (let i = 0; i < rating__btn.length; i++) {
            rating__btn[i].classList.contains("selected");
            rating__btn[i].classList.remove("selected");
        }

        // add the selected class which highlights the selected rating //
        rating__btn[i].classList.add("selected");

        // listening for a click on the btn in order to hide the current div and display the Thank You div with the chosen rating in the span //
        btn.addEventListener("click", () => {
            page__unsubmitted.style.display = "none";
            page__submitted.style.display = "block";
            span.innerHTML = rating;
        });
    });
}
