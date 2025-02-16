const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 1
function encryptLetter (letter, shiftValue) {
    let origLetIdx = alphabet.indexOf(letter.toLowerCase())
    let getNewIdx = alphabet[(origLetIdx + shiftValue) % alphabet.length]
    return getNewIdx
}

//Step 2
function encryptMessage (word, shiftValue) {
    let message = ""
    for (let letter of word) {
        message += encryptLetter(letter, shiftValue).toUpperCase()
    }
    return message
}

//Step 3
function decryptLetter (encryptedLetter, shiftValue) {
    let encLetIdx = alphabet.indexOf(encryptedLetter.toLowerCase())
    if ((encLetIdx - shiftValue) < 0) { 
        return alphabet[(encLetIdx - shiftValue) % alphabet.length + alphabet.length]
    }
    else {
        return alphabet[encLetIdx - shiftValue]
    }
} 

//Step 4
function decryptMessage (word,shiftValue) {
    let message = ""
    for (let letter of word) {
        message += decryptLetter(letter, shiftValue).toUpperCase()
    }
    return message
}

//Question 
// ---- Yes. Because the first function will shift the letters to the rights. The second funciton 
// will shift the letters to the left by the same count.

/* console.log(encryptMessage(friend,shiftValue))
console.log(decryptMessage(encryptMessage(friend,shiftValue), shiftValue)) */
