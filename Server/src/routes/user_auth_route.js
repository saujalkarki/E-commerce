const router = require("express").Router();

const {
  registerUser,
  updateUser,
  deleteUser,
  readAllUser,
  getSingleUser,
} = require("../controllers/user_auth_controller");
const { asyncErrorHandler } = require("../middlewares/async_error_handler");

router.route("/register").post(asyncErrorHandler(registerUser));
router.route("/update/:id").patch(asyncErrorHandler(updateUser));
router.route("/delete/:id").delete(asyncErrorHandler(deleteUser));

router.route("/getAll").get(asyncErrorHandler(readAllUser));
router.route("/getSingle/:id").get(asyncErrorHandler(getSingleUser));

module.exports = router;
