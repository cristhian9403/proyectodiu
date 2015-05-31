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

var Arm=createsoundbite("whistle.ogg", "../sonidos/Arm.ogg")
var Body=createsoundbite("whistle.ogg", "../sonidos/Body.ogg")
var Leg=createsoundbite("whistle.ogg", "../sonidos/Leg.ogg")
var Trunk=createsoundbite("whistle.ogg", "../sonidos/Trunk.ogg")
var Head=createsoundbite("whistle.ogg", "../sonidos/Head.ogg")
var Beard=createsoundbite("whistle.ogg", "../sonidos/Beard.ogg")
var Cheek=createsoundbite("whistle.ogg", "../sonidos/Cheek.ogg")
var Chin=createsoundbite("whistle.ogg", "../sonidos/Chin.ogg")
var Ear=createsoundbite("whistle.ogg", "../sonidos/Ear.ogg")
var Eye=createsoundbite("whistle.ogg", "../sonidos/Eye.ogg")
var Eyebrow=createsoundbite("whistle.ogg", "../sonidos/Eyebrow.ogg")
var Eyelash=createsoundbite("whistle.ogg", "../sonidos/Eyelash.ogg")
var Face=createsoundbite("whistle.ogg", "../sonidos/Face.ogg")
var Hair=createsoundbite("whistle.ogg", "../sonidos/Hair.ogg")
var Lip=createsoundbite("whistle.ogg", "../sonidos/Lip.ogg")
var Mousteche=createsoundbite("whistle.ogg", "../sonidos/Moustache.ogg")
var Mouth=createsoundbite("whistle.ogg", "../sonidos/Mouth.ogg")
var Nose=createsoundbite("whistle.ogg", "../sonidos/Nose.ogg")
var Tongue=createsoundbite("whistle.ogg", "../sonidos/Tongue.ogg")
var Tooth=createsoundbite("whistle.ogg", "../sonidos/Tooth.ogg")
var Anus=createsoundbite("whistle.ogg", "../sonidos/Anus.ogg")
var Back=createsoundbite("whistle.ogg", "../sonidos/Back.ogg")
var Belly=createsoundbite("whistle.ogg", "../sonidos/Belly.ogg")
var Breast=createsoundbite("whistle.ogg", "../sonidos/Breast.ogg")
var Chest=createsoundbite("whistle.ogg", "../sonidos/Chest.ogg")
var Hip=createsoundbite("whistle.ogg", "../sonidos/Hip.ogg")
var Navel=createsoundbite("whistle.ogg", "../sonidos/Navel.ogg")
var Neck=createsoundbite("whistle.ogg", "../sonidos/Neck.ogg")
var Penis=createsoundbite("whistle.ogg", "../sonidos/Penis.ogg")
var Shoulder=createsoundbite("whistle.ogg", "../sonidos/Shoulder.ogg")
var Testicle=createsoundbite("whistle.ogg", "../sonidos/Testicle.ogg")
var Vagina=createsoundbite("whistle.ogg", "../sonidos/Vagina.ogg")
var Armpit=createsoundbite("whistle.ogg", "../sonidos/Armpit.ogg")
var Elbow=createsoundbite("whistle.ogg", "../sonidos/Elbow.ogg")
var Finger=createsoundbite("whistle.ogg", "../sonidos/Finger.ogg")
var Hand=createsoundbite("whistle.ogg", "../sonidos/Hand.ogg")
var Nail=createsoundbite("whistle.ogg", "../sonidos/Nail.ogg")
var Thumb=createsoundbite("whistle.ogg", "../sonidos/Thumb.ogg")
var Indexfinger=createsoundbite("whistle.ogg", "../sonidos/Index-finger.ogg")
var Middlefinger=createsoundbite("whistle.ogg", "../sonidos/Middle-finger.ogg")
var Ringfinger=createsoundbite("whistle.ogg", "../sonidos/Ring-finger.ogg")
var Litlefinger=createsoundbite("whistle.ogg", "../sonidos/Litle-finger.ogg")
var Foot=createsoundbite("whistle.ogg", "../sonidos/Foot.ogg")
var Knee=createsoundbite("whistle.ogg", "../sonidos/Knee.ogg")
var Toe=createsoundbite("whistle.ogg", "../sonidos/Toe.ogg")
var Blood=createsoundbite("whistle.ogg", "../sonidos/Blood.ogg")
var Brain=createsoundbite("whistle.ogg", "../sonidos/Brain.ogg")
var Hear=createsoundbite("whistle.ogg", "../sonidos/Heart.ogg")
var Kidney=createsoundbite("whistle.ogg", "../sonidos/Kidney.ogg")
var Largeintestine=createsoundbite("whistle.ogg", "../sonidos/Large-intestine.ogg")
var Liver=createsoundbite("whistle.ogg", "../sonidos/Liver.ogg")
var Lung=createsoundbite("whistle.ogg", "../sonidos/Lung.ogg")
var Muscle=createsoundbite("whistle.ogg", "../sonidos/Muscle.ogg")
var Skeleton=createsoundbite("whistle.ogg", "../sonidos/Skeleton.ogg")
var Skin=createsoundbite("whistle.ogg", "../sonidos/Skin.ogg")
var Smallintestine=createsoundbite("whistle.ogg", "../sonidos/Small-intestine.ogg")
var Spleen=createsoundbite("whistle.ogg", "../sonidos/Spleen.ogg")
var Stomach=createsoundbite("whistle.ogg", "../sonidos/Stomach.ogg")



