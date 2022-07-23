// function charCount(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         //turns character to lower case
//         var char = str[i].toLowerCase();
//         //Tests if character is lowercase and allows only lower case and numbers to be counted//
//         if (/[a-z0-9]/.test(char)) {
//             //if its more than 0 ad 1//
//             if (obj [char] > 0){
//                 obj [char] ++;
//             } else {
//                 //otherwise initilize to one//
//                 obj [char] = 1;
//             };
//         }
//     }
//     return obj;
// }

// console.log(charCount("Hello 42"))

//Refactored
function charCount(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code > 96 && code < 123)) //lower alpha (a-z)
    {
    return false;
    }
    return true;
}