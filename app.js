'use strict';

const theScreen = window;

var monticelloButton = document.getElementById("monticello-button");
var monticelloAddressInfo = document.getElementById("monticello-content");
var warrenAddressInfo = document.getElementById("warren-content");
var warrenButton = document.getElementById("warren-button");

var modalPopupWindow = document.getElementById("modal-address-info");
var closePopup = document.getElementById("close-button");

var houseIcon = document.getElementById("house-icon");
var realEstateBar = document.getElementById("real-estate");
var familyIcon = document.getElementById("family-icon");
var estatePlanningBar = document.getElementById("family");
var probateIcon = document.getElementById("will-icon");
var probateBar = document.getElementById("will");
var generalIcon = document.getElementById("general-law-icon");
var generalBar = document.getElementById("general-law");

var houseBar = document.getElementById("real-estate");
var houseContent = document.getElementById("real-estate-content");
var estateBar = document.getElementById("family");
var estateContent = document.getElementById("estate-planning-content");
var probateBar = document.getElementById("will"); 
var probateContent = document.getElementById("probate-content");
var generalBar = document.getElementById("general-law");
var generalContent = document.getElementById("general-content");


monticelloButton.onclick = function() {
    modalPopupWindow.style.display = "block";

    //make sure the undesired texts are turned off
    var possibleText = document.querySelectorAll('.pop-up-content');
    for (var i = 0; i < possibleText.length; i++) {
        possibleText[i].style.display = "none";
    }

    //turn on the one we want
    monticelloAddressInfo.style.display = "block";

}

closePopup.onclick = function() {
    modalPopupWindow.style.display = "none";

    var possibleText = document.querySelectorAll('.pop-up-content');
    for (var i = 0; i < possibleText.length; i++) {
        possibleText[i].style.display = "none";
    }
    
}

warrenButton.onclick = function() {
    modalPopupWindow.style.display = "block";

    var possibleText = document.querySelectorAll('.pop-up-content');
    for (var i = 0; i < possibleText.length; i++) {
        possibleText[i].style.display = "none";
    }
    
    warrenAddressInfo.style.display = "block";
    
}

houseBar.onclick = function() {
    modalPopupWindow.style.display = "block";
    
    var possibleText = document.querySelectorAll('.pop-up-content');
    for (var i = 0; i < possibleText.length; i++) {
        possibleText[i].style.display = "none";
    }

    houseContent.style.display = "block";
    
}

estateBar.onclick = function () {
    modalPopupWindow.style.display = "block";
    
    var possibleText = document.querySelectorAll('.pop-up-content');
    for (var i = 0; i < possibleText.length; i++) {
        possibleText[i].style.display = "none";
    }

    estateContent.style.display = "block";
    
}

probateBar.onclick = function () {
    modalPopupWindow.style.display = "block";
    
    var possibleText = document.querySelectorAll('.pop-up-content');
    for (var i = 0; i < possibleText.length; i++) {
        possibleText[i].style.display = "none";
    }

    probateContent.style.display = "block";
    
}

generalBar.onclick = function () {
    modalPopupWindow.style.display = "block";
    
    var possibleText = document.querySelectorAll('.pop-up-content');
    for (var i = 0; i < possibleText.length; i++) {
        possibleText[i].style.display = "none";
    }

    generalContent.style.display = "block";
}


realEstateBar.onfocus = function() {
    houseIcon.src = "house_lit.webp";
}

realEstateBar.onmouseover = function() {
    houseIcon.src = "house_lit.webp";
}

realEstateBar.onmouseleave = function () {
    houseIcon.src = "house_initial.webp";
}

estatePlanningBar.onfocus = function () {
    familyIcon.src = "family_lit.webp";
}

estatePlanningBar.onmouseover = function () {
    familyIcon.src = "family_lit.webp";
}

estatePlanningBar.onmouseleave = function () {
    familyIcon.src = "family_initial.webp";
}

probateBar.onfocus = function () {
    probateIcon.src = "will_lit.webp";
}

probateBar.onmouseover = function () {
    probateIcon.src = "will_lit.webp";
}

probateBar.onmouseleave = function () {
    probateIcon.src = "will_initial.webp";
}

generalBar.onfocus = function () {
    generalIcon.src = "general_lit.webp";
}

generalBar.onmouseover = function () {
    generalIcon.src = "general_lit.webp";
}

generalBar.onmouseleave = function () {
    generalIcon.src = "general_initial.webp";
}






/*saved in case I want to add background content later 
const backgroundCanvas = document.getElementById("background-art");
const backgroundArt = backgroundCanvas.getContext("2d");

function ReDrawArt() {
    theScreen.addEventListener('resize', ResizeBackgroundArt, false);
    ResizeBackgroundArt();
}

function ResizeBackgroundArt() {
    backgroundCanvas.width = theScreen.innerWidth;
    backgroundCanvas.height = theScreen.innerHeight;
    DrawBackgroundVectorArt();
}

function DrawBackgroundVectorArt() {

}

ReDrawArt();

*/