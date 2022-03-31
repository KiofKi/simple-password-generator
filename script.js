const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const umlauts = "ÄäÖöÜüßáàâéèêíìîóòû";
const specialChars = "@€>^°!§$%&()=?{[]}+*~#-_+";
var result = document.getElementById("password");

function createPasswordSimple() {
    const seed = lowerCaseLetters + upperCaseLetters + numbers;
    var pw = "";
    for (i=0;i<8;i++) {
        var char = Math.floor(Math.random() * (seed.length));
        pw += seed[char];
    };
    result.innerHTML += "<p>" + pw + "</p>";
};

function createPasswordComplex() {
    const seed = lowerCaseLetters + lowerCaseLetters + upperCaseLetters + upperCaseLetters + numbers + umlauts;
    var pw = "";
    for (i=0;i<16;i++) {
        var char = Math.floor(Math.random() * (seed.length));
        pw += seed[char];
    };
    result.innerHTML += "<p>" + pw + "</p>";
};

function createPasswordExtreme() {
    const seed = lowerCaseLetters + lowerCaseLetters + upperCaseLetters + upperCaseLetters + numbers + umlauts + specialChars;
    var pw = "";
    for (i=0;i<32;i++) {
        var char = Math.floor(Math.random() * (seed.length));
        pw += seed[char];
    };
    result.innerHTML += "<p>" + pw + "</p>";
};

function reset() {
    result.innerHTML = "";
};