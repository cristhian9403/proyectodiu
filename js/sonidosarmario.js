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

var Suit=createsoundbite("whistle.ogg", "../sonidos/Suit.ogg")
var BermudaShotrs=createsoundbite("whistle.ogg", "../sonidos/Bermuda-Shorts.ogg")
var Blouse=createsoundbite("whistle.ogg", "../sonidos/Blouse.ogg")
var Jacket=createsoundbite("whistle.ogg", "../sonidos/Jacket.ogg")
var Jeans=createsoundbite("whistle.ogg", "../sonidos/Jeans.ogg")
var Overalls=createsoundbite("whistle.ogg", "../sonidos/Overalls.ogg")
var Pullover=createsoundbite("whistle.ogg", "../sonidos/Pullover.ogg")
var Shirt=createsoundbite("whistle.ogg", "../sonidos/Shirt.ogg")
var Skirt=createsoundbite("whistle.ogg", "../sonidos/Skirt.ogg")
var Sweater=createsoundbite("whistle.ogg", "../sonidos/Sweater.ogg")
var Sweatshirt=createsoundbite("whistle.ogg", "../sonidos/Sweatshirt.ogg")
var Top=createsoundbite("whistle.ogg", "../sonidos/Top.ogg")
var Trousers=createsoundbite("whistle.ogg", "../sonidos/Trousers.ogg")
var TShirt=createsoundbite("whistle.ogg", "../sonidos/T-Shirt.ogg")
var Vest=createsoundbite("whistle.ogg", "../sonidos/Vest.ogg")
var Shoe=createsoundbite("whistle.ogg", "../sonidos/Shoe.ogg")
var Slipper=createsoundbite("whistle.ogg", "../sonidos/Slipper.ogg")
var Boot=createsoundbite("whistle.ogg", "../sonidos/Boot.ogg")
var Sandals=createsoundbite("whistle.ogg", "../sonidos/Sandals.ogg")
var Anorak=createsoundbite("whistle.ogg", "../sonidos/Anorak.ogg")
var Dufflecoat=createsoundbite("whistle.ogg", "../sonidos/Duffle-coat.ogg")
var Gabardine=createsoundbite("whistle.ogg", "../sonidos/Gabardine.ogg")
var Coat=createsoundbite("whistle.ogg", "../sonidos/Coat.ogg")
var Bowtie=createsoundbite("whistle.ogg", "../sonidos/Bow-tie.ogg")
var Cap=createsoundbite("whistle.ogg", "../sonidos/Cap.ogg")
var Glove=createsoundbite("whistle.ogg", "../sonidos/Glove.ogg")
var Hat=createsoundbite("whistle.ogg", "../sonidos/Hat.ogg")
var Scarf=createsoundbite("whistle.ogg", "../sonidos/Scarf.ogg")
var Tie=createsoundbite("whistle.ogg", "../sonidos/Tie.ogg")
var Turban=createsoundbite("whistle.ogg", "../sonidos/Turban.ogg")
var Belt=createsoundbite("whistle.ogg", "../sonidos/Belt.ogg")
var Bra=createsoundbite("whistle.ogg", "../sonidos/Bra.ogg")
var Panties=createsoundbite("whistle.ogg", "../sonidos/Panties.ogg")
var Pairofstockings=createsoundbite("whistle.ogg", "../sonidos/Pair-of-stockings.ogg")
var Thicktights=createsoundbite("whistle.ogg", "../sonidos/Thick-tights.ogg")
var Underpants=createsoundbite("whistle.ogg", "../sonidos/Underpants.ogg")
var Undershirt=createsoundbite("whistle.ogg", "../sonidos/Undershirt.ogg")
var Boxershorts=createsoundbite("whistle.ogg", "../sonidos/Boxershorts.ogg")
var Sock=createsoundbite("whistle.ogg", "../sonidos/Sock.ogg")
var Bathingsuit=createsoundbite("whistle.ogg", "../sonidos/Bathing-suit.ogg")
var Bikini=createsoundbite("whistle.ogg", "../sonidos/Bikini.ogg")
var Swimmingtrunks=createsoundbite("whistle.ogg", "../sonidos/Swimming-trunks.ogg")

