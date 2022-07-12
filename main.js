let searchButton = document.querySelector(".search-btn")
let searchInput = document.querySelector(".search-input")

searchButton.addEventListener("click", function () {
    searchInput.classList.toggle("block")
})




let firstSections = document.querySelector(".first-section")
let next = document.querySelector(".next")
let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")




var images = ["./imgs/first.jpeg", "./imgs/second.png"]
var index = 0;
var iterations = 0;

var updateImage = function () {
    if (index >= images.length) {
        index = 0;
        iterations++;
    }
    firstSections.style.backgroundImage = 'url(' + images[index] + ')';
    if (iterations >= 2) {
        clearInterval(interval);
    } else {

        index++;
    }
}
updateImage();
var interval = setInterval(updateImage, 4000);


next.addEventListener("click", () => {

    if ((firstName.value.length) > 3 && (lastName.value.length) > 3) { firstSections.innerHTML = firstName.value + " " + lastName.value + " You Are Logged In!" }
    else (firstSections.innerHTML = "Must contain minimum 3 letter"
    )
    firstSections.style.fontSize = "60px"
    firstSections.style.color = "#219ebc"
})






