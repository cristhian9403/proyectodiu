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

var Iam=createsoundbite("whistle.ogg", "../sonidos/I-am.ogg")
var youare=createsoundbite("whistle.ogg", "../sonidos/you-are.ogg")
var heis=createsoundbite("whistle.ogg", "../sonidos/he-is.ogg")
var sheis=createsoundbite("whistle.ogg", "../sonidos/she-is.ogg")
var itis=createsoundbite("whistle.ogg", "../sonidos/it-is.ogg")
var weare=createsoundbite("whistle.ogg", "../sonidos/we-are.ogg")
var youare=createsoundbite("whistle.ogg", "../sonidos/you-are.ogg")
var theyare=createsoundbite("whistle.ogg", "../sonidos/they-are.ogg")