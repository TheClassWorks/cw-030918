let myScroll = document.getElementById("scroll");

window.addEventListener("scroll", function () {
  let scrollY = this.window.scrollY;
  let innerHeight = this.window.innerHeight;
  let clientHeight = document.body.clientHeight;
  console.log(scrollY);
  console.log(clientHeight);
  console.log(innerHeight);
  let darsad = scrollY*100/(clientHeight-innerHeight);
  myScroll.style.width = darsad + "%";
});
