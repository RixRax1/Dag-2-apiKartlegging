// DATATYPER
const string = "hei";
const number = 23;
const boolean = true;
const litteralstring = `tallet mitt er ${number}`;
const array = ["Hei", "adjø"];
const objects = {
  navn: "Ole",
  alder: 5,
};

console.log(litteralstring);

//
const baseUrl = "https://ghibliapi.vercel.app";

async function getApi() {
  const fullurl = baseUrl + "/films";

  const res = await fetch(fullurl);
  const data = await res.json();

  console.log(data);
  createGhibliCard(data);
}

getApi();

const ghibliContainer = document.getElementById("ghibliCont");

function createGhibliCard(Ghibli) {
  console.log(Ghibli);
  Ghibli.forEach((data) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");

    title.textContent = data.title;

    img.src = data.image;
    img.alt = data.title;

    div.append(title, img);
    ghibliContainer.append(div);
  });
}

console.error("SE OPP");

const JsCont = document.getElementById("jsTest");

const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");

let num = 0;

// clicker.addEventListener("click", (e) => {
//  num += 1;
//  counter.textContent = num;
// });

// setTimeout((e) => {
//  console.log("jeg ventet");
// }, 1000);

// function Greeting() {
//  console.log("welcome");
// }

// Greeting();

let isRunning = true;

if (isRunning) {
  console.log("hei, jeg kjører");
} else if (!isRunning) {
  console.log("lol jeg kjører ikke");
} else {
  console.log("hva driver du på med");
}

isRunning ? console.log("Hei jeg kjører") : console.log("Jeg kjører ikke");
