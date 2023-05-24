let close =document.getElementById("close")
let open =document.getElementById("open")
let navbar=document.getElementById("navshow")

close.addEventListener("click",()=>{navbar.style.display="none"
open.style.display="block"})
open.addEventListener("click",()=>{navbar.style.display="block",

open.style.display="none"})
