function rot13(str) {
    let charCode = 0
    let strArr = []
    strArr = str.split("") 
    for (let i = 0; i < strArr.length; i++){ 
      charCode = str.charCodeAt(i) 
    if (charCode >= 65 && charCode <= 90){
      if (charCode > 77){ 
        charCode = charCode - 13
      } else {
        charCode = charCode + 13
      }
      strArr.splice(i,1,String.fromCharCode(charCode))
    }
    }
    return strArr.join('');
  }
  rot13("SERR PBQR PNZC");
  
  console.log(rot13("I LOVE JavaScript!"))
  
  console.log(rot13("V YBIR WavaFcript!!"))
