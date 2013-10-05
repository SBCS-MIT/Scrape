    /* We need to take CSS selectors from our mouse selection */ 

var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();

var selectionSelectors = function(){
    var selObj = window.getSelection();
    var range  = selObj.getRangeAt(0);
    var selector = range.startContainer.parentNode;
    var arrayOfClasses = new Array();    
    while(!hasClass(selector)){
        // TODO: what if there are no classes anywhere, infinite loop?
        selector = $(selector).parent();
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
