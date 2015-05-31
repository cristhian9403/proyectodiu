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

var Triangle=createsoundbite("whistle.ogg", "../sonidos/Triangle.ogg")
var Quadrilateral=createsoundbite("whistle.ogg", "../sonidos/Cuadrilateral.ogg")
var Trapezium=createsoundbite("whistle.ogg", "../sonidos/Trapezium.ogg")
var Rhombus=createsoundbite("whistle.ogg", "../sonidos/Rhombus.ogg")
var Parallelogram=createsoundbite("whistle.ogg", "../sonidos/Parallelogram.ogg")
var Rectangle=createsoundbite("whistle.ogg", "../sonidos/Rectangle.ogg")
var Square=createsoundbite("whistle.ogg", "../sonidos/Square.ogg")
var Pentagon=createsoundbite("whistle.ogg", "../sonidos/Pentagon.ogg")
var Hexagon=createsoundbite("whistle.ogg", "../sonidos/Hexagon.ogg")
var Heptagon=createsoundbite("whistle.ogg", "../sonidos/Heptagon.ogg")
var Octagon=createsoundbite("whistle.ogg", "../sonidos/Octagon.ogg")
var Ellipse=createsoundbite("whistle.ogg", "../sonidos/Ellipse.ogg")
var Circle=createsoundbite("whistle.ogg", "../sonidos/Circle.ogg")
var Polygon=createsoundbite("whistle.ogg", "../sonidos/Polygon.ogg")
var Tetrahedron=createsoundbite("whistle.ogg", "../sonidos/Tetrahedron.ogg")
var Cube=createsoundbite("whistle.ogg", "../sonidos/Cube.ogg")
var Octahedron=createsoundbite("whistle.ogg", "../sonidos/Octahedron.ogg")
var Dodecahedron=createsoundbite("whistle.ogg", "../sonidos/Dodecahedron.ogg")
var Icosahedron=createsoundbite("whistle.ogg", "../sonidos/Icosahedron.ogg")
var sphere=createsoundbite("whistle.ogg", "../sonidos/sphere.ogg")
var Cylinders=createsoundbite("whistle.ogg", "../sonidos/Cylinders.ogg")
var Cone=createsoundbite("whistle.ogg", "../sonidos/Cone.ogg")
