function getParams()
{
	if (jQuery.getUrlParams("perc") == null) 
	{
		alert("oops, something went wrong serverside");
	} 
	else 
	{
		var percentage = getUrlParams("perc") + "%";
		document.getElementById("percentage").innerHtml = percentage;
		document.getElementById("percentage").style = "width:" + percentage;
	}
}