/* Javascript */
function accesibiliza(){
    var body = document.getElementsByTagName("div")[0];
    var class_name = "accesible";
    var bot = document.getElementById("bot-accesible");
    var ya_tiene = new RegExp('\b'+class_name+'\b').test(body.className);
    if(ya_tiene){//ya la tiene. Remueve.
	var rep = body.className.match(' '+class_name)?' '+class_name:class_name;
        body.className = body.className.replace(rep,'');
    }
    else {//no tiene, agrega clase.
	body.className += " "+class_name;
    }
}