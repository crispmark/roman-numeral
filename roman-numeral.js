var numerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
//Given a number, return its roman numeral
function toRomanNumeral(n) {
  if (!isPositiveInteger) {
    throw new Error(n + " is not a positive integer");
  }
  if (n >= numerals.M) {
    return getNumeralFragment(n, "M") + toRomanNumeral(n%numerals.M);
  }
  else if (n%numerals.M >= numerals.M - numerals.C) {
    return "CM" + toRomanNumeral(n%numerals.M + numerals.C - numerals.M);
  }
  else if (n >= numerals.D) {
    return getNumeralFragment(n, "D") + toRomanNumeral(n%numerals.D);
  }
  else if (n >= numerals.C) {
    return getNumeralFragment(n, "C") + toRomanNumeral(n%numerals.C);
  }
  else if (n%numerals.C >= numerals.C - numerals.X) {
    return "XC" + toRomanNumeral(n%numerals.C + numerals.X - numerals.C);
  }
  else if (n >= numerals.L) {
    return getNumeralFragment(n, "L") + toRomanNumeral(n%numerals.L);
  }
  else if (n >= numerals.X) {
    return getNumeralFragment(n, "X") + toRomanNumeral(n%numerals.X);
  }
  else if (n%numerals.X >= numerals.X - numerals.I) {
    return "IX" + toRomanNumeral(n%numerals.X + numerals.I - numerals.X);
  }
  else if (n >= numerals.V) {
    return getNumeralFragment(n, "V") + toRomanNumeral(n%numerals.V);
  }
  else if (n%numerals.V >= numerals.V - numerals.I) {
    return "IV" + toRomanNumeral(n%numerals.V + numerals.I - numerals.V);
  }
  else {
    return getNumeralFragment(n, "I");
  }
}

//Given a variable, determine if it is a positive integer
function isPositiveInteger(n) {
  return (typeof n==='number' && (n%1)===0 && n >= 0);
}

//Given a number n, a string numeral representing a roman numeral, return a
//string with the numerals of type numeral necessary to represent the number
function getNumeralFragment(n, numeral) {
  var count = Math.floor(n/numerals[numeral]);
  var str = "";
  for (var i = 0; i < count; i++) {
    str += numeral;
  }
  return str;
}
//Inserts a numeral in the second to last position, to allow for numerals such
//as IV and XL
function insertNumeral(fragment, numeral) {
  return fragment.split(0, fragment.length-1) + numeral + fragment.split(fragment.length-1);
}

console.log(toRomanNumeral(4999));
