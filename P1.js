//Write a JavaScript function that accepts a sentence of words all in lowercase,
// and returns every other word in all caps. Hint: see toUppercase()
//
// ex. in a galaxy far far away -> in A galaxy FAR far AWAY

function main() {
    problem1();
    // problem2();
}
function problem1() {
var sentence = "I am amazing";
    function newString(str) {
        var sent = str.split(' ');

        for (var i = 0; i < sent.length; i++) {

            let word = sent[i];

            // if(i%2===0)
            {
                word = word.toUpperCase();
            }

            console.log(word);
        }

    }
    newString("I am amazing");

}


// Write a JavaScript function that accepts a word in all lowercase or in all uppercase, and returns the word in the opposite case. Hint: see toLowercase()
//
// ex. hello -> HELLO or HOWDY -> howdy
function problem2() {
    // var sentence = 'The quick brown fox jumps over the lazy dog.';
    //
    // console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."
    var sentence
}
{

}
main();
