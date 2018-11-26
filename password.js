function obfuscate() {
    var pass = process.argv.slice(2);
    var arr = [];
    pass = pass[0];

    for (var i in pass) {
        arr.push(pass[i]);
    }
    for (var i in arr) {
        if (arr[i] == 'a') {
            arr[i] = 4;
        }
        if (arr[i] == 'e') {
            arr[i] = 3;
        }
        if (arr[i] == 'o') {
            arr[i] = 0;
        }
        if (arr[i] == 'l') {
            arr[i] = 1;
        }
    }
    pass = '';
    for (var i in arr) {
        pass += arr[i];
    }
    console.log(pass);
}


obfuscate();