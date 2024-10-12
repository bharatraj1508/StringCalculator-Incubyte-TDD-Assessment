function add(numbers) {
  if (numbers === "") return 0;
  else if (numbers.includes(",") || numbers.includes("\n")) {
    let numArray = numbers.split(/[\n,]/);
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  } else {
    return parseInt(numbers);
  }
}

module.exports = { add };
