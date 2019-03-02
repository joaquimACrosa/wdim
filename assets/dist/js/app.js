

$('.card-block').on('click', function () {
    $('.card-block').toggleClass('flipped');
});

var unirest = require('unirest');

unirest.get("https://wordsapiv1.p.rapidapi.com/words/incredible/definitions")
.header("X-RapidAPI-Key", "1620442b37mshf2b5fac9ea7a4c5p14805fjsn19d44e0d75cf")
.end(function (result) {
    console.log(result.status, result.headers, result.body);
});