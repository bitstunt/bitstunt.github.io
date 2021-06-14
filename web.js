var msg = "Welcome "
var i = 0;
window.onload = function(){
    var greet = prompt("Please enter your name")
    msg+=greet;
    msg+=" !";
    type();
    blink();
}
function type() {
    if(i < msg.length)
    {
        document.getElementById("msg").innerHTML += msg.charAt(i);
        i++;
        setTimeout(type,100)
    }
}
function blink() {
    if(i < msg.length)
    {
        document.getElementById("cursor").classList.toggle("blink")
        setTimeout(blink,100)
    }
}
function headercolor(x){
    document.getElementById("top").style.backgroundColor = x;
};
function drop(){
   var x = document.getElementById("dropdwn")
   if(x.style.display === 'block')
   x.style.display = 'none'
   else
   x.style.display = 'block'
}
function myFunction() {
    if(pageYOffset >= stick){
    navbar.classList.add("sticky")
    navbar.style.backgroundColor = "#636B59"}
    else{
    navbar.classList.remove("sticky")
    navbar.style.backgroundColor = "#CADED2"}
}
var navbar = document.getElementById("navbar");
var stick = navbar.offsetTop;
window.onscroll = function () {
    myFunction();
}
