console.log("extension is running!");


var pickedSticker;

var num = 0;
    
function randomSticker(){
    
    var stickers = [chrome.runtime.getURL("images/lotr1.gif"),
                chrome.runtime.getURL("images/lotr2.gif"),
                chrome.runtime.getURL("images/lotr3.gif"),
                chrome.runtime.getURL("images/lotr4.gif"),
                chrome.runtime.getURL("images/dragon.gif"),
                chrome.runtime.getURL("images/dragon2.gif"),
                chrome.runtime.getURL("images/skyrim1.gif"),
                chrome.runtime.getURL("images/skyrim2.gif"),
                chrome.runtime.getURL("images/skyrim3.gif"),
                chrome.runtime.getURL("images/skyrim4.gif")
               ];
    
   pickedSticker = stickers[Math.floor(Math.random()*stickers.length)];
    
    

};
    
$("body").on("click", function(){
    randomSticker();
    $(this).prepend('<img src="' + pickedSticker + '"S class="sticker' + num + '">');
    num++;
    
    // MAKE NUM = 0, click >> num++; CSS: .sticker0 : all rules 
    
    
     console.log ("STICKING");
    
    $("img").on("click", function(){
    
    playRandomSound();
    console.log("PLAYING");
    
});
    
});

//function random_sticker(stickers) {
//    return stickers[Math.floor(Math.random()*stickers.length)];
//}
//console.log(random_sticker(stickers));

// ^^  https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php




// Z INDEX TO PLACE IN FRONT 


function playRandomSound(){

//      //An array to house all of the URLs of your sounds
   
var sounds = [chrome.runtime.getURL("sounds/hptheme.mp3"),
              chrome.runtime.getURL("sounds/kneearrow.mp3"),
              chrome.runtime.getURL("sounds/shallnotpass.mp3"),
              chrome.runtime.getURL("sounds/skyrimdrum.mp3"),
              chrome.runtime.getURL("sounds/skyrimlvlup.mp3")];
      
      //This line will select a random sound to play out of your provided URLS
      var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
      
    

    $("body").prepend("<audio autoplay> <source src=\"" +soundFile+ "\" type=\"audio/mpeg\"></audio>");
    

}















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

