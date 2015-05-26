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

var A=createsoundbite("whistle.ogg", "../sonidos/a.ogg")
var B=createsoundbite("whistle.ogg", "../sonidos/b.ogg")
var C=createsoundbite("whistle.ogg", "../sonidos/c.ogg")
var D=createsoundbite("whistle.ogg", "../sonidos/d.ogg")
var E=createsoundbite("whistle.ogg", "../sonidos/e.ogg")
var F=createsoundbite("whistle.ogg", "../sonidos/f.ogg")
var G=createsoundbite("whistle.ogg", "../sonidos/g.ogg")
var H=createsoundbite("whistle.ogg", "../sonidos/h.ogg")
var I=createsoundbite("whistle.ogg", "../sonidos/i.ogg")
var J=createsoundbite("whistle.ogg", "../sonidos/j.ogg")
var K=createsoundbite("whistle.ogg", "../sonidos/k.ogg")
var L=createsoundbite("whistle.ogg", "../sonidos/l.ogg")
var M=createsoundbite("whistle.ogg", "../sonidos/m.ogg")
var N=createsoundbite("whistle.ogg", "../sonidos/n.ogg")
var O=createsoundbite("whistle.ogg", "../sonidos/o.ogg")
var P=createsoundbite("whistle.ogg", "../sonidos/p.ogg")
var Q=createsoundbite("whistle.ogg", "../sonidos/q.ogg")
var R=createsoundbite("whistle.ogg", "../sonidos/r.ogg")
var S=createsoundbite("whistle.ogg", "../sonidos/s.ogg")
var T=createsoundbite("whistle.ogg", "../sonidos/t.ogg")
var U=createsoundbite("whistle.ogg", "../sonidos/u.ogg")
var V=createsoundbite("whistle.ogg", "../sonidos/v.ogg")
var W=createsoundbite("whistle.ogg", "../sonidos/w.ogg")
var X=createsoundbite("whistle.ogg", "../sonidos/x.ogg")
var Y=createsoundbite("whistle.ogg", "../sonidos/y.ogg")
var Z=createsoundbite("whistle.ogg", "../sonidos/z.ogg")
