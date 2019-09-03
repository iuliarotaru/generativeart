"use strict";

//ARTWORK1
function art1() {
  for (let i = 100; i <= 300; i += 20) {
    //create div
    let newDiv = document.createElement("div");
    newDiv.style.width = `${i}px`;
    newDiv.style.height = `${i}px`;
    document.querySelector("#artwork1").appendChild(newDiv);
    newDiv.classList.add("box");
  }
}
art1();

function art2() {
  for (let i = 0; i <= 90; i += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.transform = `rotate(${i}deg)`;
    document.querySelector("#artwork2").appendChild(newDiv);
    newDiv.classList.add("box");
  }
}
art2();

function art3() {
  for (let i = 0; i <= 200; i += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${i}px`;
    newDiv.style.height = `${i}px`;
    document.querySelector("#artwork3").appendChild(newDiv);
    newDiv.classList.add("circle");
  }
}
art3();

function art4() {
  for (let i = -90; i <= 90; i += 20) {
    let newDiv = document.createElement("div");
    newDiv.style.transform = `translate(${i}px, ${i}px)`;
    document.querySelector("#artwork4").appendChild(newDiv);
    newDiv.classList.add("box");
  }
}
art4();

function art5() {
  for (let i = 1; i <= 512; i *= 2) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${i}px`;
    newDiv.style.height = `${i}px`;
    document.querySelector("#artwork5").appendChild(newDiv);
    newDiv.classList.add("circle");
  }
}
art5();

function art6() {
  for (let i = -20; i <= 45; i += 5) {
    let newDiv = document.createElement("div");
    newDiv.style.transform = `translate(${i - 50}px) rotate(${i * 4}deg)`;
    document.querySelector("#artwork6").appendChild(newDiv);
    newDiv.classList.add("circle");
  }
}
art6();

function art7() {
  for (let i = 0; i <= 200; i += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.transform = `translate(${i}px, ${-i / 2}px)`;
    document.querySelector("#artwork7").appendChild(newDiv);
    newDiv.classList.add("circle");
  }
}
art7();

function art8() {
  for (let i = 50; i <= 200; i += 10) {
    let newDiv = document.createElement("div");
    newDiv.style.transform = `translate(${i / 2}px) rotate(${i}deg)`;
    document.querySelector("#artwork8").appendChild(newDiv);
    newDiv.classList.add("box");
  }
}
art8();

function art9() {
  for (let i = 50; i <= 200; i += 30) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${i}px`;
    newDiv.style.height = `${i}px`;
    document.querySelector("#artwork9").appendChild(newDiv);
    newDiv.classList.add("box", "circle");
  }
}
art9();
