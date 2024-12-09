console.log(window.innerWidth);
console.log(window.innerHeight);

let box = document.querySelector(".sec");
console.log(box.clientHeight);
console.log(box.clientWidth);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});
