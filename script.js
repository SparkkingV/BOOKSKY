var popover =document.querySelector(".popupoverlay")
var popbox=document.querySelector(".bookadd")
var addpopbtn=document.getElementById("addpop")

addpopbtn.addEventListener("click",function(){
    popover.style.display="block"
    popbox.style.display="block"
})

var cnlbbtn=document.getElementById("cancelpop")

cnlbbtn.addEventListener("click",function(){
    event.preventDefault
    display="none"
})

var addbtn=document.getElementById("addbook")
var cont=document.querySelector(".container")
var btitle=document.getElementById("btint")
var bauth=document.getElementById("baint")
var bdes=document.getElementById("bdint")


addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bcontainer")
    div.innerHTML=`<h2>${btitle.value}</h2>
    <h5>${bauth.value}</h5>
    <p>${bdes.value}</p>
    <button onclick="del(event)">Delete</button>`
    cont.append(div)
    popover.style.display="none"
    popbox.style.display="none"
   
})

function del(event){
    event.target.parentElement.remove()
}