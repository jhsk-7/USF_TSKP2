//Technical Skills Project 2, Exercise 9

const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const inV = 2

//Function to preserve the case of the letter 
function checkCase (lit) {
    if (lit === lit.toLowerCase()) {
        return true
    }
    else {
        return false
    }
}

//Function to index and encrypte a letter.
function encryptLetter (letter, shiftValue) {
    let origLetIdx = alphabet.indexOf(letter.toLowerCase())
    let getNewIdx = alphabet[(origLetIdx + shiftValue) % alphabet.length]
    return getNewIdx
}

//Create an encryption for an entire message.
function encryptMessage (word, shiftValue) {
    let message = ""
    for (let letter of word) {
        //Check the case of the letter.
        let case1 = checkCase(letter)

        // If it's not an alphabet letter, don't do anything. Just add it to the message.
        if ((alphabet.indexOf(letter.toLowerCase()) + 1) == false) {
            message += letter;
        }
        else {
            if (case1 == true) {
                message += encryptLetter(letter, shiftValue)
            }
            else {
                message += encryptLetter(letter, shiftValue).toUpperCase()   
            } 
        }
    }
    return message
}

//Add a random character after every two characters. the insertValue is set to 2.
function doubleEncrypt (message, insertValue) {
    let count = 1
    phrase = ""

    for (let i of message) {    
        //Create a random letter.   
        let randLet = alphabet[Math.floor(Math.random()*alphabet.length)]

        //Check if we've passed two characters. if so, insert a random character.
        if (count == insertValue) {
            phrase += i + randLet
            count = 0 
        }
        else {
            phrase += i
        }
        count+=1
        }

    return phrase
}


//Remove the random characters. 
function doubleDecrypt (message1, deleteValue) {
    let count = 0
    phrase = ""
    
    for (let i of message1) {
        if (count == deleteValue) {
            count = 0 
        }
        else {
            phrase += i
            count+=1
        }
        }
    return phrase
}

//decrypt a letter.
function decryptLetter (encryptedLetter, shiftValue) {
    let encLetIdx = alphabet.indexOf(encryptedLetter.toLowerCase())

    if ((encLetIdx - shiftValue) < 0) { 
        return alphabet[(encLetIdx - shiftValue) % alphabet.length + alphabet.length]
    }
    else {
        return alphabet[encLetIdx - (shiftValue % alphabet.length)]
    }
} 

//decrypt a message.
function decryptMessage (word,shiftValue) {
    let message1 = ""
    
    //Loop thru each letter. decrypt the letter.
    for (let letter of word) {
        //Check case of letter.
        let case2 = checkCase(letter)
    
        //Check if it's a letter. If not, just add it to the phrase.
        if ((alphabet.indexOf(letter.toLowerCase()) + 1) == false) {
            message1 += letter
        }
        else {
            if (case2 == true) {
                message1 += decryptLetter(letter, shiftValue % alphabet.length)
            }
            else {
                message1 += decryptLetter(letter, shiftValue % alphabet.length).toUpperCase()
            } 
        }
    }
    return message1
}

//Full encryption
function encrypt (message, shiftValue) { 
    let enOne = encryptMessage(message,shiftValue);
    let enTwo = doubleEncrypt(enOne,inV)
    return enTwo
}

//Full decryption
function decrypt (message, shiftValue) {
    let enOne = doubleDecrypt(message,inV)
    let enTwo = decryptMessage(enOne,shiftValue);
    return enTwo
}