// Get all the keys
let keys = document.querySelectorAll('.keyboard_keys .keys');
let count=1;
let temp=0;
let check=false;
let timer; 
// Get the input field
let inputField = document.querySelector('.text');
function resetTimer() {
    clearTimeout(timer); // Clear the existing timer
    timer = setTimeout(() => {
        count=1; // Clear the input field after 5 seconds of inactivity
    }, 2000); // 5000 milliseconds = 5 seconds
}
// Add click event listener to each key
keys.forEach(key => {
    key.addEventListener('click', function() {
        let keyText = this.textContent;
        resetTimer();
        // Check if the clicked key is a number (1-9)
        if (!isNaN(keyText)) {
            // Append the number to the input field value
            if (keyText === '2') {
                if (temp == keyText) {
                    if (count === 1) {
                        inputField.value += 'a';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value += 'b';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value += 'c';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value += 'a';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    inputField.value += 'a';
                }
            }
            else if (keyText === '3') {
                if (temp == keyText) {
                    if (count === 1) {
                        inputField.value += 'd';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value += 'e';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value += 'f';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value += 'd';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    inputField.value += 'd';
                }
            }
            else if (keyText === '4') {
                if (temp == keyText) {
                    if (count === 1) {
                        inputField.value += 'g';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value += 'h';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value += 'i';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value += 'g';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    inputField.value += 'g';
                }
            }
            else if (keyText === '5') {
                if (temp == keyText) {
                    if (count === 1) {
                        inputField.value += 'j';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value += 'k';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value += 'l';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value += 'j';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    inputField.value += 'j';
                }
            }
            else if (keyText === '6') {
                if (temp == keyText) {
                    if (count === 1) {
                        inputField.value += 'm';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value += 'n';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value += 'o';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value += 'm';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    inputField.value += 'm';
                }
            }
            else if (keyText === '7') {
                if (temp == keyText) {
                    if (count === 1) {
                        inputField.value += 'p';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value += 'q';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value += 'r';
                        count = 4;
                    }
                    else if (count === 4) {
                        inputField.value += 's';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value += 'p';
                    }}
                else {
                    temp = keyText;
                    count = 2;
                    inputField.value += 'p';
                }
            }
            else if (keyText === '8') {
                if (temp == keyText) {
                    if (count === 1) {
                        inputField.value += 't';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value += 'u';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value += 'v';
                        count = 4;
                    }
                     else {
                        count = 2;
                        inputField.value += 't';
                    }}
                else {
                    temp = keyText;
                    count = 2;
                    inputField.value += 't';
                }
            }
        
            else if (keyText === '9') {
                if (temp == keyText) {
                    if (count === 1) {
                        inputField.value += 'w';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value += 'x';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value += 'y';
                        count = 4;
                    }
                    else if (count === 4) {
                        inputField.value += 'z';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value += 'w';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    inputField.value += 'w';
                }
            
            }
            else if(keyText==='1')
        {
            inputField.value += '1';
        }                 

    }
        else if (keyText === '*') {
            // Handle backspace
            inputField.value += keyText;
        }
        else if (keyText === '#') {
            // Handle special action for #
            inputField.value += keyText;
         }
         else if (keyText === 'backspace') {
            // Handle backspace
            inputField.value = inputField.value.slice(0, -1);
        } else if (keyText === 'Enter') {
            // Handle enter (for demonstration, you can perform any action you want)
            alert('Entered: ' + inputField.value);
            inputField.value = ''; // Clear the input field after processing enter
        }
    });
});
resetTimer();