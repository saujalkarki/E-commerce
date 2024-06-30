const router = require("express").Router();

const {
  registerVendor,
  vendorLogin,
  getSingleVendor,
  updateVendor,
  deleteVendor,
} = require("../../controllers/vendor/vendor_controller");

const { asyncErrorHandler } = require("../../middlewares/async_error_handler");

router.route("/register").post(asyncErrorHandler(registerVendor));
router.route("/login").post(asyncErrorHandler(vendorLogin));

router
  .route("/:id")
  .get(asyncErrorHandler(getSingleVendor))
  .patch(asyncErrorHandler(updateVendor))
  .delete(asyncErrorHandler(deleteVendor));

module.exports = router;
