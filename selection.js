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
    while(!hasClass(selector)){
        // TODO: what if there are no classes anywhere, infinite loop?
        selector = $(selector).parent();
    }
   
    return $(selector).attr('class');
}

var hasClass = function(node){
    console.log($(node));
    if($(node).attr('class')) 
        return true;
    else 
        return false;
}
