function add(numbers) {
  if (numbers === "") return 0;
  let delimeter = /[\n,]/;

  if (numbers.startsWith("//")) {
    // Get the matching expression within the square bracket
    // /\[(.*)\]/ is the regular expression for matching the condition
    // This means anything inside the square bracket that are grouped together, contains the delimeter.
    // It will return an array.
    const matchingExp = numbers.match(/\[(.*)\]/);

    if (matchingExp) {
      delimeter = matchingExp[1]; // this will return an array which contains the delimeter at its 2nd index
      const tempNum = numbers.split("\n"); // split the string between new line
      numbers = tempNum[1]; // 2nd index contains the actual number with delimiter
    } else {
      delimeter = new RegExp(numbers[2]);
      numbers = numbers.slice(3);
    }
  }

  let numArray = numbers.split(delimeter);
  numArray = numArray.filter((num) => num < 1000);

  let negativeArray = [];

  for (let num of numArray) {
    if (parseInt(num) < 0) negativeArray.push(parseInt(num));
  }

  if (negativeArray.length > 0)
    throw new Error(`negative numbers not allowed ${negativeArray.join(",")}`);

  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
