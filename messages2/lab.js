
function parse(){
	var xml = new XMLHttpRequest();
	xml.open("GET","data.json",true);
	xml.onreadystatechange = function(){
		if (this.readyStat == 4 && this.status == 200){
			var data = JSON.parse(this.responseText);
			newData = "";
			for (i = 0; i < data.length; i++){
				newData += data[i].content + '<span class="username">' + data[i].username + '</span>' + '<br/>'
			};
			document.getElementById('messages').innerHTML = newData;
		}
		else {
			console.log("What's going on?")
		}
	};
	xml.send();
};