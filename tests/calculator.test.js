const { add } = require("../src/calculator");

// Test Case 1: For empty string
function testForEmptyString() {
  const result = add("");
  console.assert(result === 0, `Expected result 0 but got ${result}`);
  console.log(
    result === 0 ? "Test case 1 passed for empty string" : "Test 1 failed"
  );
}

//Test Case 2: For one number string
function testForOneNumber() {
  const result = add("2");
  console.assert(result === 2, `Expected result 2 but got ${result}`);
  console.log(
    result === 2 ? "Test case 2 passed for single number" : "Test 2 failed"
  );
}

//Test Case 3: For two numbers string
function testForTwoNumbers() {
  const result = add("2,3");
  console.assert(result === 5, `Expected result 5 but got ${result}`);
  console.log(
    result === 5 ? "Test case 3 passed for two numbers" : "Test 3 failed"
  );
}

// PART 2: MULTIPLE NUMBERS

//Test Case 4: For more than two numbers string
function tesetForMultipleNumbers() {
  const result = add("4,5,2,4,8");
  console.assert(result === 23, `Expected result 23 but got ${result}`);
  console.log(
    result === 23 ? "Test case 4 passed for multiple numbers" : "Test 4 failed"
  );
}

// PART 3: FOR NEW LINES BETWEEN NUMBERS

// Test Case 5: For new lines between numbers
function testForNewLinesBetweenNumbers() {
  const result = add("4,2,3\n5\n8,6");
  console.assert(result === 28, `Expected result 28 but got ${result}`);
  console.log(
    result === 28
      ? `Test case 5 passed with result ${result}`
      : "Test case 5 failed"
  );
}

// Test Case 6: For new lines between numbers
function testForNewLinesBetweenNumbers2() {
  const result = add("1\n2,3");
  console.assert(result === 6, `Expected result 6 but got ${result}`);
  console.log(
    result === 6
      ? `Test case 6 passed with result ${result}`
      : "Test case 6 failed"
  );
}

testForEmptyString();
testForOneNumber();
testForTwoNumbers();
tesetForMultipleNumbers();
testForNewLinesBetweenNumbers();
testForNewLinesBetweenNumbers2();
