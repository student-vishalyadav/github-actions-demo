const test = require("node:test");
const assert = require("node:assert/strict");

const { calculateTotal } = require("./calculator");

test("Should calculate total correctly", () => {
  assert.equal(calculateTotal(500, 3), 1500);
});

test("Should return zero for zero quantity", () => {
  assert.equal(calculateTotal(500, 0), 0);
});

test("Should calculate single product", () => {
  assert.equal(calculateTotal(250, 1), 250);
});
