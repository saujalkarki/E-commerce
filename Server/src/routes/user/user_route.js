const router = require("express").Router();

const {
  registerUser,
  userLogin,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user/user_controller");
const { asyncErrorHandler } = require("../../middlewares/async_error_handler ");

router.route("/register").post(asyncErrorHandler(registerUser));
router.route("/login").post(asyncErrorHandler(userLogin));

router
  .route("/:id")
  .get(asyncErrorHandler(getSingleUser))
  .patch(asyncErrorHandler(updateUser))
  .delete(asyncErrorHandler(deleteUser));

module.exports = router;
