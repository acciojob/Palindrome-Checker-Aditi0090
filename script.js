function palindrome(str){
    let cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = palindrome;
