function add(numbers) {
  if (numbers === "") return 0;
  if (parseInt(numbers) < 0)
    throw new Error(`negative numbers not allowed ${parseInt(numbers)}`);

  let delimeter = /[\n,]/;

  if (numbers.startsWith("//")) {
    delimeter = new RegExp(numbers[2]);
    numbers = numbers.slice(3);
  }

  let numArray = numbers.split(delimeter);
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
