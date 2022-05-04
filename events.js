let btn = document.getElementById("btn");

function back(){
btn.style.backgroundColor = "rgb(31, 31, 31)";
btn.style.color = "white";
btn.style.transition = "1s";
btn.style.border = "none";
btn.style.boxShadow = "none";
btn.style.fontSize = "30px";
btn.style.borderRadius = "10px";
btn.style.padding = "10px";
}

btn.addEventListener("click", back2);


function back2(){
btn.innerHTML = "Bye";
btn.style.backgroundColor = "rgb(31, 31, 31)";
btn.style.color = "white";
btn.style.transition = "1.5s";
btn.style.border = "none";
btn.style.boxShadow = "none";
btn.style.fontSize = "30px";
btn.style.borderRadius = "10px";
btn.style.padding = "10px";
}