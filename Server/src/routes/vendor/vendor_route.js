const router = require("express").Router();

const {
  registerVendor,
  vendorLogin,
  getSingleVendor,
  updateVendor,
  deleteVendor,
  forgotUpdateOrResetPassword,
  verifyOtp,
  changePassword,
} = require("../../controllers/vendor/vendor_controller");

const { asyncErrorHandler } = require("../../middlewares/async_error_handler");

router.route("/register").post(asyncErrorHandler(registerVendor));
router.route("/login").post(asyncErrorHandler(vendorLogin));

router
  .route("/:id")
  .get(asyncErrorHandler(getSingleVendor))
  .patch(asyncErrorHandler(updateVendor))
  .delete(asyncErrorHandler(deleteVendor));

router.route("/reset").post(asyncErrorHandler(forgotUpdateOrResetPassword));
router.route("/verifyotp").post(asyncErrorHandler(verifyOtp));
router.route("/changepassword").post(asyncErrorHandler(changePassword));

module.exports = router;
