var emotes = ["😊", "😠","😐", "😢", "😲"]
var text = ["You're feeling positive!", "#$@&%*!", "You don't have an opinion.", "You're not feeling well...", "Woah!"]
function getParams()
{			
			var data = document.URL
			data = data.slice(data.indexOf("?")+1)
			var progression = data.slice(0, data.indexOf(")")+1)
			data = data.slice(data.indexOf(")"), data.length)
			while (data.indexOf(")]") < 5) {
				var newUrl
				if (progression.indexOf("Joy") != -1) {
					newUrl = 0
				} else if (progression.indexOf("Neutral") != -1) {
					newUrl = 2
				} else if (progression.indexOf("Anger") != -1) {
					newUrl = 1
				} else if (progression.indexOf("Surprise") != -1) {
					newUrl = 4
				} else if (progression.indexOf("Sad") != -1) {
					newUrl = 3
				}
				document.getElementById("emote").innerHTML = emotes[newUrl]
				document.getElementById("text").innerHTML = text[newUrl]
				var toParse = parseFloat(progression.slice(progression.indexOf(" ")+1, progression.indexOf(".")+3))*100.00
				var percentage = toParse + "%"
				document.getElementById("percentage").innerHTML = percentage
				document.getElementById("percentage").style.width = percentage
				progression = data.slice(1, data.indexOf(")")+1)
				data = data.slice(data.indexOf(")"), data.length)
				sleep(5000);
			}
	
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}