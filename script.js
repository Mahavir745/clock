let hour=document.querySelector("#hour")
let min=document.querySelector("#minute")
let sec=document.querySelector("#second")

function displayTime(){
  let date= new Date();

  //hour
  let hh=date.getHours();
  let mn=date.getMinutes();
  let sc=date.getSeconds();

  let hourRotate= 30*hh + mn/2;
  let minRotate= 6*mn;
  let secRotate=6*sc;

  hour.style.transform=`rotate(${hourRotate}deg)`
  min.style.transform=`rotate(${minRotate}deg)`
  sec.style.transform=`rotate(${secRotate}deg)`
}

setInterval(displayTime,1000)