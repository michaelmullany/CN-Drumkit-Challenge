/* Functionality for clicking */
/* Get a list of the div elements that represent each drum */
const drums = document.getElementsByClassName("drum");

/* Set variable for the original background color for drum divs, so can return after flash */
const originalBackgroundColor = drums[0].style.backgroundColor;

/* Add an event listener to each that plays a child audio element when clicked */
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", () => {
        playSound(drums[i]);
    });
}

/* Functionality for pressing a key */
/* Get a list of valid keys that can be pressed to make a sound */
const availableKeys = document.getElementsByClassName("drumKey");

document.addEventListener("keydown", (event) => {
    pressedKey = event.key.toUpperCase();
    selectedElement = selectElementFromKeyPress(pressedKey);
    
    if (selectedElement != undefined)
    {
        let drum = selectedElement.parentElement;
        playSound(drum);
    }
});

/* Identify the HTML element linked to the key that was pressed */
const selectElementFromKeyPress = (pressedKey) => {
    for (let i = 0; i < availableKeys.length; i++) {
        if (availableKeys[i].innerHTML == pressedKey) {
            return availableKeys[i];
        }
    }
}

/* Given a "drum", find a child audio element and play it */
const playSound = drum => {
    flashDrum(drum, "#778DA9", 500);
    let sound = drum.getElementsByTagName("audio")[0];
    sound.play();
}

function flashDrum(drum, color, flashLength) {
    drum.style.backgroundColor = color;
    setTimeout(() => {
        drum.style.backgroundColor = originalBackgroundColor;
    }, flashLength);
}
