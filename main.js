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

        profileAvatar.addEventListener("click", (e) => {


            let avatar1 = document.createElement("img");
            avatar1.classList.add("profileAvatar");
            profileSection.appendChild(avatar1);
            avatar1.src = item.avatar;

            rightBox.appendChild(avatar1);

            let boxRightContainer1 = document.createElement("div");
            let profileText1 = document.createElement("div");

            profileText1.classList.add("profileText");

            let media1 = document.createElement("div");
            media1.classList.add("medias")

            let profileName1 = document.createElement("p");
            profileName1.innerText = item.name;
            profileText1.appendChild(profileName1);


            let profilePosition1 = document.createElement("p");
            profilePosition1.innerText = item.position;

            profileText1.appendChild(profilePosition1);
            boxRightContainer1.appendChild(profileText1);

            let fburl1 = document.createElement("a");
            let fbImg1 = document.createElement("img");
            fburl1.href = item.media.facebook.url;
            fburl1.target = "_blank";
            fbImg1.src = item.media.facebook.img;
            fburl1.appendChild(fbImg1);
            media1.appendChild(fburl1)


            let twiturl1 = document.createElement("a");
            let twitImg1 = document.createElement("img");
            twiturl1.href = item.media.twiter.url;
            twiturl1.target = "_blank";
            twitImg1.src = item.media.twiter.img;
            twiturl1.appendChild(twitImg1);
            media1.appendChild(twiturl1);


            let insturl1 = document.createElement("a");
            let instImg1 = document.createElement("img");
            insturl1.href = item.media.instagram.url;
            insturl1.target = "_blank";
            instImg1.src = item.media.instagram.img;
            insturl1.appendChild(instImg1);
            media1.appendChild(insturl1);

            boxRightContainer1.appendChild(media1);
            rightBox.appendChild(boxRightContainer1);






            rightContainer.appendChild(rightBox);

            rightContainerImg.style.display = "none";

            rightBox.style.display = "grid";


            if (rightBox.firstChild) {
                rightBox.innerHTML = '';
                rightBox.appendChild(avatar1);
                rightBox.appendChild(boxRightContainer1);
                profileText1.style.textAlign = "center";
            }
        })


    })
}
createBox();


let data = [
    {
        txt: 'Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
        img: './imgs/third1.png',
        txt1: 'Shirline Dungey',
        txt2: 'Apple'

    },
    {
        txt: 'Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
        img: './imgs/third2.png',
        txt1: 'Hector Mariano',
        txt2: 'Google'

    },
    {
        txt: 'Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
        img: './imgs/third3.png',
        txt1: 'Tiontay Carroll',
        txt2: 'Facebook'

    },
    {
        txt: 'Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
        img: './imgs/third4.png',
        txt1: 'Hector Mariano',
        txt2: 'Google'

    },

    {
        txt: 'Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
        img: './imgs/third1.png',
        txt1: 'Dungey',
        txt2: 'Apple'

    },
    {
        txt: 'Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
        img: './imgs/third2.png',
        txt1: 'Shirline Dungey',
        txt2: 'Apple'

    },
    {
        txt: 'Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
        img: './imgs/third3.png',
        txt1: 'Shirline Dungey',
        txt2: 'Apple'

    },
    {
        txt: 'Quidam officiis similique indoctum platonem singulis ornatus nam maiestatis everti invenire intellegam, legendos consequuntur eu sit.',
        img: './imgs/third4.png',
        txt1: 'Shirline Dungey',
        txt2: 'Apple'

    },]


let cards = document.querySelector(".cards");

function creatCard() {
    data.map((item, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("card" + index);
        let cardText = document.createElement("p")
        let cardProfile = document.createElement("div");
        cardProfile.classList.add("card-profile");
        let cardAvatar = document.createElement("img");
        let cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");
        let cardInfoTitle = document.createElement("p");
        let cardInfoDescription = document.createElement("p");
        cardInfo.appendChild(cardInfoTitle);
        cardInfo.appendChild(cardInfoDescription);
        cardProfile.appendChild(cardAvatar);
        cardProfile.appendChild(cardInfo);
        card.appendChild(cardText);
        card.appendChild(cardProfile);


        cardText.innerText = item.txt;
        cardAvatar.src = item.img;
        cardInfoTitle.innerText = item.txt1;
        cardInfoDescription.innerText = item.txt2;

        cards.appendChild(card);

    })
}

creatCard()
var card = document.querySelectorAll('.card');
var arrayOfcard = Array.prototype.slice.call(card);
var cardCarouseling;
var screenSize;
setScreenSize();
var lengthOfcard;

function addClone() {
    var lastcard = cards.lastElementChild.cloneNode(true);
    lastcard.style.left = (-lengthOfcard) + "px";
    cards.insertBefore(lastcard, cards.firstChild);
}
// addClone();

function removeClone() {
    var firstcard = cards.firstElementChild;
    firstcard.parentNode.removeChild(firstcard);
}

function moveSlidesLeft() {
    var card = document.querySelectorAll('.card');
    var cardArray = Array.prototype.slice.call(card);
    cardArray = cardArray.reverse();
    var maxWidth = (cardArray.length - 1) * lengthOfcard;

    cardArray.forEach(function (el, i) {
        maxWidth -= lengthOfcard;
        el.style.left = maxWidth + "px";
    });
}

