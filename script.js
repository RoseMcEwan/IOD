 function rollDice() {   
        let diceInput = document.getElementById("diceValue");   // get the input element
        let diceValue = diceInput.value;                        // get the value of the input element
        let diceRandomValue = Math.random() * diceValue;              // generate a random number between 0 and the value of the input element
        
        let fullDiceNumber = Math.ceil(diceRandomValue);              // round the random number up to the nearest integer
        
        console.log(fullDiceNumber);

        let output = document.getElementById("Output");              // get the output element
       output.innerText = fullDiceNumber;                                      // set the text of the output element to the random number
    }
       let button = document.getElementById("rollDice");
       button.addEventListener("click", rollDice);      // when the button is clicked, call the rollDice function
    