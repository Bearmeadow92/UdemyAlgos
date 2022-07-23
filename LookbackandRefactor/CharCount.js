function charCount(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        //turns character to lower case
        var char = str[i].toLowerCase();
        //Tests if character is lowercase and allows only lower case and numbers to be counted//
        if (/[a-z0-9]/.test(char)) {
            //if its more than 0 ad 1//
            if (obj [char] > 0){
                obj [char] ++;
            } else {
                //otherwise initilize to one//
                obj [char] = 1;
            };
        }
    }
    return obj;
}

console.log(charCount("Hello 42"))


// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         char = char.toLowerCase();
//         if(/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }