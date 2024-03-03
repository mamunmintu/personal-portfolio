// Toggle menu button
const menuBtn = document.querySelector("#menu-toggle-btn");

menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("sidebar-active");
  this.classList.toggle("fa-xmark");
});

// Scrolling text
const style = document.createElement("style");
const position = "right";

style.innerHTML = `@keyframes scrolling-text{
  0%{${position}:-${document.querySelector(".text").offsetWidth + 10}px;}
  100%{${position}: 100%}
}`;

document.head.append(style);

// Circle text rounding
const text = document.querySelector(".squre-9-circle-text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
  )
  .join("");
