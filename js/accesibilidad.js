/* Javascript */
var Counter = 0;
function ResizeText(size) 
{
if ((size == '10') && (Counter == 0)) return;
var HtmlTags = document.getElementById('PostContent').getElementsByTagName('*');

for (i = 0; i < HtmlTags.length; i++) 
{
if (HtmlTags[i].tagName == "H4") 
{
if (size == '8') 
{
HtmlTags[i].style.fontSize = 10 + "pt"
}
else if (size == '10') 
{
HtmlTags[i].style.fontSize = 12 + "pt"
}
else if (size == '12') 
{
HtmlTags[i].style.fontSize = 14 + "pt"
}
}
else if (HtmlTags[i].tagName == "td") 
{
if (size == '8')
HtmlTags[i].style.fontSize = 14 + "pt"
else if (size == '10')
HtmlTags[i].style.fontSize = 16 + "pt"
else if (size == '12')
HtmlTags[i].style.fontSize = 18 + "pt"
}
else 
{
HtmlTags[i].style.fontSize = size + "pt"
}
}

if (size == '8') 
{
Counter = 1;
document.getElementById('SmallFont').style.backgroundColor = 'orange';
document.getElementById('MediumFont').style.backgroundColor = 'yellow';
document.getElementById('LargeFont').style.backgroundColor = 'yellow';
}
else if (size == '10') 
{
document.getElementById('SmallFont').style.backgroundColor = 'yellow';
document.getElementById('MediumFont').style.backgroundColor = 'orange';
document.getElementById('LargeFont').style.backgroundColor = 'yellow';
}
else if (size == '12') 
{
Counter = 1;
document.getElementById('SmallFont').style.backgroundColor = 'yellow';
document.getElementById('MediumFont').style.backgroundColor = 'yellow';
document.getElementById('LargeFont').style.backgroundColor = 'orange';
}
}