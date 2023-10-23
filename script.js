// const button = document.querySelector(".button");
// const radio = document.querySelector(".radio__input");

// if (radio.checked === true) {
//     button.addEventListener("click", () => {
//         document.querySelector(".hidden").classList.remove("hidden");
//         document.querySelector(".unsubmitted").classList.add("hidden");
//     });
// } else {
// }

const radio = document.getElementById("radio");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const hiddenElement = document.querySelector(".hidden");
    const unsubmittedElement = document.querySelector(".unsubmitted");

    hiddenElement.classList.remove("hidden");
    unsubmittedElement.classList.add("hidden");
});
