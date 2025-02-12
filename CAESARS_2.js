const friend = "BRUTUS";
const shiftValue = 3;

//Step 1
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step 2
let firstInitial = friend[0]

const index = alphabet.indexOf(firstInitial.toLocaleLowerCase());

//Step 2 - Question 1
// ---- Because index starts at 0. 1 is the second index in an array.

let newIndex = index + shiftValue
let encryptedFirstInitial = alphabet[newIndex]

//Step 3 - Question 2
// ---- We could use the modulus operator. Anything beyond 26 will have a modulus value that can be indexed.


//Step 4
alphabet.length

//Step 5
newIndex = (index + shiftValue) % alphabet.length

//Step 6
let encryptedMessage = "EUXWXV"
let peekMessage = encryptedMessage.slice(0, 3)
