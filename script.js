function GeneratePassword() {
    lcase = document.getElementById("lcase");
    ucase = document.getElementById("ucase");
    
    resultText = document.getElementById("resultText");
    let lcasesym = "abcdefghijklmnopqrstuvwxyz";
    let ucasesym = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let available = "";
    if (lcase.checked) {
        available = available + lcasesym;
    }
    if (ucase.checked) {
        available = available + ucasesym;
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

