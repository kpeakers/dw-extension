console.log("extension is running!")

var sticker = [chrome.runtime.getURL("../images/lotr1.gif"),
             chrome.runtime.getURL("../images/lotr2.gif")];


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

$("h1").on("click", function(){
    (this).text("UGHHHHHHH")
    console.log(WORKING)
});

//$("header").after("<img src=" + imgURL + " class='wow'>");
//console.log("wow?");









// TRY: updating the text content of an element or set of elements on one or more pages

// TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.