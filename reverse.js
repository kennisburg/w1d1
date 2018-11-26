var words = process.argv.slice(2);

function reverse() {
    let arr = [];
    let arr2 = [];
    for (var i in words) {
        for (var j in words[i]) {
            arr.push(words[i][j]);
        }
        for (var k = arr.length - 1; k >= 0; k--) {
            arr2.push(arr[k]);
        }
        arr = [];
        var word = '';
        for (var l in arr2) {
            word += arr2[l];
        }
        arr2 = [];
        console.log(word);
    }
}

reverse();