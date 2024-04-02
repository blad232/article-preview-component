"use strict";

const iconShare = document.querySelector(".icon-share");
const svgShare = document.getElementById("svg");
const creatorCard = document.querySelector(".creator__card");
const cardContact = document.querySelector(".card__contact");
const share = document.querySelector(".share");
iconShare.addEventListener("click", () => {
    iconShare.classList.toggle("--background-share");
    creatorCard.classList.toggle("--background-card-contact");
    cardContact.classList.toggle("hidden");
    share.classList.toggle("hidden");


})