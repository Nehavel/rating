function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function findPalindromes(s) {
    let result = [];

    // Iterate over all substrings
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substring = s.substring(i, j);
            if (substring.length > 1 && isPalindrome(substring)) {
                result.push(substring);
            }
        }
    }

    return result;
}

let input = "madam";
console.log(findPalindromes(input)); // Output: ['madam', 'ada']
