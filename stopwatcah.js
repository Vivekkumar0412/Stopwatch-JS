// alert("hi");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let sc = document.getElementById("sc");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let hur = document.getElementById("hur");

let mainDiv = document.getElementById("main");
let sec = 0;
let mini = 0;
let hr = 0;
let str;

btn1.addEventListener("click", function () {
  str = setInterval(() => {
    sc.innerHTML = sec;
    sec++;
    if (sec > 4) {
      min.innerHTML = mini;
      mini++;
      sec = 0;
      if (mini > 4) {
        hur.innerHTML = hr;
        hr++;
        mini = 0;
      }
    }
  }, 1000);
});

btn2.addEventListener('click',function(){
    clearInterval(str);
})
