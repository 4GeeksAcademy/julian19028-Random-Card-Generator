/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let number = ["1", "2", "3", "4", "5", "6"];
let icons = ["♦", "♥", "♠", "♣"];
let colors = ["black", "red"];

window.onload = function numbers(number) {
  document.getElementById("number").innerText = Math.floor(
    Math.random() * 6 + 1
  );
  console.log(numbers);
};
