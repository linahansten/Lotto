function toggleNumber(el) {
    //Check if number is already "locked"
    if (el.classList == "locked") {
        //Remove class to element
        el.classList.remove("locked");
    } else {
        //Get parent element (div) of el (button) and get all elements
        const lockedElements = el.parentElement.querySelectorAll(".locked");

        //Check if locked elements is less than 7
        if (lockedElements.length < 7)
            //If not, lock number by adding class to element
            el.classList.add("locked");

        console.log("locked", el.id);
    };

};

function generateNumbers(el) {
    // 1. Check if any numbers are locked
    const lockedElements = el.parentElement.querySelectorAll(".locked");

    //Check if locked elements is less than 7
    if (lockedElements.length < 7) {
        for (let i = lockedElements.length; i < 7;) {
            //Generate random number between 1-40
            const rNumber = Math.floor(Math.random() * 40) + 1;

            //Get button with the random number
            const button = document.getElementById(el.parentElement.id + "-" + rNumber
            ); // 2-16
            console.log(button)
            //If NOT locked , add locked class
            if (button.classList != "locked") {
                button.classList.add("locked");
                i++
            };
        };
    };

};
function init() {
    const leftSection = document.querySelector("#left");

    // Create 12 divs that holds the numbers
    for (let i = 1; i < 13; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = i;

        //Create 400 buttons inside every div
        for (let i = 1; i < 41; i++) {
            const newButton = document.createElement("button");

            //Set id on button
            newButton.id = newDiv.id + "-" + i; // rad 4-27 nummer
            //Set text on button
            newButton.innerText = i;
            //Set ononclick on button
            newButton.onclick = function () {
                toggleNumber(this);
            }

            //Add button inside div
            newDiv.appendChild(newButton);
        }

        //Add row name A, B, C...

        const newLetter = document.createElement("p")

        if (i == 1) {
            newLetter.innerText = "A"
        } else if (i == 2) {
            newLetter.innerText = "B"
        } else if (i == 3) {
            newLetter.innerText = "C"
        } else if (i == 4) {
            newLetter.innerText = "D"
        } else if (i == 5) {
            newLetter.innerText = "E"
        } else if (i == 6) {
            newLetter.innerText = "F"
        } else if (i == 7) {
            newLetter.innerText = "G"
        } else if (i == 8) {
            newLetter.innerText = "H"
        } else if (i == 9) {
            newLetter.innerText = "I"
        } else if (i == 10) {
            newLetter.innerText = "J"
        } else if (i == 11) {
            newLetter.innerText = "K"
        } else if (i == 12) {
            newLetter.innerText = "L"
        }

        newDiv.appendChild(newLetter)

        //Add "pika"-button to div

        const pikaButton = document.createElement("button");
        pikaButton.innerText = "P";

        pikaButton.onclick = function () {
            generateNumbers(this);
        };

        //Add button inside div
        newDiv.appendChild(pikaButton);

        //Add div (with buttons) to left section
        leftSection.appendChild(newDiv);
    };

}
//Ropar på att functionen ska starta
init();