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

var PARENTES=createsoundbite("whistle.ogg", "../sonidos/Parents.ogg")
var MOTHER=createsoundbite("whistle.ogg", "../sonidos/Mother.ogg")
var FATHER=createsoundbite("whistle.ogg", "../sonidos/Father.ogg")
var SIB=createsoundbite("whistle.ogg", "../sonidos/Sib.ogg")
var SISTER=createsoundbite("whistle.ogg", "../sonidos/Sister.ogg")
var BROTHER=createsoundbite("whistle.ogg", "../sonidos/Brother.ogg")
var WIFE=createsoundbite("whistle.ogg", "../sonidos/Wife.ogg")
var HUSBAND=createsoundbite("whistle.ogg", "../sonidos/Husband.ogg")
var DAUGHTER=createsoundbite("whistle.ogg", "../sonidos/Daughter.ogg")
var SON=createsoundbite("whistle.ogg", "../sonidos/Son.ogg")
var GRANDPARENTS=createsoundbite("whistle.ogg", "../sonidos/Grandparents.ogg")
var GRANDMOTHER=createsoundbite("whistle.ogg", "../sonidos/Grandmother.ogg")
var GRANDFATHER=createsoundbite("whistle.ogg", "../sonidos/Grandfather.ogg")
var BISABUELOS=createsoundbite("whistle.ogg", "../sonidos/Great-grandparent.ogg")
var BISABUELA=createsoundbite("whistle.ogg", "../sonidos/Great-grandmother.ogg")
var BISABUELO=createsoundbite("whistle.ogg", "../sonidos/Great-grandfather.ogg")
var NIETOS=createsoundbite("whistle.ogg", "../sonidos/Grandchildren.ogg")
var GRANDSON=createsoundbite("whistle.ogg", "../sonidos/Grandson.ogg")
var GRANDDAUGHTER=createsoundbite("whistle.ogg", "../sonidos/Granddaughter.ogg")
var AUNT=createsoundbite("whistle.ogg", "../sonidos/Aunt.ogg")
var UNCLE=createsoundbite("whistle.ogg", "../sonidos/Uncle.ogg")
var COUSIN=createsoundbite("whistle.ogg", "../sonidos/Cousin.ogg")
var PRIMO=createsoundbite("whistle.ogg", "../sonidos/Cousin.ogg")
var NIECE=createsoundbite("whistle.ogg", "../sonidos/Niece.ogg")
var NEPHEW=createsoundbite("whistle.ogg", "../sonidos/Nephew.ogg")
var SUEGRA=createsoundbite("whistle.ogg", "../sonidos/Mother-in-law.ogg")
var SUEGRO=createsoundbite("whistle.ogg", "../sonidos/Father-in-law.ogg")
var CUADA=createsoundbite("whistle.ogg", "../sonidos/Sister-in-law.ogg")
var CUADO=createsoundbite("whistle.ogg", "../sonidos/Brother-in-law.ogg")
var NUERA=createsoundbite("whistle.ogg", "../sonidos/Daughter-in-law.ogg")
var YERNO=createsoundbite("whistle.ogg", "../sonidos/Son-in-law.ogg")