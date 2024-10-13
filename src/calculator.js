function add(numbers) {
  if (numbers === "") return 0;
  let delimeter = /[\n,]/;

  if (numbers.startsWith("//")) {
    const matchingExp = numbers.match(/\[(.*?)\]/g);

    if (matchingExp) {
      let extractedDelimiters = matchingExp.map((exp) => exp.slice(1, -1));

      extractedDelimiters = extractedDelimiters.map((delim) =>
        delim.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      ); // getting the delimiter to extract the special characters for converting it to regular expression

      delimeter = new RegExp(extractedDelimiters.join("|"), "g");

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
