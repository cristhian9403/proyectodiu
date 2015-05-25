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
var letraA=createsoundbite("whistle.ogg", "sonidos/letra.wav")
var clicksound=createsoundbite("click.ogg", "click.mp3")
var primero=createsoundbite("whistle.ogg", "sonidos/.wav")
var segundo=createsoundbite("whistle.ogg", "sonidos/.wav")
var tercero=createsoundbite("whistle.ogg", "sonidos/.wav")
var cuarto=createsoundbite("whistle.ogg", "sonidos/.wav")
var quinto=createsoundbite("whistle.ogg", "sonidos/.wav")



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


