$(document).ready(function() {
          $(window).keydown(function(event){
          if(event.keyCode == 13) {
               event.preventDefault();
               insertNode();
               return false;
              }
           });
         });
         
function sendQR(sender)
{
	var senderNum = sender.id.substring(1, sender.id.length);
	
	var name = document.getElementById('n' + senderNum).value;
				
	document.getElementById('q' + senderNum).setAttribute("src", "https://chart.googleapis.com/chart?chs=175x175&cht=qr&chl=" + name);
}

function create(htmlStr) 
{
    var frag = document.createDocumentFragment();
    var temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) 
    	frag.appendChild(temp.firstChild);
    	
    return frag;
}

function insertNode()
{
	var currElement = document.body.childNodes.length - 2;

	var removeme = '#b' + (currElement - 1);

	$(removeme).remove();
		
	var fragment = create('<table><tr><td><form style="padding-top:10px;"><fieldset><legend>Create clue ' + (currElement + 1) + ' </legend><button id="b' + currElement + '" class="btn success" onclick="insertNode()" type="button"><b><u></u>+</b></button><div class="clearfix"><div class="input"><input id="n' + currElement + '" type="text" size="30" maxlength="20" name="xlInput" id="xlInput" class="xlarge" placeholder="Name" onBlur="sendQR(this)" onkeypress="sendQR(this)"></div></div></td><td><img id="q' + currElement + '" style="padding-top:20px" src=\'https://chart.googleapis.com/chart?chs=175x175&cht=qr&chl="","",""\' style = "align:center;"/></td></tr></fieldset></form></table>');

	$('body').append(fragment);

	window.scrollTo(0 , document.body.scrollHeight); 
	console.log(currElement)
	var newInput = "#n" + currElement;
	console.log($(newInput));
	$(newInput).focus();
}