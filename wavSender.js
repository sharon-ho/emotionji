function sendDataFile() {
	var payload = null
	var file = document.getElementById("uploadBtn").files[0]
	if (file && file.name.lastIndexOf(".wav") == file.name.length-4) { 
		var reader = new FileReader();
		payload  = btoa(reader.readAsBinaryString(file))
		alert(payload)
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
    jQuery.ajax({
        url: 'https://immense-lowlands-49222.herokuapp.com/yhackss17/1/' + document.getElementById("textToUpload").value,
		success: function(data) {
			var newUrl = "react.html?" + data;
            document.location.href = newUrl;
        },
        error: function() {
            alert('Error occured');
			return false;
        }
    });
}