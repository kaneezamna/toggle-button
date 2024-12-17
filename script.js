const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.onclick = () =>{
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn.style.borderRadius = "25px";
        btn.style.backgroundColor = "grey"
        btn.textContent = "Switch to light mode";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.style.borderRadius = "8px";
        btn.style.backgroundColor = "cadetblue";
        btn.textContent = "Switch to dark mode";
    }
}
