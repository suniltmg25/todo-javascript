// Open Popup
const btn = document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("main-div").style.display = "flex";
})
const div = document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("second-div").style.display = "none";
})

// Close Popup
const close = document.getElementById("close").addEventListener("click", function(){
    document.getElementById("main-div").style.display = "none";
})
const closeDiv = document.getElementById("close").addEventListener("click", function(){
    document.getElementById("second-div").style.display = "block";
})

// Set Item
// const value = [];
const setBtn = document.getElementById("submit");
const input = document.getElementById("text");
const displayedText = document.getElementById("list");

setBtn.addEventListener("click", function(){
    const value = input.value;
    localStorage.setItem('name', value);
    location.reload();
})
window.addEventListener("load", function(){
    const applicationValue = localStorage.getItem("name");
    displayedText.innerHTML = applicationValue;
})