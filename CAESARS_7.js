const friend = "BRUTUS"
const shiftValue = 3;

//Step 1
const alphabet = "abcdefghijklmnopqrstuvwxyz";


//Step 2
let encryptedName = "";

for (let char of friend.toLowerCase()) {
    let charIndex = alphabet.indexOf(char);
    let charEncryptIndex = (charIndex + shiftValue) % alphabet.length;
    encryptedName = (encryptedName + alphabet[charEncryptIndex]).toUpperCase()
}
console.log(encryptedName)


//Question 1 
// ---- A for loop automatically iterates over each item and performs the same
// calculation. Otherwise, you would have to find the index of each letter, and
// recreate the calculation over and over again.

//Question 2
// ---- We need to  find the modulus value to "wrap around" the alphabet when a 
// letter's shifted value is outside of the index of the alphabet. To know the 
// value of our right operand should be in our modulus operation, we call the 
// alphabet.length property to get the length of the alphabet.