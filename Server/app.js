const express = require("express");
const app = express();
require("dotenv").config();

// parsing the json and url-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const adminSeeder = require("./admin_seeder");
// seeding Admin
adminSeeder();

// importing from .env
const port = process.env.PORT;

// setting up userAuthRoute
const userAuthRoute = require("./src/routes/user/user_route");
app.use("/user", userAuthRoute);

// setting up vendorAuthRoute
const vendorAuthRoute = require("./src/routes/vendor/vendor_route");
app.use("/vendor", vendorAuthRoute);

// listening to port
app.listen(process.env.PORT, () => {
  console.log(`server has successfully started on port ${port}.`);
});
