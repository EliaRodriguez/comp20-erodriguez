
function parse(){
	var xml = new XMLHttpRequest();
	xml.open("GET","https://messagehub.herokuapp.com/messages.json",true);
	xml.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			var data = JSON.parse(this.responseText);
			newData = "";
			for (i = 0; i < data.length; i++){
				newData += '<div class="style">' + data[i].content + " " + '<span class="username">' + data[i].username + '</span>' + '</div> <br>'
			};
			document.getElementById('messages').innerHTML = newData;
		}
		else {
			console.log("What's going on?")
		}
	};
	xml.send();
};