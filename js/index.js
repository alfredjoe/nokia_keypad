// Get all the keys
let keys = document.querySelectorAll('.keyboard_keys .keys');
let count=1;
let temp=0;
let temp2='';
let check=false;
let timer; 
let count_1=0;
let temp3 ='';

let password='instinct';
// Get the input field
let inputField = document.querySelector('.text');
function resetTimer() {
    clearTimeout(timer); // Clear the existing timer
    timer = setTimeout(() => {
        count=1;
        count_1=0;
        check=false; 
        temp2=inputField.value;// Clear the input field after 5 seconds of inactivity
    }, 1000); // 5000 milliseconds = 5 seconds
}
inputField.disabled = true;
// Add click event listener to each key
keys.forEach(key => {
    key.addEventListener('click', function() {
        let keyText = this.textContent;
        resetTimer();
        playTouchSoundAndVibrate();
        if(inputField.value.length < 14){
        // Check if the clicked key is a number (1-9)
        if (!isNaN(keyText)) {
            
        if(check==true||temp3==keyText){
            if (keyText === '2') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'A';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'B';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'C';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'A';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    check=false;
                    temp3=keyText;
                    temp2=inputField.value;
                    inputField.value=temp2+'A';
                }
            }
            else if (keyText === '3') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'D';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'E';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'F';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'D';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    check=false;
                    temp3=keyText;
                    inputField.value=temp2+'D';
                }
            }
            else if (keyText === '4') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'G';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'H';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'I';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'G';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    check=false;
                    temp3=keyText;
                    inputField.value=temp2+'G';
                }
            }
            else if (keyText === '5') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'J';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'K';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'L';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'J';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    check=false;
                    temp3=keyText;
                    inputField.value=temp2+'J';
                }
            }
            else if (keyText === '6') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'M';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'N';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'O';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'M';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    check=false;
                    temp3=keyText;
                    inputField.value=temp2+'M';
                }
            }
            else if (keyText === '7') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'P';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'Q';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'R';
                        count = 4;
                    } else if (count === 4) {
                        inputField.value=temp2+'S';
                        count = 1;
                    }
                    else {
                        count = 2;
                        inputField.value=temp2+'P';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    check=false;
                    temp3=keyText;
                    inputField.value=temp2+'P';
                }
            }
            else if (keyText === '8') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'T';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'U';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'V';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'T';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    check=false;
                    temp3=keyText;
                    inputField.value=temp2+'T';
                }
            }
            else if (keyText === '9') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'W';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'X';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'Y';
                        count = 4;
                    }  else if (count === 4) {
                        inputField.value=temp2+'Z';
                        count = 1;
                    }else {
                        count = 2;
                        inputField.value=temp2+'W';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    check=false;
                    temp3=keyText;
                    inputField.value=temp2+'W';
                }
            }
            else if(keyText==='1')
        {
            inputField.value += '1';
            }   else if(keyText==='0')
        {
            inputField.value += '0';
        }
    }
        else if(check===false&&temp3!=keyText){
            // Append the number to the input field value
            if (keyText === '2') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'a';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'b';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'c';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'a';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    inputField.value=temp2+'a';
                }
            }
            else if (keyText === '3') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'d';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'e';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'f';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'d';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    inputField.value=temp2+'e';
                }
            }
            else if (keyText === '4') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'g';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'h';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'i';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'g';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    inputField.value=temp2+'g';
                }
            }
            else if (keyText === '5') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'j';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'k';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'l';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'j';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    inputField.value=temp2+'j';
                }
            }
            else if (keyText === '6') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'m';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'n';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'o';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'m';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    inputField.value=temp2+'m';
                }
            }
            else if (keyText === '7') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'p';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'q';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'r';
                        count = 4;
                    } else if (count === 4) {
                        inputField.value=temp2+'s';
                        count = 1;
                    }
                     else {
                        count = 2;
                        inputField.value=temp2+'p';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    inputField.value=temp2+'p';
                }
            }
            else if (keyText === '8') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'t';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'u';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'v';
                        count = 1;
                    } else {
                        count = 2;
                        inputField.value=temp2+'t';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    inputField.value=temp2+'t';
                }
            }
            else if (keyText === '9') {
                if (temp == keyText) {
                    if (count === 1) {
                        
                        inputField.value=temp2+'w';
                        count = 2;
                    } else if (count === 2) {
                        inputField.value=temp2+'x';
                        count = 3;
                    } else if (count === 3) {
                        inputField.value=temp2+'y';
                        count = 4;
                    }  else if (count === 4) {
                        inputField.value=temp2+'z';
                        count = 1;
                    }else {
                        count = 2;
                        inputField.value=temp2+'w';
                    }
                } else {
                    temp = keyText;
                    count = 2;
                    temp2=inputField.value;
                    inputField.value=temp2+'w';
                }
            }
            else if(keyText==='1')
        {
            inputField.value += '1';
            } else if(keyText==='0')
        {
            inputField.value += '0';
        }                

    }
    }
        else if (keyText === '_') {
            // Handle backspace
            inputField.value += ' ';
            check=false; 
             temp3=='';
        }
        
        else if (keyText === '#') {
            // Handle special action for #
            if(count_1<1){
            check=true;
                count_1++;
            }
            else{
            check=false;
                count_1--;
            }
         }
         else if (keyText === 'backspace') {
            // Handle backspace
            inputField.value = inputField.value.slice(0, -1);
             count=1;
            check=false; 
             temp3=='';
        temp2=inputField.value;
        } else if (keyText === 'Enter') {
            if(password==inputField.value){
            inputField.style.color = 'green';
                inputField.value='***ACCESS GRANTED***';
                 granted();
                blinkAndClear_1(inputField, 5); 

            }
            else{
            
                inputField.value='***ACCESS DENIED***';
                denied();
                blinkAndClear_2(inputField, 5); 

                
            }
        }
    }
    else{
if(password==inputField.value){
    inputField.style.color = 'green';
    inputField.value='***ACCESS GRANTED***';
     granted();
    blinkAndClear_1(inputField, 5); 

}else{
    inputField.value='***ACCESS DENIED***';
    denied();
   blinkAndClear_2(inputField, 5); 
}
    }
    });
});
function blinkAndClear_1(element, times) {
    if (times > 0) {
        element.value ='***ACCESS GRANTED***' ; 
        setTimeout(() => {
           
            element.value = ''; 
            setTimeout(() => {
                blinkAndClear_1(element, times - 1); // Recursively call blinkAndClear with reduced times
            }, 200); // Adjust delay between blinks (200 milliseconds in this example)
        }, 200); // Adjust blink duration (200 milliseconds in this example)
    } else {
        setTimeout(() => {
            element.value = '';
            inputField.style.color = 'red';// Clear the input field after blinking
        }, 500); // Adjust delay before clearing input field (500 milliseconds in this example)
    }
}
function blinkAndClear_2(element, times) {
    if (times > 0) {
        element.value ='***ACCESS DENIED***' ; 
        setTimeout(() => {
           
            element.value = ''; 
            setTimeout(() => {
                blinkAndClear_2(element, times - 1); // Recursively call blinkAndClear with reduced times
            }, 200); // Adjust delay between blinks (200 milliseconds in this example)
        }, 200); // Adjust blink duration (200 milliseconds in this example)
    } else {
        setTimeout(() => {
            element.value = ''; // Clear the input field after blinking
        }, 500); // Adjust delay before clearing input field (500 milliseconds in this example)
    }
}
window.addEventListener('load', function() {
    inputField.value = '';
});
function playTouchSoundAndVibrate() {
    // Create an Audio object with the path to the sound file
    let audio = new Audio('/to/touch-sound.wav');
    // Play the sound
    audio.play();
    // Check if the device supports vibration
    if ("vibrate" in navigator) {
      // Vibrate for 100 milliseconds
      navigator.vibrate(100);
    }
  }
function granted(){
let audio_1 = new Audio('/to/granted.mp3');
    audio_1.play();
}
function denied(){
let audio_2 = new Audio('/to/denied_1.mp3');
    audio_2.play();
}
  // Call displayNotification('Login Successful!') when login is successful
  
resetTimer();
