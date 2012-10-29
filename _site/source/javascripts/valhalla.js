$(function(){
	
	// If the first line of a post is just a link with nothing else make the 
	// title of the post become the link.
	$("article").each(function(){
		if (($(this).find("h2").text() == $(this).find("p:first-child a").text()) && $(this).find("p:first-child a").text() != "") {
			var title = $(this).find("h2").text();
			$(this).find("h2").empty().append("<a href='" + $(this).find("p:first-child a").attr("href") + "'>" + title + "</a>");
			$(this).find("p:first-child").remove();
		}
	});
	
	
});