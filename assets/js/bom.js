/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 

/*
structure 
.collections
    .collection-item
        .badge


*/

const collectionList = document.getElementsByClassName("collection");

const [locationElement,browserElement,screenElement,historyElement] = collectionList;

const [hrefElement,protocolElement,hostElement,portElement,hostNameElement] = locationElement.getElementsByClassName("collection-item");
const [appNameElement,appVersionElement,platformElement,languageElement,cookieEnabledElement] = browserElement.getElementsByClassName("collection-item");
const [heightElement,widthElement,pixelDepthElement] = screenElement.getElementsByClassName("collection-item");
const [lengthElement,stateElement] = historyElement.getElementsByClassName("collection-item");

let hrefElementBadge = hrefElement.getElementsByClassName("badge")[0];
let protocolElementBadge = protocolElement.getElementsByClassName("badge")[0];
let hostElementBadge = hostElement.getElementsByClassName("badge")[0];
let portElementBadge = portElement.getElementsByClassName("badge")[0];
let hostNameElementBadge = hostNameElement.getElementsByClassName("badge")[0];

let appNameElementBadge = appNameElement.getElementsByClassName("badge")[0];
let appVersionElementBadge = appVersionElement.getElementsByClassName("badge")[0];
let platformElementBadge = platformElement.getElementsByClassName("badge")[0];
let languageElementBadge = languageElement.getElementsByClassName("badge")[0];
let cookieEnabledElementBadge = cookieEnabledElement.getElementsByClassName("badge")[0];
let heightElementBadge = heightElement.getElementsByClassName("badge")[0];
let widthElementBadge = widthElement.getElementsByClassName("badge")[0];
let pixelDepthElementBadge = pixelDepthElement.getElementsByClassName("badge")[0];
let lengthElementBadge = lengthElement.getElementsByClassName("badge")[0];
let stateElementBadge = stateElement.getElementsByClassName("badge")[0];


// window.addEventListener('DOMContentLoaded',(e)=>{
    
    
// })


// Display the BOM Information on the innerHTML of the elements

 hrefElementBadge.innerText= location.href;
 protocolElementBadge.innerText= location.protocol;
 hostElementBadge.innerText= location.host;
 portElementBadge.innerText= location.port;
 hostNameElementBadge.innerText= location.hostname;
 appNameElementBadge.innerText= navigator.appName;
 appVersionElementBadge.innerText=navigator.appVersion;
 platformElementBadge.innerText=navigator.platform;
 languageElementBadge.innerText=navigator.language;
 cookieEnabledElementBadge.innerText=navigator.cookieEnabled;
 heightElementBadge.innerText=screen.height;
 widthElementBadge.innerText=screen.width;
 pixelDepthElementBadge.innerText=screen.pixelDepth;
 lengthElementBadge.innerText=history.length;
 stateElementBadge.innerText=history.state;