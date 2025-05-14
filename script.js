function GeneratePassword() {
    lcase = document.getElementById("lcase");
   
    resultText = document.getElementById("resultText");
    let lcasesym = "abcdefghijklmnopqrstuvwxyz";
    
    let available = "";
    if (lcase.checked) {
        available = available + lcasesym;
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

