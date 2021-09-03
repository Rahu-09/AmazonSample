const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JVXA9SAYl99nHpmGHaRCscGezxaDBCH2hSesLldU6tbGhUIYsw6WYWR4L2nOOqk00YGq8MaJvFnxLpgTzXo3dK100BwxgLV2J"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received boom!! for this amount>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log(">>>>>>>>", paymentIntent);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
