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


var a0=createsoundbite("whistle.ogg", "../sonidos/zero.ogg")
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
var a18=createsoundbite("whistle.ogg", "../sonidos/eighteen.ogg")
var a19=createsoundbite("whistle.ogg", "../sonidos/nineteen.ogg")
var a20=createsoundbite("whistle.ogg", "../sonidos/twenty.ogg")

