"use strict";

const iconShare = document.querySelector(".icon-share");
const svgShare = document.getElementById("svg");
const creatorCard = document.querySelector(".creator__card");
const cardContact = document.querySelector(".card__contact");
const share = document.querySelector(".share");
const triangle = document.querySelector(".triangle");
let x = window.matchMedia("(min-width:700px)");

iconShare.addEventListener("click", () => {
    if (window.innerWidth < 700) {
        iconShare.classList.toggle("--background-share");
        creatorCard.classList.toggle("--background-card-contact");
        cardContact.classList.toggle("hidden");
        share.classList.toggle("hidden");

    } else if (window.innerWidth > 700) {
        share.classList.toggle("hidden");
        iconShare.classList.toggle("--background-share");
        share.classList.toggle("--background-card-contact");
        triangle.classList.toggle("hidden");

    }


})