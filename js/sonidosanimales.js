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

var Cat=createsoundbite("whistle.ogg", "../sonidos/Cat.ogg")
var Dog=createsoundbite("whistle.ogg", "../sonidos/Dog.ogg")
var Bull=createsoundbite("whistle.ogg", "../sonidos/Bull.ogg")
var Cow=createsoundbite("whistle.ogg", "../sonidos/Cow.ogg")
var Donkey=createsoundbite("whistle.ogg", "../sonidos/Donkey.ogg")
var Duck=createsoundbite("whistle.ogg", "../sonidos/Duck.ogg")
var Goat=createsoundbite("whistle.ogg", "../sonidos/Goat.ogg")
var Goose=createsoundbite("whistle.ogg", "../sonidos/Goose.ogg")
var Hen=createsoundbite("whistle.ogg", "../sonidos/Hen.ogg")
var Horse=createsoundbite("whistle.ogg", "../sonidos/Horse.ogg")
var Mare=createsoundbite("whistle.ogg", "../sonidos/Mare.ogg")
var Pig=createsoundbite("whistle.ogg", "../sonidos/Pig.ogg")
var Rooster=createsoundbite("whistle.ogg", "../sonidos/Rooster.ogg")
var Sheep=createsoundbite("whistle.ogg", "../sonidos/Sheep.ogg")
var Antelope=createsoundbite("whistle.ogg", "../sonidos/Antelope.ogg")
var Bat=createsoundbite("whistle.ogg", "../sonidos/Bat.ogg")
var Bear=createsoundbite("whistle.ogg", "../sonidos/Bear.ogg")
var Camel=createsoundbite("whistle.ogg", "../sonidos/Camel.ogg")
var Coyote=createsoundbite("whistle.ogg", "../sonidos/Coyote.ogg")
var Reindeer=createsoundbite("whistle.ogg", "../sonidos/Reindeer.ogg")
var Deer=createsoundbite("whistle.ogg", "../sonidos/Deer.ogg")
var Dormouse=createsoundbite("whistle.ogg", "../sonidos/Dormouse.ogg")
var Elephant=createsoundbite("whistle.ogg", "../sonidos/Elephant.ogg")
var Elk=createsoundbite("whistle.ogg", "../sonidos/Elk.ogg")
var Ferret=createsoundbite("whistle.ogg", "../sonidos/Ferret.ogg")
var Fox=createsoundbite("whistle.ogg", "../sonidos/Fox.ogg")
var Giraffe=createsoundbite("whistle.ogg", "../sonidos/Giraffe.ogg")
var Hare=createsoundbite("whistle.ogg", "../sonidos/Hare.ogg")
var Lion=createsoundbite("whistle.ogg", "../sonidos/Lion.ogg")
var Lynx=createsoundbite("whistle.ogg", "../sonidos/Lynx.ogg")
var Monkey=createsoundbite("whistle.ogg", "../sonidos/Monkey.ogg")
var Mouse=createsoundbite("whistle.ogg", "../sonidos/Mouse.ogg")
var Otter=createsoundbite("whistle.ogg", "../sonidos/Otter.ogg")
var Panther=createsoundbite("whistle.ogg", "../sonidos/Panther.ogg")
var Rabbit=createsoundbite("whistle.ogg", "../sonidos/Rabbit.ogg")
var Raccoon=createsoundbite("whistle.ogg", "../sonidos/Raccoon.ogg")
var Rhinoceros=createsoundbite("whistle.ogg", "../sonidos/Rhinoceros.ogg")
var Squirrel=createsoundbite("whistle.ogg", "../sonidos/Squirrel.ogg")
var Tiger=createsoundbite("whistle.ogg", "../sonidos/Tiger.ogg")
var Weasel=createsoundbite("whistle.ogg", "../sonidos/Weasel.ogg")
var Wildboar=createsoundbite("whistle.ogg", "../sonidos/Wildboar.ogg")
var Wolf=createsoundbite("whistle.ogg", "../sonidos/Wolf.ogg")
var Zebra=createsoundbite("whistle.ogg", "../sonidos/Zebra.ogg")
var Dolphin=createsoundbite("whistle.ogg", "../sonidos/Dolphin.ogg")
var Killerwhale=createsoundbite("whistle.ogg", "../sonidos/Killerwhale.ogg")
var Seal=createsoundbite("whistle.ogg", "../sonidos/Seal.ogg")
var Spermwhale=createsoundbite("whistle.ogg", "../sonidos/Spermwhale.ogg")
var Walrus=createsoundbite("whistle.ogg", "../sonidos/Walrus.ogg")
var Whale=createsoundbite("whistle.ogg", "../sonidos/Whale.ogg")
var Blackbird=createsoundbite("whistle.ogg", "../sonidos/Blackbird.ogg")
var Crane=createsoundbite("whistle.ogg", "../sonidos/Crane.ogg")
var Eagle=createsoundbite("whistle.ogg", "../sonidos/Eagle.ogg") 
var Falcon=createsoundbite("whistle.ogg", "../sonidos/Falcon.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")
var =createsoundbite("whistle.ogg", "../sonidos/.ogg")


