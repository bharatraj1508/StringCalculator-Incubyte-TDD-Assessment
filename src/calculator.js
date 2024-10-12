function add(numbers) {
  if (numbers === "") return 0;
  else if (numbers.includes(",")) {
    let numArray = numbers.split(",");
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  } else {
    return parseInt(numbers);
  }
}

module.exports = { add };
