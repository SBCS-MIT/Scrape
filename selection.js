/* We need to take CSS selectors from our mouse selection */ 

var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();

var selectionSelectors = function(){
    var selObj = window.getSelection();
    var range  = selObj.getRangeAt(0);
    var selector = range.startContainer.parentNode;   // TODO: may not work in IE, see http://stackoverflow.com/questions/1335252/how-can-i-get-the-dom-element-which-contains-the-current-selection
    var classesAndIDs = new Array();
    
    classesAndIDs.push($(selector).css('class'));
    classesAndIDs.push($(selector).css('id'));
    
    //test
    console.log(hasClassOrID(classesAndIDs));
 
    console.log(selObj);
    console.log(range);
    console.log(classesAndIDs);
}

var hasClassOrID = function(node){
    if(node.id || node.classList) return true;
    else return false;
}
