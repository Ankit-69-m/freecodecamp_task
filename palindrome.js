function palindrome(str) {
  const reg = /[a-z0-9]/i;
    const accReg = /[À-ÿ]/i;
    const accChars = {
      à: 'a',
      â: 'a',
      ç: 'c',
      é: 'e',
      è: 'e',
      ê: 'e',
      ë: 'e',
      î: 'i',
      ï: 'i',
      ô: 'o',
      û: 'u',
      ù: 'u',
      ü: 'u'
    }

    let strArr = str
                    .toLowerCase()
                    .split('');
    
    function removeNonAlphaNum(arr){
      const removedArr = [];
      arr.forEach(character => {
        if (reg.test(character)){
          removedArr.push(character);
        } else if (accReg.test(character)){
          removedArr.push(accChars[character]);
        }
      })
      return removedArr;
    }
    
    function checkPali(arr,reversedArr){
      return Array.isArray(arr) &&
              Array.isArray(reversedArr) &&
              arr.length === reversedArr.length &&
              arr.every((val, index) => val === reversedArr[index]);
    }
    
    strArr = removeNonAlphaNum(strArr);
    const reversedArr = strArr.slice().reverse();
    return checkPali(strArr, reversedArr);
  
  return true;
}

palindrome("eye");