const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(
  "sk_test_51KiCrCSBeWSyq0I0wh1b6HwjUlysrWIWWiIvlCROwCxQeCnNQghWVJPuiWyYBawoDoHOJx5JRiTGYNpWKxbqR4Xs00r5VuVRWd"
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
      "pk_test_51KiCrCSBeWSyq0I0iL0qbAm7TjSVl0U8GnAc463PKOdQ6IgxXvToiA7NwhpxmAiwytayUu57ENRVs44g054M91dL00a1svHD4h",
  });
});
