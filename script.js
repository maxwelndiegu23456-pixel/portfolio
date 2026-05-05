//This changes your greeting based on the hour of the day 
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good Morning! I'm";
} else if (hour < 18) {
    greeting = "Good Afternoon! I'm";
} else {
    greeting = "Good Evening! I'm";
}

const greetingElement = document.querySelector('.greeting-text');

greetingElement.innerHTML = greeting;
var typed = new Typed(".typing", {
    strings: ["The Developer", "The Designer", "The Programmer", "The Tech Creator", "The Night Owl"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
//This will stop the animation after 10,00 milliseconds (10 seconds)
setTimeout(() => {
    typed.destroy(); //This removes the aninamtion
    document.querySelector(".typing").innerHTML = "Developer" //this sets the final statement
}, 20000);