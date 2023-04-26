// Kung Fu Panda Character Search by Mr. V

//Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
// Get Search Inpot
let name = document.getElementById("search-in").value.toLowerCase();
console.log(name);

// Test the Search Name - Chained
if (name === "fb") {
  document.getElementById("char-info").innerHTML = `
    <img src="images/po.png" alt="kung fu panda character" />
    <h2>FB</h2>
    <p class="quote">"Facebook!"</p>
    `;
} else if (name === "lol") {
   document.getElementById("char-info").innerHTML = `
     <img src="images/po.png" alt="kung fu panda character" />
     <h2>LOL</h2>
     <p class="quote">"Laughing out loud!"</p>
    `;
  } else if (name === "ily") {
    document.getElementById("char-info").innerHTML =`
    <img src="images/mantis.png" alt="kung fu panda character" />
    <h2>ILY</h2>
    <p class="quote">"I Love you!"</p>
      `;
} else if (name === "ttyl") {
  document.getElementById("char-info").innerHTML =`
      <img src="images/monkey.png" alt="kung fu panda character" />
      <h2>TTYL</h2>
      <p class="quote">"Talk to you later!"</p>
`;
} else if (name === "idk") {
  document.getElementById("char-info").innerHTML = `
  <img src="images/viper.png" alt="kung fu panda character" />
   <h2>IDK</h2>
   <p class="quote">"I don’t know!"</p>
`;    
 } else if (name === "goat")
 document.getElementById("char-info").innerHTML = `
 <img src="images/tigress.png" alt="kung fu panda character" /> 
 <h2>GOAT</h2>
 <p class="quote"> "Greatest of all time!"</p>`
}

//   FB: "Facebook."
// LOL: "Laughing out loud!"
// ILY: "I Love you!"
//TTYL: "Talk to you later!"
// IDK: "I don’t know!"
// GOAT: "Greatest of all time!"