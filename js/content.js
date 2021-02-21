console.log("extension is running!")

var stickers = [chrome.runtime.getURL("../images/lotr1.gif"),
                chrome.runtime.getURL("../images/lotr2.gif"),
                chrome.runtime.getURL("../images/lotr3.gif"),
                chrome.runtime.getURL("../images/lotr4.gif"),
                chrome.runtime.getURL("../images/dragon.gif"),
                chrome.runtime.getURL("../images/dragon2.gif"),
                chrome.runtime.getURL("../images/skyrim1.gif"),
                chrome.runtime.getURL("../images/skyrim2.gif"),
                chrome.runtime.getURL("../images/skyrim3.gif"),
                chrome.runtime.getURL("../images/skyrim4.gif")];

var sounds = [chrome.runtime.getURL("../sounds/hptheme.mp3"),
              chrome.runtime.getURL("../sounds/kneearrow.mp3"),
              chrome.runtime.getURL("../sounds/shallnotpass.mp3"),
              chrome.runtime.getURL("../sounds/skyrimdrum.mp3"),
              chrome.runtime.getURL("../sounds/skyrimlvlup.mp3")];
    


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

$("body").on("click", function(){
    (this).text("UGHHHHHHH")
    console.log(WORKING)
});

//$("header").after("<img src=" + imgURL + " class='wow'>");
//console.log("wow?");









// TRY: updating the text content of an element or set of elements on one or more pages

// TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.