let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterhealth;
let inventary = ["stick"];
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthtext = document.querySelector("#healthtext");
const goldtext = document.querySelector("#goldtext");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
//initialize button
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = gofightDragon;

function goStore() {
  console.log("going to store .")

}
function gocave() {
  console.log("going to store .")

}
function gofightdragon() {
  console.log("going to store .")

}