window.addEventListener('resize', setScreenSize);

function setScreenSize() {
    if (window.innerWidth >= 1024) {
        cardCarouseling = 4;
    } else if (window.innerWidth <= 768) {
        cardCarouseling = 2;
    } else {
        cardCarouseling = 1;
    }
    getScreenSize();
}

function getScreenSize() {
    var card = document.querySelectorAll('.card');
    var cardArray = Array.prototype.slice.call(card);
    lengthOfcard = (cards.offsetWidth / cardCarouseling);
    var initialWidth = -lengthOfcard;
    cardArray.forEach(function (el) {
        el.style.width = lengthOfcard + "px";
        el.style.left = initialWidth + "px";
        initialWidth += lengthOfcard;
    });
}
var moving = true;

function activateAgain() {
    var firstcard = cards.firstElementChild;
    moving = true;
    firstcard.removeEventListener('transitionend', activateAgain);
}


function moveLeft() {
    console.log('fdfd');
    if (moving) {
        moving = false;
        removeClone();
        var firstcard = cards.firstElementChild;
        firstcard.addEventListener('transitionend', replaceToEnd);
        moveSlidesLeft();
    }
}

let arrows = document.querySelector(".ourworks-btn");

arrows.addEventListener("click", () => setInterval(moveLeft, 1000));


function replaceToEnd() {
    var firstcard = cards.firstElementChild;
    firstcard.parentNode.removeChild(firstcard);
    cards.appendChild(firstcard);
    firstcard.style.left = ((arrayOfcard.length - 1) * lengthOfcard) + "px";
    addClone();
    moving = true;
    firstcard.removeEventListener('transitionend', replaceToEnd);
}








// section four clickebi 
let neoBank = document.querySelector(".section-four-cards1");
let ai = document.querySelector(".section-four-cards2")
let finTech = document.querySelector(".section-four-cards3");
let blokchain = document.querySelector(".section-four-cards4");


let allButton = document.querySelector(".all-btn");
let blokchainBtn = document.querySelector(".blokchain-btn");
let finTechBtn = document.querySelector(".fintech-btn");
let neoBankBtn = document.querySelector(".neobank-btn");
let aiBtn = document.querySelector(".ai-btn");


neoBankBtn.addEventListener("click", () => {
    neoBank.classList.toggle("section-four-block");
})

blokchainBtn.addEventListener("click", () => {
    blokchain.classList.toggle("section-four-block");
})

finTechBtn.addEventListener("click", () => {
    finTech.classList.toggle("section-four-block");
})
aiBtn.addEventListener("click", () => {
    ai.classList.toggle("section-four-block");
})

allButton.addEventListener("click", () => {
    neoBank.classList.toggle("section-four-block");
    blokchain.classList.toggle("section-four-block");
    finTech.classList.toggle("section-four-block");
    ai.classList.toggle("section-four-block");
})


neoBank.addEventListener("click", () => {
    neoBank.classList.toggle("section-four-cards-style")
})
ai.addEventListener("click", () => {
    ai.classList.toggle("section-four-cards-style")
})
finTech.addEventListener("click", () => {
    finTech.classList.toggle("section-four-cards-style")
})
blokchain.addEventListener("click", () => {
    blokchain.classList.toggle("section-four-cards-style")
})



let thePlan = [{
    img: './imgs/section-four-icon.png',
    title: 'Normal plan ',
    description: 'lorem deterruisset Hinc lorem Autem molestiae Mei mazim Feugait electram',
    price: '24$',
},

{
    img: './imgs/section-four-icon.png',
    title: 'Normal plan ',
    description: 'lorem deterruisset Hinc lorem Autem molestiae Mei mazim Feugait electram',
    price: '24$',
},
{
    img: './imgs/section-four-icon.png',
    title: 'Normal plan ',
    description: 'lorem deterruisset Hinc lorem Autem molestiae Mei mazim Feugait electram',
    price: '24$',
}
]

let sectionFive = document.querySelector(".section-five")
let sectionFiveCards = document.createElement("div")
sectionFiveCards.classList.add("sectionFiveCards")

sectionFive.appendChild(sectionFiveCards)


function creatCards() {
    thePlan.map((item) => {
        let card = document.createElement("div")
        card.classList.add("section-five-card")
        let cardIcon = document.createElement("img")
        cardIcon.classList.add("section-five-card-icon")
        card.appendChild(cardIcon)
        let cardTitle = document.createElement("div")
        cardTitle.classList.add("section-five-card-title")
        card.appendChild(cardTitle)
        let cardDescription = document.createElement("div")
        cardDescription.classList.add("section-five-card-description")
        card.appendChild(cardDescription)
        let cardPrice = document.createElement("div")
        cardPrice.classList.add("section-five-card-price")
        card.appendChild(cardPrice)

        sectionFiveCards.appendChild(card)


        cardIcon.src = item.img
        cardTitle.innerText = item.title
        cardDescription.innerText = item.description
        cardPrice.innerText = item.price

        card.addEventListener("click", () => {
            if (cardDescription.style.display == "block" && cardPrice.style.display == "block") {
                cardDescription.style.display = "none"
                cardPrice.style.display = "none"
            } else {
                cardDescription.style.display = "block"
                cardPrice.style.display = "block"
            }

        })







    })
}
creatCards()



