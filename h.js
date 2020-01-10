
function swap(){
	var t=document.getElementById("c").value;
	document.getElementById("c").value=document.getElementById("h").value;
	document.getElementById("h").value=t;
}

function prm(){
	var n=document.getElementById("n").value;
	var c=0;
	var r=document.getElementById("nbr");
	r.innerHTML="";
	for (var i = 2; i <= n; i++) {
		c=0;
		for (var j = 2; j < i; j++) {
			if(i % j==0){c++;break;}
		}
		if(c==0) {r.innerHTML +=i + " ";}
	}
}
function color(){
	var slt= document.getElementById("slt");
	var txt=document.getElementById("txt");
	txt.style.color = slt.options[slt.selectedIndex].text;
}
function tal(){
	var slt= document.getElementById("tl");
	var txt=document.getElementById("txt");
	txt.style.fontSize = slt.options[slt.selectedIndex].text;
}
function plus(){
	var zad=parseInt(document.getElementById("mg").style.height);
	zad += 10;
	document.getElementById("mg").style.height=zad;
}
function moins(){
	var ns=parseInt(document.getElementById("mg").style.height);
	ns -= 10;
	document.getElementById("mg").style.height=ns;
}
function bgc(){
var bg=prompt("choisir la couleur");
document.body.style.backgroundColor= bg;
}
function dvsr(){
document.getElementById("dvs").innerHTML="";
var qr=document.getElementById("qr").value;
for (var i = 1; i <=qr; i++) {
	if (qr%i==0) {document.getElementById("dvs").innerHTML+= i + " "};}
}
function dat(){
	var n=new Date();
	var d=n.getDate();
	var h=n.getHours();
	var j=n.getDay();
	var m=n.getMonth();
	var a=n.getFullYear();
	var m=n.getMinutes();
	var s=n.getSeconds();
	document.getElementById("dat").innerHTML = d +" "+ h +" "+ j +" "+ m +" "+ a +"<br>" ;
	document.getElementById("dat").innerHTML +=h+":"+m+":"+s;
}
function ms(){
var t=parseInt(document.getElementById("mgi").style.height);
t+=10;
document.getElementById("mgi").style.height=t;
}
function ot(){
var t=parseInt(document.getElementById("mgi").style.height);
t-=10;
document.getElementById("mgi").style.height=t;
}
function etoile(){
	document.getElementById("nj").innerHTML="";
	var n=prompt("entrez le nbre des etoiles");
	var t='';
	for (var i = 1; i <=n; i++) {
		t+='*';
		document.getElementById("nj").innerHTML+= t +"<br>";
	}
}
function pswd(){
	document.getElementById("ps").href="https://www.google.com/search?q="
document.getElementById("ps").innerHTML=document.getElementById("psw").value;
document.getElementById("ps").href=document.getElementById("ps").href+document.getElementById("psw").value;
}
function bakg(){
var bkg=document.getElementById("bkg");
document.body.style.backgroundColor = bkg.options[bkg.selectedIndex].text;
}
	var h2=0;
	var h1=0;
	var m2=0;
	var m1=0;
	var s2=0;
	var s1=0;
function sta(){
var x = document.getElementById("ex");
x.innerHTML = h2+h1+":"+m2+m1+":"+s2+s1;
 s1++;
if(s1==10){s1=0;s2++;};
if(s2==6 && s1==0){s1=0;s2=0;m1++;};
if(m1==10){m1=0;m2++;};
if(m2==6 && m1==0){m1=0;m2=0;h1++;};
if(h1==10){h1=0;h2++;};
}
function zer(n){
	clearInterval(n)
h2=0;
h1=0;
m2=0;
m1=0;
s2=0;
s1=0;
	var x = document.getElementById("ex");
x.innerHTML = h2+h1+":"+m2+m1+":"+s2+s1;
}
function mnt(){
	var p=parseInt(document.getElementById("mgi").style.top);
	p-=5;
	document.getElementById("mgi").style.top=p;
}
function des(){
	var p=parseInt(document.getElementById("mgi").style.top);
	p+=5;
	document.getElementById("mgi").style.top=p;
}
function arr(){
	document.getElementById("mgi").style.top=5;
}
var a=0;
function change(x){
	document.getElementById("fr").src=x+".jpg";
}
function suivant(){
    a++;
    if(a>9) a=0;
    change(a);
}
function precedent(){
    a--;
	if(a<0) a=9;
	change(a);
}
function dalit(){
	document.getElementById("dd").innerHTML=document.getElementById("dl").value;
}
function inc(){
	document.getElementById("incr").value++;
}
function res(){
	document.getElementById("incr").value=0;;
}
function app(){
	document.getElementById("app").style.display="block";
}
function disapp(){
	document.getElementById("app").style.display="none";
}
function aleatoire(r){
	return Math.round(r*Math.random());
}var n=aleatoire(100);var s=0;
function devin(){
	document.getElementById("lb").innerHTML= "";
	var v=document.getElementById("dev").value;
	if(v==n) {document.getElementById("lb").innerHTML+="bravo"+"<br>"+"vous avez "+s+" reponses fausses";}
	else if(n<v) {document.getElementById("lb").innerHTML+= "plus grand";s++;}
	else {document.getElementById("lb").innerHTML+= "plus petit";s++;}
}


































































