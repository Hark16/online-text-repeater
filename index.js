
function darkpage(){
alert("Dark mode activated ");

}


function myFunction() {

var a = document.getElementById('a').value
var b= document.getElementById('b').value
var c= 1

var h1 = ""
var h2 = ""
var h3 = ""
var h4 = ""
var h= ""

var e= document.getElementById('demo')


while(c<=b){

 h1+= a +". ";
 h2+= a +", ";
 h3+= a +"<br/>";
 h4+= a +""+ c +" ";
 h += a +" ";



c++

}


e.innerHTML= h;

var g= document.getElementById('clip')
var f= document.getElementById('demo1')

g.onclick= function two(){

var el = document.createElement('textarea');
el.value = h;
f.appendChild(el);
el.select();
document.execCommand('copy');

document.body.removeChild(el);

}
}


function clear1(){

document.location.reload()
}


