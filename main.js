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
    if (iterations >= 20) {
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

let rightContainerImg = document.getElementById("right-container-image")
let rightContainer = document.querySelector(".right-container")
let profileSection = document.querySelector(".profile-section")
let secondSection = document.querySelector(".second-section")
let leftSection = document.querySelector(".left-container")

let rightBox = document.createElement("div");
rightBox.classList.add("right-box");

rightContainer.appendChild(rightBox)



secondSection.appendChild(leftSection)
leftSection.appendChild(profileSection)



let profiles = [
    {
        name: "Sebastian Bennett", position: "Founder", avatar: "./imgs/oval.png",
        media: {
            facebook: { img: "./imgs/facebook.png", url: "https://www.facebook.com/" },
            twiter: { img: "./imgs/twitter.png", url: "https://twitter.com/?lang=en" },
            instagram: { img: "./imgs/instagram.png", url: "https://www.instagram.com/" }
        }
    },
    {
        name: "Graham Griffiths", position: "Manager", avatar: "./imgs/oval1.png",
        media: {
            facebook: { img: "./imgs/facebook.png", url: "https://www.facebook.com/" },
            twiter: { img: "./imgs/twitter.png", url: "https://twitter.com/?lang=en" },
            instagram: { img: "./imgs/instagram.png", url: "https://www.instagram.com/" }
        }
    },
    {
        name: "Monica Böttger", position: "Designer", avatar: "./imgs/oval2.png",
        media: {
            facebook: { img: "./imgs/facebook.png", url: "https://www.facebook.com/" },
            twiter: { img: "./imgs/twitter.png", url: "https://twitter.com/?lang=en" },
            instagram: { img: "./imgs/instagram.png", url: "https://www.instagram.com/" }
        }
    },
    {
        name: "Leon Hunt", position: "Developer", avatar: "./imgs/oval3.png", media: {
            facebook: { img: "./imgs/facebook.png", url: "https://www.facebook.com/" },
            twiter: { img: "./imgs/twitter.png", url: "https://twitter.com/?lang=en" },
            instagram: { img: "./imgs/instagram.png", url: "https://www.instagram.com/" }
        }
    }]


function createBox() {
    profiles.map((item) => {


        let box = document.createElement("div");
        box.classList.add("box");



        let boxRightContainer = document.createElement("div");


        let profileAvatar = document.createElement("img");
        profileAvatar.classList.add("profileAvatar");
        profileSection.appendChild(box);
        profileAvatar.src = item.avatar;
        box.appendChild(profileAvatar);

        box.appendChild(boxRightContainer);

        let profileText = document.createElement("div");
        profileText.classList.add("profileText");
        boxRightContainer.appendChild(profileText);

        let profileName = document.createElement("p");
        profileName.innerText = item.name;
        profileText.appendChild(profileName);

        let profilePosition = document.createElement("p");
        profilePosition.innerText = item.position;
        profileText.appendChild(profilePosition);


        let medias = document.createElement("div");
        medias.classList.add("medias")


        let fburl = document.createElement("a");
        let fbImg = document.createElement("img");
        fburl.href = item.media.facebook.url;
        fburl.target = "_blank";
        fbImg.src = item.media.facebook.img;
        fburl.appendChild(fbImg);
        medias.appendChild(fburl);



        let twiturl = document.createElement("a");
        let twitImg = document.createElement("img");
        twiturl.href = item.media.twiter.url;
        twiturl.target = "_blank";
        twitImg.src = item.media.twiter.img;
        twiturl.appendChild(twitImg);
        medias.appendChild(twiturl);

        let insturl = document.createElement("a");
        let instImg = document.createElement("img");
        insturl.href = item.media.instagram.url;
        insturl.target = "_blank";
        instImg.src = item.media.instagram.img;
        insturl.appendChild(instImg);
        medias.appendChild(insturl);



        boxRightContainer.appendChild(medias);

        // rightBox.appendChild(profileAvatar);
        // rightBox.appendChild(boxRightContainer);
        // rightContainer.appendChild(rightBox); 

        profileAvatar.addEventListener("click", () => {

            let avatar1 = document.createElement("img");
            avatar1.classList.add("profileAvatar");
            profileSection.appendChild(avatar1);
            avatar1.src = item.avatar;

            rightBox.appendChild(avatar1);

            let profileName1 = document.createElement("p");
            profileName1.innerText = item.name;
            profileText.appendChild(profileName1);
            rightBox.appendChild(profileName1);


            let profilePosition1 = document.createElement("p");
            profilePosition1.innerText = item.position;
            profileText.appendChild(profilePosition1);
            rightBox.appendChild(profilePosition1);

            let fburl1 = document.createElement("a");
            let fbImg1 = document.createElement("img");
            fburl1.href = item.media.facebook.url;
            fburl1.target = "_blank";
            fbImg1.src = item.media.facebook.img;
            fburl1.appendChild(fbImg1);
            rightBox.appendChild(fburl1)


            let twiturl1 = document.createElement("a");
            let twitImg1 = document.createElement("img");
            twiturl1.href = item.media.twiter.url;
            twiturl1.target = "_blank";
            twitImg1.src = item.media.twiter.img;
            twiturl1.appendChild(twitImg1);
            rightBox.appendChild(twiturl1);


            let insturl1 = document.createElement("a");
            let instImg1 = document.createElement("img");
            insturl1.href = item.media.instagram.url;
            insturl1.target = "_blank";
            instImg1.src = item.media.instagram.img;
            insturl1.appendChild(instImg1);
            rightBox.appendChild(insturl1);





            rightContainer.appendChild(rightBox);

            rightContainerImg.style.display = "none";

            rightBox.style.display = "flex";
        })


    })
}
createBox();








// profileAvatar.addEventListener("click", () => {
//     