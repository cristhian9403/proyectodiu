// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code

//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
//** Call: uniquevar.playclip() to play sound

var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.pause()
			html5audio.currentTime=0
			html5audio.play()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

//Initialize two sound clips with 1 fallback file each:

var clicksound=createsoundbite("click.ogg", "click.mp3")
var primero=createsoundbite("whistle.ogg", "sonidos/.wav")
var segundo=createsoundbite("whistle.ogg", "sonidos/.wav")
var tercero=createsoundbite("whistle.ogg", "sonidos/.wav")
var cuarto=createsoundbite("whistle.ogg", "sonidos/.wav")
var quinto=createsoundbite("whistle.ogg", "sonidos/.wav")

var A=createsoundbite("whistle.ogg", "../sonidos/poo.wav")
var B=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var C=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var D=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var E=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var F=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var G=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var H=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var I=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var J=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var K=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var L=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var M=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var N=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var O=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var P=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var Q=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var R=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var S=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var T=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var U=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var V=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var W=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var X=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var Y=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var Z=createsoundbite("whistle.ogg", "../sonidos/letra.wav")

var SALUDO1=createsoundbite("whistle.ogg", "../sonidos/gg.wav")
var SALUDO2=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var SALUDO3=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var SALUDO4=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var SALUDO5=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var SALUDO6=createsoundbite("whistle.ogg", "../sonidos/letra.wav")

var DESPEDIDA1=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var DESPEDIDA2=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var DESPEDIDA3=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var DESPEDIDA4=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var DESPEDIDA5=createsoundbite("whistle.ogg", "../sonidos/letra.wav")

var a0=createsoundbite("whistle.ogg", "../sonidos/zero.wav")
var a1=createsoundbite("whistle.ogg", "../sonidos/one.ogg")
var a2=createsoundbite("whistle.ogg", "../sonidos/two.ogg")
var a3=createsoundbite("whistle.ogg", "../sonidos/three.ogg")
var a4=createsoundbite("whistle.ogg", "../sonidos/four.ogg")
var a5=createsoundbite("whistle.ogg", "../sonidos/five.ogg")
var a6=createsoundbite("whistle.ogg", "../sonidos/six.ogg")
var a7=createsoundbite("whistle.ogg", "../sonidos/seven.ogg")
var a8=createsoundbite("whistle.ogg", "../sonidos/eight.ogg")
var a9=createsoundbite("whistle.ogg", "../sonidos/nine.ogg")
var a10=createsoundbite("whistle.ogg", "../sonidos/ten.ogg")
var a11=createsoundbite("whistle.ogg", "../sonidos/eleven.ogg")
var a12=createsoundbite("whistle.ogg", "../sonidos/twelve.ogg")
var a13=createsoundbite("whistle.ogg", "../sonidos/thirteen.ogg")
var a14=createsoundbite("whistle.ogg", "../sonidos/fourteen.ogg")
var a15=createsoundbite("whistle.ogg", "../sonidos/fifteen.ogg")
var a16=createsoundbite("whistle.ogg", "../sonidos/sixteen.ogg")
var a17=createsoundbite("whistle.ogg", "../sonidos/seventeen.ogg")
var a18=createsoundbite("whistle.ogg", "../sonidos/eightteen.ogg")
var a19=createsoundbite("whistle.ogg", "../sonidos/nineteen.ogg")
var a20=createsoundbite("whistle.ogg", "../sonidos/twenty.ogg")

var AMARILLO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var AZUL=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var BLANCO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var GRIS=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var MARRON=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var NARANJA=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var NEGRO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var ROJO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var VERDE=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var VIOLETA=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var AZULMARINO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var CELESTE=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var DORADO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var FUCSIA=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var CASTAÑO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var MORADO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var PLATA=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var ROSA=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var TURQUESA=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var VERDECLARO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var VERDEOSCURO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var GRISOSCURO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var GRANATE=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var GRISCLARO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")

var LUNES=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var MARTES=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var MIERCOLES=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var JUEVES=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var VIERNES=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var SABADO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")
var DOMINGO=createsoundbite("whistle.ogg", "../sonidos/letra.wav")



function mostrarA(enla) {
  obj = document.getElementById('A');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarB(enla) {
  obj = document.getElementById('B');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarC(enla) {
  obj = document.getElementById('C');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarD(enla) {
  obj = document.getElementById('D');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarE(enla) {
  obj = document.getElementById('E');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarF(enla) {
  obj = document.getElementById('F');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarG(enla) {
  obj = document.getElementById('G');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarH(enla) {
  obj = document.getElementById('H');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarI(enla) {
  obj = document.getElementById('I');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarJ(enla) {
  obj = document.getElementById('J');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarK(enla) {
  obj = document.getElementById('K');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarL(enla) {
  obj = document.getElementById('L');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarM(enla) {
  obj = document.getElementById('M');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarN(enla) {
  obj = document.getElementById('N');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarO(enla) {
  obj = document.getElementById('O');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarP(enla) {
  obj = document.getElementById('P');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarQ(enla) {
  obj = document.getElementById('Q');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarR(enla) {
  obj = document.getElementById('R');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarS(enla) {
  obj = document.getElementById('S');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarT(enla) {
  obj = document.getElementById('T');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarU(enla) {
  obj = document.getElementById('U');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarV(enla) {
  obj = document.getElementById('V');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarW(enla) {
  obj = document.getElementById('W');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarX(enla) {
  obj = document.getElementById('X');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarY(enla) {
  obj = document.getElementById('Y');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrarZ(enla) {
  obj = document.getElementById('Z');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrar1(enla) {
  obj = document.getElementById('SALUDO1');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrar2(enla) {
  obj = document.getElementById('SALUDO2');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrar3(enla) {
  obj = document.getElementById('SALUDO3');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrar4(enla) {
  obj = document.getElementById('SALUDO4');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrar5(enla) {
  obj = document.getElementById('SALUDO5');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostrar6(enla) {
  obj = document.getElementById('SALUDO6');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostra1(enla) {
  obj = document.getElementById('DESPEDIDA1');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostra2(enla) {
  obj = document.getElementById('DESPEDIDA2');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostra3(enla) {
  obj = document.getElementById('DESPEDIDA3');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostra4(enla) {
  obj = document.getElementById('DESPEDIDA4');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}

function mostra5(enla) {
  obj = document.getElementById('DESPEDIDA5');
  obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';  
}


