var payload = null
function sendDataFile() {
	$('#WavInput').change(function(){
    var frm = new FormData();
    frm.append('WavInput', document.getElementById("uploadBtn").files[0])
    $.ajax({
        method: 'POST',
        address: 'https://github.com/niko378/',
        data: frm,
        contentType: false,
        processData: false,
        cache: false
    });
	});
	/*var payload = null*/
	var file = document.getElementById("uploadBtn").files[0]
	if (file && file.name.lastIndexOf(".wav") == file.name.length-4) { 
	/*	var reader = new FileReader();
		reader.readAsBinaryString(file)
	}
	if (payload != null) {
		var text = "{\"type\":1," + 
			"\"file\":\"" + payload + "\"}";
		alert(text)
		var obj = JSON.parse(text) */
		jQuery.ajax({
			url: 'https://immense-lowlands-49222.herokuapp.com/yhackss17/1/',
			data: 'https:$$github.com$niko378$'
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
	success: (function(data) {
			var newUrl = "react.html?" + data
            document.location.href = newUrl
        }),
    error: (function() {
            alert('Error occured');
			return false;
        })
    });
}