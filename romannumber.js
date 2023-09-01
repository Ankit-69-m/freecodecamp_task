function convertToRoman(num) {
  let romannumber = "";
  let remainingvalue;
  
  remainingvalue = num / 1000;
  romannumber = addRoman(romannumber, remainingvalue, "M");
  num = num % 1000;

  remainingvalue = num/900;
  romannumber = addRoman(romannumber, remainingvalue, "CM");
  num = num % 900;

  remainingvalue = num/500;
  romannumber = addRoman(romannumber, remainingvalue, "D");
  num = num % 500;

  remainingvalue = num/400;
  romannumber = addRoman(romannumber, remainingvalue, "CD");
  num = num % 400;

  remainingvalue = num/100;
  romannumber = addRoman(romannumber, remainingvalue, "C");
  num = num % 100;

  remainingvalue = num/90;
  romannumber = addRoman(romannumber, remainingvalue, "XC");
  num = num % 90;

  remainingvalue = num/50;
  romannumber = addRoman(romannumber, remainingvalue, "L");
  num = num % 50;

  remainingvalue = num/40;
  romannumber = addRoman(romannumber, remainingvalue, "XL");
  num = num % 40;

  remainingvalue = num/10;
  romannumber = addRoman(romannumber, remainingvalue, "X");
  num = num % 10;

  remainingvalue = num/9;
  romannumber = addRoman(romannumber, remainingvalue, "IX");
  num = num % 9;

  remainingvalue = num/5;
  romannumber = addRoman(romannumber, remainingvalue, "V");
  num = num % 5;

  remainingvalue = num/4;
  romannumber = addRoman(romannumber, remainingvalue, "IV");
  num = num % 4;

  remainingvalue = num/1;
  romannumber = addRoman(romannumber, remainingvalue, "I");
//   num = num % 1;

  return romannumber;
}

function addRoman(romannumber, remainingvalue, symbol) {
  for (let i = 1; i <= remainingvalue; i++) {
    romannumber = romannumber + symbol;
  }
  return romannumber;
}

console.log(convertToRoman(36));