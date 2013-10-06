/* We need to take CSS selectors from our mouse selection */ 

var jq = document.createElement('script');
jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
// if no jQuery object this causes error:
//jQuery.noConflict();

var bg = "scrapy-hover-background";

var selectionSelectors = function(){
    var selObj = window.getSelection();
    var range  = selObj.getRangeAt(0);
    var selector = range.startContainer.parentNode;
    var arrayOfClasses = new Array();    
    while(!hasClass(selector)){
        // TODO: what if there are no classes anywhere, infinite loop?
        selector = $(selector).parent();
    }
	
	var allClasses = $(selector).attr("class").split(" ");
	for (var i=0;i<allClasses.length;i++) {
	alert(allClasses[i]);
		arrayOfClasses.push(allClasses[i]);
	}
    arrayOfClasses.push($(selector).attr("class"));
   
    return arrayOfClasses;
}

var hasClass = function(node){
    console.log($(node));
    if($(node).attr('class')) 
        return true;
    else 
        return false;
}

var highlightFieldsWithClass = function(arrayOfClasses){
    for (var i=0; i<arrayOfClasses.length; i++) {
        $("."+arrayOfClasses[i]).css('background-color', 'blue');
    }
}

var run = function(){
    highlightFieldsWithClass(selectionSelectors());
}

$('body').on("click", "p", function(eventObject){   // TODO: this actually needs to be more general than paragraphs.
    $(this).css("background-color", "yellow");
});

var bgcolor;
$('body').find('*').each(function(index, element){
    console.log($(element).attr('class'));
    if($(element).attr('class') !== ""){
        $(element).hover(function(){
            bgcolor = $(this).css("background-color");
            $(element).css("background-color", "orange");
        }, function(){
            $(element).css("background-color", bgcolor);
        });
    }
});

