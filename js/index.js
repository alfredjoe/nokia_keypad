// Get all the keys
let keys = document.querySelectorAll('.keyboard_keys .keys');
let count=1;
let temp=0;
let temp2='';
let check=false;
let timer; 
let temp3 ='';
let password='ESCAPE ROOM';
// Get the input field
let inputField = document.querySelector('.text');
function resetTimer() {
    clearTimeout(timer); // Clear the existing timer
    timer = setTimeout(() => {
        count=1;
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
                    inputField.value=temp2+'E';
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
        else{
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
        }
        
        else if (keyText === '#') {
            // Handle special action for #
            check=true;
         }
         else if (keyText === 'backspace') {
            // Handle backspace
            inputField.value = inputField.value.slice(0, -1);
        } else if (keyText === 'Enter') {
            if(password==inputField.value){
                displayNotification('Successful!');
            }
            else{
                alert('Incorrect Password. Please try again.');
            }
        }
    }
    else{
if(password==inputField.value){
    displayNotification('Successful!');
}else{
    alert('Incorrect Password. Please try again.');
}
    }
    });
});
function displayNotification(message) {
    const notification = document.querySelector('.notification');
    const messageElement = notification.querySelector('.message');
    
    messageElement.textContent = message;
    notification.style.display = 'flex'; // Show the notification
    
    setTimeout(() => {
      notification.style.display = 'none'; // Hide the notification after 3 seconds
    }, 5000);
  }
  
  // Call displayNotification('Login Successful!') when login is successful
  
resetTimer();
