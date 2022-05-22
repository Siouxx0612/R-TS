function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    // if( typeof n1 !== 'number' || typeof n2 !== 'number' ) {
    //     throw new Error('Incorrect input');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result
    }
    // console.log(typeof number1)
    // return n1 + n2
}

var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase);

// console.log(result, 'Something Something says little YODA YODA');