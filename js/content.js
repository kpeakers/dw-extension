console.log("extension is running!");

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

    
//var backgrounds = [dusk, forest, moss, horizon];

// ^^ How to access content

function playRandomSound(){

      //An array to house all of the URLs of your sounds
   
var sounds = [chrome.runtime.getURL("../sounds/hptheme.mp3"),
              chrome.runtime.getURL("../sounds/kneearrow.mp3"),
              chrome.runtime.getURL("../sounds/shallnotpass.mp3"),
              chrome.runtime.getURL("../sounds/skyrimdrum.mp3"),
              chrome.runtime.getURL("../sounds/skyrimlvlup.mp3")];
      
      //This line will select a random sound to play out of your provided URLS
      var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
      
      //Find the player element that you created and generate an embed file to play the sound within it
      document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

// ^^ https://forums.asp.net/t/1876176.aspx?Making+a+random+sound+play+when+a+button+is+clicked

$("body").on("click", function playRandomSound(){
    
    console.log("PLAYING");
    
});




//function random_sticker(stickers) {
//    return stickers[Math.floor(Math.random()*stickers.length)];
//}
//console.log(random_sticker(stickers));

// ^^  https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php


// START OF WORD REPLACEMENT PIECE

var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/Your /gi, "Ye ole' ");
  value = value.replace(/your /gi, "ye ole' ");
    
  value = value.replace(/You're/gi, "Ye be");
  value = value.replace(/you're/gi, "ye be");
    
  value = value.replace(/The /gi, "Thee ");
  value = value.replace(/the /gi, "thee ");
    
  value = value.replace(/Error 404/gi, "YOU SHALL NOT PASS");
  value = value.replace(/error 404/gi, "YOU SHALL NOT PASS");
    
  value = value.replace(/Trump/gi, "Sauron");
  value = value.replace(/TRUMP/gi, "SAURON");
    
  value = value.replace(/But /gi, "Alas ");
  value = value.replace(/but /gi, "alas ");
    
  value = value.replace(/Yes/gi, "Aye");
  value = value.replace(/yes/gi, "aye");  
    
  value = value.replace(/No /gi, "Nay ");
  value = value.replace(/no /gi, "nay "); 
    
  value = value.replace(/Here /gi, "Hither ");
  value = value.replace(/here /gi, "hither "); 
    
  value = value.replace(/Covid-19/gi, "The Plague");
  value = value.replace(/COVID-19/gi, "THE PLAGUE"); 
  value = value.replace(/covid-19/gi, "the plague");
    
  value = value.replace(/I /gi, "Thine ");
    
  value = value.replace(/You /gi, "Ye ");
  value = value.replace(/you /gi, "ye "); 
    
  value = value.replace(/My /gi, "Mine ");
  value = value.replace(/my /gi, "mine "); 
     
    
  node.nodeValue = value;
}

window.onload = findAndReplace();

//  ^^ CODE FROM https://nkhilv.medium.com/how-to-make-a-word-replacement-chrome-extension-17cbd3639db6

