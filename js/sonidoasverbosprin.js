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

var tobe=createsoundbite("whistle.ogg", "../sonidos/tobe.mp3")
var tohave=createsoundbite("whistle.ogg", "../sonidos/id18_tohave.mp3")
var todo=createsoundbite("whistle.ogg", "../sonidos/id18_todo.mp3")
var tomake=createsoundbite("whistle.ogg", "../sonidos/id18_tomake.mp3")
var totake=createsoundbite("whistle.ogg", "../sonidos/id18_totake.mp3")
var toget=createsoundbite("whistle.ogg", "../sonidos/id18_toget.mp3")
var togo=createsoundbite("whistle.ogg", "../sonidos/id18_togo.mp3")
var tocome=createsoundbite("whistle.ogg", "../sonidos/id18_tocome.mp3")
var toleave=createsoundbite("whistle.ogg", "../sonidos/id18_toleave.mp3")
var toknow=createsoundbite("whistle.ogg", "../sonidos/id18_toknow.mp3")
var tolife=createsoundbite("whistle.ogg", "../sonidos/id18_tolife.mp3")
var towant=createsoundbite("whistle.ogg", "../sonidos/id18_towant.mp3")
var tofeel=createsoundbite("whistle.ogg", "../sonidos/id18_tofeel.mp3")
var tobegintos=createsoundbite("whistle.ogg", "../sonidos/id18_tobegintos.mp3")
var toendtofin=createsoundbite("whistle.ogg", "../sonidos/id18_toendtofin.mp3")
var tostay=createsoundbite("whistle.ogg", "../sonidos/id18_tostay.mp3")
var tochange=createsoundbite("whistle.ogg", "../sonidos/id18_tochange.mp3")
var towait=createsoundbite("whistle.ogg", "../sonidos/id18_towait.mp3")
var toput=createsoundbite("whistle.ogg", "../sonidos/id18_toput.mp3")
var tobeable=createsoundbite("whistle.ogg", "../sonidos/id18_tobeable.mp3")
var tothink=createsoundbite("whistle.ogg", "../sonidos/id18_tothink.mp3")
var tobelieve=createsoundbite("whistle.ogg", "../sonidos/id18_tobelieve.mp3")
var tohopetowi=createsoundbite("whistle.ogg", "../sonidos/id18_tohopetowi.mp3")
var tolook=createsoundbite("whistle.ogg", "../sonidos/id18_tolook.mp3")
var tosee=createsoundbite("whistle.ogg", "../sonidos/id18_tosee.mp3")
var tohear=createsoundbite("whistle.ogg", "../sonidos/id18_tohear.mp3")
var tocalltori=createsoundbite("whistle.ogg", "../sonidos/id18_tocalltori.mp3")
var toread=createsoundbite("whistle.ogg", "../sonidos/id18_toread.mp3")
var towrite=createsoundbite("whistle.ogg", "../sonidos/id18_towrite.mp3")
var tolisten=createsoundbite("whistle.ogg", "../sonidos/id18_tolisten.mp3")
var toeat=createsoundbite("whistle.ogg", "../sonidos/id18_toeat.mp3")
var todrink=createsoundbite("whistle.ogg", "../sonidos/id18_todrink.mp3")
var tolearn=createsoundbite("whistle.ogg", "../sonidos/id18_tolearn.mp3")
var toteach=createsoundbite("whistle.ogg", "../sonidos/id18_toteach.mp3")
