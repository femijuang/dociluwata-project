/*
window.onload=function() {
    
var jengkol = document.querySelector("laguA");
var peuteuy = document.querySelector("laguB");
     
sound1.onclick=function()
    {soundmenu.play();};   
sound2.onclick=function()
    {soundmenu2.play();}
    
};
*/      

var jengkol    = document.querySelector("#laguA");
var peuteuy    = document.querySelector("#laguB");
var sentuhAye  = document.querySelector("#sentuh");
var colekGue   = document.querySelector("#colek");


sentuhAye.addEventListener("click",sora1);
function sora1() {
    jengkol.play();
}


colekGue.addEventListener("click",sora2);
function sora2() {
    peuteuy.play();
}
