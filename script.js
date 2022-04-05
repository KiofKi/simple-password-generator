const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const umlauts = "ÄäÖöÜüßáàâéèêíìîóòû";
const specialChars = "!$%()=?+#-.:~*@[]_";
const simpleSeed = lowerCaseLetters + upperCaseLetters + numbers
const complexSeed = lowerCaseLetters + upperCaseLetters + numbers + specialChars;
const extremeSeed = lowerCaseLetters + upperCaseLetters + numbers + umlauts + specialChars;
var result = document.getElementById("password");


function random(x) {
    r = Math.floor(Math.random() * (x));
    return r;
}

function createPasswordSimple() {
    var pw = "";
    for (i=0;i<10;i++) {
        var char = random(simpleSeed.length);
        pw += simpleSeed[char];
    };
    result.innerHTML += `<p>${pw}</p>`;
};

function createPasswordComplex() {
    var pw = "";
    for (i=0;i<20;i++) {
        var char = random(complexSeed.length);
        pw += complexSeed[char];
    };
    result.innerHTML += `<p>${pw}</p>`;
};

function createPasswordExtreme() {
    var pw = "";
    for (i=0;i<32;i++) {
        var char = random(extremeSeed.length);
        pw += extremeSeed[char];
    };
    result.innerHTML += `<p>${pw}</p>`;
};

function reset() {
    result.innerHTML = "";
};