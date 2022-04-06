const vowels = "aeiouy";
const consonants = "bcdfghjklmnpqrstvwxz"
const numbers = "0123456789";
const specialChars = "!$%()=?+#-.:~*@[]_";
var result = document.getElementById("password");


function random(x) {
    r = Math.floor(Math.random() * (x));
    return r;
}

function createPasswordSimple() {
    var pw = "";
    seed1 = vowels + vowels.toUpperCase();
    seed2 = consonants + consonants.toUpperCase();
    for (i=0;i<4;i++) {
        pw += seed1[random(seed1.length)];
        pw += seed2[random(seed2.length)];
    };
    for (i=0;i<2;i++) {
        pw+= numbers[random(numbers.length)];
    }
    output(pw);
};

function createPasswordComplex() {
    var pw = "";
    var seed = vowels + vowels.toUpperCase() + consonants + consonants.toUpperCase() + numbers;
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
    seed1 = vowels + vowels.toUpperCase() + consonants + consonants.toUpperCase();
    seed2 = vowels + vowels.toUpperCase() + consonants + consonants.toUpperCase() + numbers + specialChars;
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

function output(pw) {
    result.innerHTML += `<p>${pw}</p>`;
}