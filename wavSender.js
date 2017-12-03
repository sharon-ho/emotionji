function sendDataFile() {
	var payload = null
	var file = document.getElementById("uploadBtn").files[0]
	if (file && file.name.lastIndexOf(".wav") == file.name.length-4) { 
		var reader = new FileReader();
		payload  = btoa(reader.readAsText(file))
	}
	if (payload != null) {
		var text = "{\"type\":1," + 
			"\"file\":\"" + payload + "\"}";
		alert(text)
		var obj = JSON.parse(text) 
		jQuery.ajax({
			url: '/Postman Interceptor',
			data: { 
				obj
			},
			dataType: 'json'
		});
		return true;
	} else {
		document.getElementById("error").innerHTML = "please choose a wav file"
		return false;
	}
}

function sendDataText() {
	var text = "{\"type:\"0, " + 
		"\"text\":\"" + document.getElementById("textToUpload").value + "\"}" ;
	var obj = JSON.parse(text)
    jQuery.ajax({
        url: 'https://immense-lowlands-49222.herokuapp.com/yhackss17/1/' + document.getElementById("textToUpload").value,
        dataType: 'json',
		success: function(data) {
			var newUrl;
			var percentage = parseFloat(data.splice(data.indexOf(" ")+1, data.indexOf(".")+1))
			percentage = percentage*100;
			alert(percentage)
			alert(data)
			if (data.indexOf("Joy") != 0) {
				newUrl = "joy.html/perc=" +  percentage
			} else if (data.indexOf("Neutral") != 0) {
				newUrl = "neutral.html/perc=" +  percentage
			} else if (data.indexOf("Anger") != 0) {
				newUrl = "anger.html/perc=" +  percentage
			} else if (data.indexOf("Surprise") != 0) {
				newUrl = "surprise.html/perc=" +  percentage		
			} else if (data.indexOf("Fatigue") != 0) {
				newUrl = "fatigue.html/perc=" +  percentage
			} else if (data.indexOf("Sad") != 0) {
				newUrl = "sad.html/perc=" +  percentage
			} else {
				newUrl = "UI.html";
			}
            document.location.href = newUrl;
        },
        error: function() {
            alert('Error occured');
        }
    });
}