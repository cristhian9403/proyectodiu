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

var Fog=createsoundbite("whistle.ogg", "../sonidos/Fog.ogg")
var Hail=createsoundbite("whistle.ogg", "../sonidos/Hagel.ogg")
var Rain=createsoundbite("whistle.ogg", "../sonidos/Rain.ogg")
var Sky=createsoundbite("whistle.ogg", "../sonidos/Sky.ogg")
var Snow=createsoundbite("whistle.ogg", "../sonidos/Snow.ogg")
var Sun=createsoundbite("whistle.ogg", "../sonidos/Sun.ogg")
var Wind=createsoundbite("whistle.ogg", "../sonidos/Wind.ogg")
var Hailstones=createsoundbite("whistle.ogg", "../sonidos/Hailstones.ogg")
var Storm=createsoundbite("whistle.ogg", "../sonidos/Storm.ogg")
var Dew=createsoundbite("whistle.ogg", "../sonidos/Dew.ogg")
var Rainbow=createsoundbite("whistle.ogg", "../sonidos/Rainbow.ogg")
var Thunder=createsoundbite("whistle.ogg", "../sonidos/Thunder.ogg")
var Cloud=createsoundbite("whistle.ogg", "../sonidos/Cloud.ogg")
var Lightning=createsoundbite("whistle.ogg", "../sonidos/Lightning.ogg")
var tohail=createsoundbite("whistle.ogg", "../sonidos/to-hail.ogg")
var tonightfall=createsoundbite("whistle.ogg", "../sonidos/to-nightfall.ogg")
var tosunrise=createsoundbite("whistle.ogg", "../sonidos/to-sunrise.ogg")
var tosnow=createsoundbite("whistle.ogg", "../sonidos/to-snow.ogg")
var torain=createsoundbite("whistle.ogg", "../sonidos/to-rain.ogg")
var tolighten=createsoundbite("whistle.ogg", "../sonidos/to-lighten.ogg")
var todrizzle=createsoundbite("whistle.ogg", "../sonidos/to-drizzle.ogg")
var tofreeze=createsoundbite("whistle.ogg", "../sonidos/to-freeze.ogg")
var tothunder=createsoundbite("whistle.ogg", "../sonidos/to-thunder.ogg")
var topourwithrain=createsoundbite("whistle.ogg", "../sonidos/to-pour-with-rain.ogg")
var Cloudy=createsoundbite("whistle.ogg", "../sonidos/Cloudy.ogg")
var Rainy=createsoundbite("whistle.ogg", "../sonidos/Rainy.ogg")
var Sunny=createsoundbite("whistle.ogg", "../sonidos/Sunny.ogg")
var Windy=createsoundbite("whistle.ogg", "../sonidos/Windy.ogg")
var Overcast=createsoundbite("whistle.ogg", "../sonidos/Overcast.ogg")
var Cold=createsoundbite("whistle.ogg", "../sonidos/Cold.ogg")
var Hot=createsoundbite("whistle.ogg", "../sonidos/Hot.ogg")
var Mild=createsoundbite("whistle.ogg", "../sonidos/Mild.ogg")
