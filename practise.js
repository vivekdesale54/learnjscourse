const seeTime = document.querySelector(".toggle");
const seeTimeText = document.querySelector(".date");
const newHead = document.createElement("h1");
newHead.innerText = "Hiii Vivek";

seeTime.addEventListener("click", function(e){
    e.preventDefault();
    seeTimeText.classList.toggle("active");
    seeTimeText.innerText = "Tue May 13 2025 19:56:43 GMT+0530 (India Standard Time)";
    seeTimeText.appendChild(newHead);
    seeTimeText.classList.remove("active");
    newHead.classList.remove("active");
    seeTimeText = "";
    newHead = "";
    seeTimeText.classList.add("active");
    newHead.classList.add("active");
    seeTimeText.innerText = "Tue May 13 2025 19:56:43 GMT+0530 (India Standard Time)";
});




