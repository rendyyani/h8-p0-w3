/* //input "hello world!"
//output
"!dlrow olleh"
*/
function reverseString (str) {
    var newString = '';

    for ( i = str.length -1; i >= 0; i--) {
        newString = newString + str[i];
    }
    return newString;
}

 console.log(reverseString('hello world!'));