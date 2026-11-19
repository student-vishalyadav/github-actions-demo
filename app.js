const express = require("express");

const { calculateTotal } = require("./calculator");

const app = express();

app.get("/cart/total", (req, res) => {
  const price = Number(req.query.price);
  const quantity = Number(req.query.quantity);

  if (
    !Number.isFinite(price) ||
    !Number.isInteger(quantity) ||
    price < 0 ||
    quantity < 0 ||
    req.query.price === undefined ||
    req.query.quantity === undefined ||
    req.query.price === "" ||
    req.query.quantity === ""
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid price or quantity",
    });
  }

  const total = calculateTotal(price, quantity);

  return res.status(200).json({
    success: true,
    total,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
