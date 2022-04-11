const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(
  "sk_test_51KnTM5SGyxdOZsx600oB3L1tk6UB9lyUWa058PHJtr6EWzuh1TmQoEZzbALt60xy9WAhIj5qzwHekrLzuDF36NF30075iq7stJ"
);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey:
      "pk_test_51KnTM5SGyxdOZsx68PZCjricVqtFGU0FYniZI8sChTBdqAIvcoFj310KMfoMUrgtF5PAFsZ6QjULamKgXMKe3Q0400BmNggOjM",
  });
});
