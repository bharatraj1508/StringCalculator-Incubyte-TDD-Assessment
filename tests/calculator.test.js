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
    result === 5 ? "Test case 3 passed for single number" : "Test 3 failed"
  );
}

testForEmptyString();
testForOneNumber();
testForTwoNumbers();
