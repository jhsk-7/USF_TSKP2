
const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };

//Step 1
guests["BRUSTUS"] = {title: "Senator", region: "Rome", dietaryPreference: "Vegan", 
    pastGifts: "Silver"};


//Step 2
guests.CICERO.pastGifts.push("Golden Lyre")

//Step 3
guests.ANTONY.region

//Step 4
delete guests.CICERO

//Step 5
let generalProfile = guests.ANTONY
generalProfile.region = "Egypt"

//Question 1
// ---- the region for ANTONY will ge "Egypt"