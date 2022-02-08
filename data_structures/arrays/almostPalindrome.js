const validSubPalindrome = function (s, left, right){
    while(left < right){
        if (s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true
}

function almostPalindrome(s){
    // is string a valid palindrome?
    let left = 0
    let right = s.length - 1

    while (left < right ){
        if (s[left] !== s[right]){
            return validSubPalindrome(s, left + 1, right - 1) || validSubPalindrome(s, left, right - 1)
        }
        left++
        right--
    }
    return true
}