/* Javascript */
var Counter = 0;
function ResizeText(size) 
{
if ((size == '14') && (Counter == 0)) return;
var HtmlTags = document.getElementById('PostContent').getElementsByTagName('*');

for (i = 0; i < HtmlTags.length; i++) 
{
if (HtmlTags[i].tagName == "H4") 
{
if (size == '10') 
{
HtmlTags[i].style.fontSize = 10 + "pt"
}
else if (size == '14') 
{
HtmlTags[i].style.fontSize = 14 + "pt"
}
else if (size == '20') 
{
HtmlTags[i].style.fontSize = 20 + "pt"
}
}
else if (HtmlTags[i].tagName == "td") 
{
if (size == '10')
HtmlTags[i].style.fontSize = 10 + "pt"
else if (size == '14')
HtmlTags[i].style.fontSize = 14 + "pt"
else if (size == '20')
HtmlTags[i].style.fontSize = 20 + "pt"
}
else 
{
HtmlTags[i].style.fontSize = size + "pt"
}
}

if (size == '10') 
{
Counter = 1;
document.getElementById('SmallFont').style.backgroundColor = 'orange';
document.getElementById('MediumFont').style.backgroundColor = '';
document.getElementById('LargeFont').style.backgroundColor = '';
}
else if (size == '14') 
{
document.getElementById('SmallFont').style.backgroundColor = '';
document.getElementById('MediumFont').style.backgroundColor = 'orange';
document.getElementById('LargeFont').style.backgroundColor = '';
}
else if (size == '20') 
{
Counter = 1;
document.getElementById('SmallFont').style.backgroundColor = '';
document.getElementById('MediumFont').style.backgroundColor = '';
document.getElementById('LargeFont').style.backgroundColor = 'orange';
}
}