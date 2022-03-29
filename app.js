const availableKeys = document.getElementsByClassName("drumKey");

/* Functionality for pressing a key */
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

/* Given a "drum", find a child that is an audio element and play it */
const playSound = drum => {
    let sound = drum.getElementsByTagName("audio")[0];
    sound.play();
}