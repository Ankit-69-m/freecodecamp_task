function telephoneCheck(str) {
    str=str.split(" ").join("");
    var patt=/[1]?\d\d\d[-]?\d\d\d[-]?\d\d\d\d$/;
      var patt2=/[1]?[(]?\d\d\d[)]?\d\d\d[-]?\d\d\d[0-9]$/;
  console.log(patt.test(str));
    console.log(patt2.test(str));
  
    var result=false;
  
    if(patt.test(str) || patt2.test(str)){
         var temp=str.match(/\d/g);
        console.log(temp.length);
        console.log(str);
        console.log(temp);
  
         if(temp.length===11&&temp[0]!=="1")
           {
             result=false;
             console.log("11 digit and first one is any number");
  
           }else if(temp.length==10&&str.match(/[(]|[)]/g)===null){
              console.log("(Your number is corect) ");
  
              result=true;
            }else if(temp.length==10 && str.match(/[(]|[)]/g).length<2 && str.match(/[(]|[)]/).length>0){
              console.log("10 digit ");
  
              result=false;
            }else if(temp.length==10){
              console.log("10 digit ");
  
              result=true;
            }else if(temp.length===11&&str[0]==="1"&&str.match(/[(]|[)]/g)===null)
              {
                result=true;
              }else if(temp.length===11&&str[0]==="1"&&str.match(/[(]|[)]/g).length<2&&str.match(/[(]|[)]/).length>0)
              {
                result=false;
              }else if(temp.length===11&&str[0]==="1")
              {
                result=true;
              }
       }
    return result;
  }
  
  telephoneCheck("5555555555");
