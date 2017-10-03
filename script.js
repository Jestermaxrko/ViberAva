function initFireBase(){
		var config = {
	    apiKey: "AIzaSyCl_mlUCPiTR3Cwmu4be3DpWiab-V-mpkI",
	    authDomain: "avagenerator.firebaseapp.com",
	    databaseURL: "https://avagenerator.firebaseio.com",
	    projectId: "avagenerator",
	    storageBucket: "avagenerator.appspot.com",
	    messagingSenderId: "140289767041"
	};
  	
  	firebase.initializeApp(config);
}


function changeColor(t){
	head.style.fill=t.value;
	body.style.fill=t.value;
	color = t.value;
}

function saveColor(t){

	if(color){
	
		firebase.database().ref('colors/').push({
	    hex: color
	  	});


		document.location.reload(true);
	}
}

function loadColors(){

	firebase.database().ref('colors/').once('value').then(function(snapshot) {
  	var data = snapshot.val();
  	
  	for(var i in data){
  		for(var j in data[i]){
			colors.push(data[i][j]);
			console.log(colors);
  		}
  	}
  	displayColors();
	});
}


function displayColors() {
  var ul = document.getElementById("list");

    for(var i=0;i<colors.length;i++){
	  var li = document.createElement("li");
	  li.appendChild(document.createTextNode(colors[i]));
	  ul.appendChild(li);
	  li.setAttribute("class", "avatar");
	  li.setAttribute("value",colors[i]);
	  li.style.backgroundColor=colors[i];
	  
	}
}


var color;
initFireBase();
loadColors();

