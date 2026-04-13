// selecting  popupbox,overlay,button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
// select cancel button
var cancelbutton=document.getElementById("Cancel-popup")
cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//selecting container,add book,book title,book author,description
var containers=document.querySelector(".container")
var addbook=document.getElementById("add-box")
var booktitleinput=document.getElementById("book-title-input")
var booktauthorinput=document.getElementById("book-author-input")
var bookdes=document.getElementById("short-description-input")

 addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${booktauthorinput.value}</h5>
            <p>${bookdes.value}</p>
         <button onclick="deletebook(event)">delete</button>`
    containers.append(div)
 popupoverlay.style.display="none"
    popupbox.style.display="none"
 })
 function deletebook(event){
    event.target.parentElement.remove()
 }

