var $ = require('jQuery');

var ourRequest = new XMLHttpRequest();
ourRequest.open ('GET', 'https://mydictionaryapi.appspot.com/?define=hello');
ourRequest.onload = function(){
    var theData = JSON.parse(ourRequest.responseText);
    var theWord = theData[0].word;
    var wordKeys = Object.keys(theData[0].meaning);
    //var wordDefinition = Object.values(theData[0].meaning)[0][0].definition;
    var wordDefinition = theData[0].meaning;

    /*if (theData[0].meaning.course == undefined){
        console.log ('Not a course');
    }*/

    console.log(theData);
    console.log('Word: '+theWord);
    console.log(wordKeys);
    console.log(theData[0].meaning.wordKeys);

    /*for (let i = 0; i < wordKeys.length; i++){
        //console.log (wordKeys[i]);
        console.log('Definition: '+theData[0].meaning.wordKeys[i]);
    }*/

    //console.log('Definition: '+wordDefinition);


}



ourRequest.send();