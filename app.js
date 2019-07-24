const secHand = document.querySelector(".secHand");
const minHand = document.querySelector(".minHand");
const hourHand = document.querySelector(".hourHand");
const hourdig = document.querySelector(".hours");
const mindig = document.querySelector(".min");
const secdig = document.querySelector(".sec");
const dotteOne = document.querySelector(".dotte-1");
const dotteTwo = document.querySelector(".dotte-2");

function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let secondsDeg = (seconds / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondsDeg}deg)`;
  let min = now.getMinutes();
  let minDeg = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  let hours = now.getHours();
  let hourDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  hourdig.textContent = hours;

  min =  min>= 9 ?  min: '0' + min;
  mindig.textContent = min;
  
  seconds = seconds >= 9 ? seconds : '0' + seconds;
  secdig.textContent = seconds;


  dotteOne.classList.toggle("dottesH");
  dotteTwo.classList.toggle("dottesH");
}
setInterval(setDate, 1000);
