console.log("extension is running!")

var imgURL = chrome.runtime.getURL("../images/wow.gif");

// ^^ How to access content

//chrome.runtime.onMessage.addListener(
//function(request)	{
//alert(request.message);
//		}
//);
//
//chrome.runtime.onMessage.addListener(
//function(request,	sender,	sendResponse)	{
//console.log(request.message);
//sendResponse({farewell:	"goodbye"});
//		}
//);

// ^^ Talking to popup i think?

$("header").after("<img src=" + imgURL + " class='wow'>");
console.log("wow?");

$("p").after("yoyo from yo extension")

$(".hero-header .brand-header span").text("YO WTF")


$("main").after("<img src='images/wow.gif'>");


// TRY: updating the text content of an element or set of elements on one or more pages

// TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.