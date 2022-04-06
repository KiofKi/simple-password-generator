const vowels = "aeiouAEIOU";
const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
const numbers = "0123456789";
const specialChars = "!$%()=?+#-.:~*@[]_";
const simpleBtn = document.getElementById("btn-simple");
const complexBtn = document.getElementById("btn-complex");
const extremeBtn = document.getElementById("btn-extreme");
const resetBtn = document.getElementById("btn-reset");
var result = document.getElementById("password");

function random(x) {
    r = Math.floor(Math.random() * (x));
    return r;
}

function createPasswordSimple() {
    var pw = "";
    for (i=0;i<4;i++) {
        pw += vowels[random(vowels.length)];
        pw += consonants[random(consonants.length)];
    };
    for (i=0;i<2;i++) {
        pw+= numbers[random(numbers.length)];
    }
    output(pw);
};

function createPasswordComplex() {
    var pw = "";
    var seed = vowels + consonants + numbers;
    for (i=0;i<8;i++) {
        pw += seed[random(seed.length)];
    };
    pw += specialChars[random(specialChars.length)];
    for (i=0;i<7;i++) {
        pw += seed[random(seed.length)];
    }
    output(pw);
};

function createPasswordExtreme() {
    var pw = "";
    seed1 = vowels + consonants;
    seed2 = vowels + consonants + numbers + specialChars;
    pw += seed1[random(seed1.length)];
    for (i=0;i<30;i++) {
        pw += seed2[random(seed2.length)];
    };
    pw += seed1[random(seed1.length)];
    output(pw);
};

function reset() {
    result.innerHTML = "";
};

function output(password) {
    result.innerHTML += `<p>${password}</p>`;
    setResultDivMaxHeight();
}

function setResultDivMaxHeight() {
    var substractHeight = document.querySelector(".buttons").offsetHeight + document.querySelector("h1").offsetHeight + document.querySelector("h2").offsetHeight;
    result.style.maxHeight = `calc(80vh - ${substractHeight}px)`;
}

simpleBtn.addEventListener('click', createPasswordSimple);
complexBtn.addEventListener('click', createPasswordComplex);
extremeBtn.addEventListener('click', createPasswordExtreme);
resetBtn.addEventListener('click', reset);