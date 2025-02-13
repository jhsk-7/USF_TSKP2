const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let locationStart = "";

// Step 1
if (emblemClue1 === "Eagle") {
    locationStart = "Forum";
}
else if (emblemClue1 === "Lion") {
    locationStart = "Colosseum";
}
else {
    locationStart = "Villa"
}
console.log(locationStart);


//Step 2
if (emblemClue2 === "Laurel" && locationStart === "Forum") {
    locationStart = locationStart + " of Augustus";
}
else if (emblemClue2 === Grapes || locationStart === "Villa") {
    locationStart = locationStart + " of Pompey";
}
console.log(locationStart)


//Step 3
switch (emblemClue3) {
    case 7: 
        console.log("North");
        break;
    case 3: 
        console.log("South")
        break;
    case 9: 
        console.log("East")
        break;
    case 4: 
        console.log("West")
        break;        
}

// Question 
// Because double equals tries to match regardless of type. Triple equals matches equality 
// more strictly by confirming the type matches.