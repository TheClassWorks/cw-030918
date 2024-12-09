// console.log(tarikh);
let options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "numeric",
  // second: "2-digit",
  hour12: false,
};
let date = new Date();
let h1Elem = document.querySelector(".zaman");
setInterval(() => {
  let tarikh = new Date();
  let saat = tarikh.toLocaleString("fa-IR", options);
  h1Elem.innerText = saat.replace("ساعت", "-");
}, 1000);

console.log(date.getDay());
let today = date.getDay();
switch (today) {
  case 0:
    document.write("یکشنبه");
    break;
  case 1:
    document.write("دوشنبه");
    break;
  case 2:
    document.write("سه شنبه");
    break;

  default:
    break;
}

console.log(date.getDate());
