
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName("class1"));
}

function identifyByTag() {
    console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
    var x=document.getElementById('block1');
    x.style.backgroundColor="blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize="28px";
}

function changeFontColor() {
        document.getElementById('block3').style.color="green";
}

function revertColor() {
      document.getElementById('block3').style.color="black";
}

function hide() {
      document.getElementById('block4').style.visibility="hidden";
}

function changeBackColor() {
      document.getElementsByClassName("box1")[0].style.backgroundColor="green";
      document.getElementsByClassName("box1")[1].style.backgroundColor="green";
      document.getElementsByClassName("box1")[2].style.backgroundColor="green";
}
function changeBackColor1(){
    document.getElementsByClassName("box2")[0].style.backgroundColor="blue";
    document.getElementsByClassName("box2")[1].style.backgroundColor="blue";
    document.getElementsByClassName("box2")[2].style.backgroundColor="blue";
}
function numbersOnly(evt)
{
    var charCode =evt.keyCode;
    if (charCode < 48 || charCode > 57)
       return false;

    return true;
}
function addAdjacent() {
    document.getElementById('para2').innerHTML+="<br>I got generated on the fly.";
}

function removePara() {
    var x=document.getElementById('para3');
    x.parentNode.removeChild(x);
}

function animatePara() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }
}
function func(){
  var x=document.getElementById('get');
  x.style.background="green";
}
function camel(){
    var x=document.getElementById('inputBox3');
    x.value=x.value.charAt(0).toUpperCase() + x.value.slice(1);
}
function upper1()
{
    var x=document.getElementById('inputBox2');
    x.value=x.value.toUpperCase();
}
function upper()
{
    var x=document.getElementById('inputBox1');
    x.value=x.value.toUpperCase();
}
function val(){

    var d=document.getElementById('browsers').value;
    console.log(d);
}