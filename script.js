function GeneratePassword() {
    lcase = document.getElementById("lcase");
    ucase = document.getElementById("ucase");
    scase = document.getElementById("scase");
    resultText = document.getElementById("resultText");
    let lcasesym = "abcdefghijklmnopqrstuvwxyz";
    let ucasesym = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let scasesym = "0123456789";
    let available = "";
    if (lcase.checked) {
        available = available + lcasesym;
    }
    if (ucase.checked) {
        available = available + ucasesym;
    }
    if (scase.checked) {
        available = available + scasesym;
    }
    if (available.length == 0) return;
    let result = "";
    for (let i = 0; i < 24; i++) {
        result = result + available[random(0, available.length)];
    }
    resultText.value = result;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

