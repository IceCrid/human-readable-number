module.exports = function toReadable (number) {
  const numberArray = Array.from(number.toString());
  const zero = ['zero'];
  const firstTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const twentyToOneHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = ['hundred'];

  if (number === 0) {return zero[number];} 
  if (number < 10) {return firstTen[number];}
  if (number >= 10 && number < 20) {return tenToTwenty[number - tenToTwenty.length];}
  if (number === 20) {return twentyToOneHundred[0];}
  if (number > 20 && number < 100 && numberArray.length === 2) {
    if (numberArray[1] == 0) {
      return `${twentyToOneHundred[numberArray[0]-2]}`;
    } else {
      return `${twentyToOneHundred[numberArray[0]-2].trim()} ${firstTen[numberArray[1]].trim()}`;
    }
  }
  if (number >= 100 && number < 1000) {
    if (numberArray[1] == 0 && numberArray[2] == 0) {
      return `${firstTen[numberArray[0]]} ${hundred[0]}`;
    } else if (numberArray[1] == 1 && numberArray[2] <= 9) {
      return `${firstTen[numberArray[0]]} ${hundred[0]} ${tenToTwenty[numberArray[2]]}`;
    }
    else if ((numberArray[0] > 0 && numberArray[0] <= 9) && numberArray[1] >= 2 && numberArray[1] <= 9 && numberArray[2] == 0) {
      return `${firstTen[numberArray[0]]} ${hundred[0]} ${twentyToOneHundred[numberArray[1]-2]}`;
    }
    else if ((numberArray[0] > 0 && numberArray[0] <= 9) && numberArray[1] >= 2 && numberArray[1] <= 9 && numberArray[2] > 0 && numberArray[2] < 10) {
      return `${firstTen[numberArray[0]]} ${hundred[0]} ${twentyToOneHundred[numberArray[1]-2]} ${firstTen[numberArray[2]]}`;
    }
    else {
      return `${firstTen[numberArray[0]]} ${hundred[0]} ${firstTen[numberArray[2]]}`
    }
  }

  return number;
}
