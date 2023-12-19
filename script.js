function nextPage() {
    window.location.href = "yes.html";
}

function Start() {
    alert("Starałem sie nad tym oki..");
}






var b = document.querySelector("#noButton");
b.addEventListener("mouseover",change);

const Width = document.getElementById("container")
const Height = document.getElementById("container")


function change()
{
let i = Math.floor(Math.random()*1366)+1;
let j = Math.floor(Math.random()*768)+1;
console.log('here' , i ,j , b.style.left , b.style.top);
    b.style.left = i+'px';
    b.style.top = j + "px";

const btn = document.getElementById("noButton");

    btn.style.position = "absolute"
}


