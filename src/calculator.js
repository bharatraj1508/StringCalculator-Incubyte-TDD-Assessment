function add(numbers) {
  if (numbers === "") return 0;
  let delimeter = /[\n,]/;

  if (numbers.startsWith("//")) {
    delimeter = new RegExp(numbers[2]);
    numbers = numbers.slice(3);
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
