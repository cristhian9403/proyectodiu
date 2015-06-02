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

var BECOME=createsoundbite("whistle.ogg", "../sonidos/become-became-become.ogg")
var BEGIN=createsoundbite("whistle.ogg", "../sonidos/begin-began-begun.ogg")
var BREAK=createsoundbite("whistle.ogg", "../sonidos/break-broke-broken.ogg")
var BRING=createsoundbite("whistle.ogg", "../sonidos/bring-brought-brought.ogg")
var BUILD=createsoundbite("whistle.ogg", "../sonidos/build-built-built.ogg")
var BUY=createsoundbite("whistle.ogg", "../sonidos/buy-bought-bought.ogg")
var CATCH=createsoundbite("whistle.ogg", "../sonidos/catch-caught-caught.ogg")
var CHOOSE=createsoundbite("whistle.ogg", "../sonidos/choose-chose-chosen.ogg")
var COME=createsoundbite("whistle.ogg", "../sonidos/come-came-come (1).ogg")
var COST=createsoundbite("whistle.ogg", "../sonidos/cost-cost-cost.ogg")
var CUT=createsoundbite("whistle.ogg", "../sonidos/cut-cut-cut.ogg")
var DRINK=createsoundbite("whistle.ogg", "../sonidos/drink-drank-drunk.ogg")
var EAT=createsoundbite("whistle.ogg", "../sonidos/eat-ate-eaten.ogg")
var FALL=createsoundbite("whistle.ogg", "../sonidos/fall-fell-fallen.ogg")
var FIND=createsoundbite("whistle.ogg", "../sonidos/find-found-found.ogg")
var GET=createsoundbite("whistle.ogg", "../sonidos/get-got-got.ogg")
var GIVE=createsoundbite("whistle.ogg", "../sonidos/give-gave-given.ogg")
var GO=createsoundbite("whistle.ogg", "../sonidos/go-went-gone.ogg")
var KNOW=createsoundbite("whistle.ogg", "../sonidos/know-knew-known (1).ogg")
var LEARN=createsoundbite("whistle.ogg", "../sonidos/learn-learned-learned.ogg")
var LEAVE=createsoundbite("whistle.ogg", "../sonidos/leave-left-left (1).ogg")
var MAKE=createsoundbite("whistle.ogg", "../sonidos/make-made-made.ogg")
var MEAN=createsoundbite("whistle.ogg", "../sonidos/mean-meant-meant.ogg")
var PAY=createsoundbite("whistle.ogg", "../sonidos/pay-paid-paid.ogg")
var PUT=createsoundbite("whistle.ogg", "../sonidos/put-put-put.ogg")
var READ=createsoundbite("whistle.ogg", "../sonidos/read-read-read.ogg")
var RUN=createsoundbite("whistle.ogg", "../sonidos/run-ran-run.ogg")
var SAY=createsoundbite("whistle.ogg", "../sonidos/say-said-said.ogg")
var SEE=createsoundbite("whistle.ogg", "../sonidos/see-saw-seen.ogg")
var SELL=createsoundbite("whistle.ogg", "../sonidos/sell-sold-sold.ogg")
var SEND=createsoundbite("whistle.ogg", "../sonidos/send-sent-sent.ogg")
var SET=createsoundbite("whistle.ogg", "../sonidos/set-set-set.ogg")
var SIT=createsoundbite("whistle.ogg", "../sonidos/sit-sat-sat.ogg")
var SLEEP=createsoundbite("whistle.ogg", "../sonidos/sleep-slept-slept.ogg")
var SPEAK=createsoundbite("whistle.ogg", "../sonidos/speak-spoke-spoken.ogg")
var TAKE=createsoundbite("whistle.ogg", "../sonidos/take-took-taken.ogg")
var TEACH=createsoundbite("whistle.ogg", "../sonidos/teach-taught-taught.ogg")
var WIN=createsoundbite("whistle.ogg", "../sonidos/win-won-won.ogg")
var WRITE=createsoundbite("whistle.ogg", "../sonidos/write-wrote-written.ogg")

