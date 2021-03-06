/* Given a signed integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.


Example 1:
    Input: x = 123
    Output: 321 

Example 2:
    Input: x = -123
    Output: -321


*/

const reversedInteger = function(x) {
    // convert int => array using .toString() and .split()
    // reverse array using .reverse()
    // retrieve the absolute of the value x
    let reversed = Math.abs(x).toString().split('').reverse().join('');

    // if the value of reversed is greater than 2^31 power return 0
    if (reversed > 2**31) return 0

    // return reversed * either positive or negative; depending on what x was originally
    return reversed * Math.sign(x)


    
    /* // if the array at the first index equals 0
    // shift off the zero
    if (reversed[0] === 0){
            reversed.shift()
    }
    // if the last item of the array is '-'
    // 
    if (reversed[reversed.length - 1] === '-'){
        reversed.pop()
    }

    return reversed */
    
}