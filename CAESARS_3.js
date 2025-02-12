//Step 1
const randDecimal = Math.random(0, 1)

//Step 2
const range = 33 - 3 + 1

//Step 2 - Question 1
// ---- We added 1 because we want to include 33. To do that, we need to go 1 beyond 33 to make sure it is included in the index.

//Step 3
const randNumber = randDecimal * range

//Step 3 - Question 2
// ---- A random decimal, times the range, will give us a random number that falls within our range.

//Step 4 
const randInt = Math.floor(randNumber)

//Step 4 - Question 3
// ---- With Math.round, there is a chance you could get 32, which is outside of our index. We need to round down, which would possibly capture all values in our index.

//Step 5
const shiftValue = randInt + 3;

//Step 5 - Question 4
// ---- Our index is between 3 and 33. Adding three will make sure that any number randomly calculate is at least 3.