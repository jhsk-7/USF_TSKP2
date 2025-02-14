const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

//Step 1
guests.unshift('BRUTUS')

//Question 1
// You can show the array. Or you can check the first element of the array
// by doing guests[0]

//Step 2
guests.push("AUGUSTUS", "LUCIA")

//Step 3
guests.includes("SPARTACUS")

//Question 2
// The index would be -1

//Step 4
guests.splice(3,1)

//Step 5
guests.slice(0,3)

//Step 6
guestHonored = guests.slice(0,1)
guestsAllOther = guests.slice(1).sort()
guestsList = guestHonored.concat(guestsAllOther)

