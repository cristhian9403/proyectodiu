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


var Balcony=createsoundbite("whistle.ogg", "../sonidos/Balcony.ogg")
var Basement=createsoundbite("whistle.ogg", "../sonidos/Basement.ogg")
var Bathroom=createsoundbite("whistle.ogg", "../sonidos/Bathroom.ogg")
var Corridor=createsoundbite("whistle.ogg", "../sonidos/Corridor.ogg")
var Garden=createsoundbite("whistle.ogg", "../sonidos/Garden.ogg")
var Guestroom=createsoundbite("whistle.ogg", "../sonidos/Guestroom.ogg")
var Hall=createsoundbite("whistle.ogg", "../sonidos/Hall.ogg")
var Kitchen=createsoundbite("whistle.ogg", "../sonidos/Kitchen.ogg")
var Library=createsoundbite("whistle.ogg", "../sonidos/Library.ogg")
var Lounge=createsoundbite("whistle.ogg", "../sonidos/Lounge.ogg")
var Livingroom=createsoundbite("whistle.ogg", "../sonidos/Living-room.ogg")
var Nursery=createsoundbite("whistle.ogg", "../sonidos/Nursery.ogg")
var Diningroom=createsoundbite("whistle.ogg", "../sonidos/Dining-room.ogg")
var toilet=createsoundbite("whistle.ogg", "../sonidos/Toilet.ogg")
var Winecellar=createsoundbite("whistle.ogg", "../sonidos/Wine-cellar.ogg")