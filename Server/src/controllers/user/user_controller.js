// requiring library
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const prisma = require("../../database/db_config");

// requiring services
const sendEmail = require("../../services/send_mail");

// registser user
exports.registerUser = async (req, res) => {
  const {
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userContactNumber,
    userOTP,
  } = req.body;

  if (
    !userFirstName ||
    !userLastName ||
    !userEmail ||
    !userPassword ||
    !userContactNumber
  ) {
    return res.status(400).json({
      status: "Error",
      message: "Please Enter all the data.",
      data: null,
    });
  }

  const userExist =
    (await prisma.users.findUnique({
      where: {
        userEmail,
      },
    })) ||
    (await prisma.users.findUnique({
      where: {
        userContactNumber,
      },
    }));

  if (userExist) {
    return res.status(400).json({
      status: "Error",
      message: "User with this Email or Number already Exist.",
      data: null,
    });
  }

  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  sendEmail({
    email: userEmail,
    subject: `OTP for E-com Registeration.`,
    message: `Please don't share this OTP with anyone.
    OTP:${otp}
    This OTP will expires in 10 mins.`,
  });

  if (otp !== userOTP) {
    return res.status(400).json({
      status: "Error",
      message: "The OTP you provided didn't matched.",
      data: null,
    });
  }

  const newUser = await prisma.users.create({
    data: {
      userFirstName,
      userLastName,
      userEmail,
      userPassword: bcrypt.hashSync(userPassword, 10),
      userContactNumber,
    },
  });

  res.status(200).json({
    status: "Success",
    message: "Uesr created successfully.",
    data: newUser,
  });
};

// login user
exports.userLogin = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  if (!userEmail || !userPassword) {
    return res.status(400).message({
      status: "Error",
      message: "Please enter all the data.",
      data: null,
    });
  }

  const userExist = await prisma.users.findUnique({
    where: {
      userEmail,
    },
  });

  if (!userExist) {
    return res.status(400).json({
      status: "Error",
      message: "User with this email doesn't exist.",
      data: null,
    });
  }

  const isPasswordMatched = bcrypt.compareSync(
    userPassword,
    userExist.userPassword
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      status: "Error",
      message: "Email or Password doesn't matched.",
      data: null,
    });
  }

  const loginToken = jwt.sign(
    { userId: Number(userExist.id) },
    process.env.SecretJWTKey,
    { expiresIn: "10m" }
  );

  res.status(200).json({
    status: "success",
    message: `${userExist.userFirstName} logged in successfully.`,
    data: loginToken,
  });
};

// read Single User
exports.getSingleUser = async (req, res) => {
  const userId = req.params.id;

  const userExist = await prisma.users.findUnique({
    where: {
      id: Number(userId),
    },
  });

  if (!userExist) {
    return res.status(400).json({
      status: "Error",
      message: "User with this Id doesn't exist.",
      data: null,
    });
  }

  res.status(200).json({
    status: "Success",
    message: `${userExist.userFirstName} data fetched successfully.`,
    data: userExist,
  });
};

// update User
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const {
    userFirstName,
    userLastName,
    userPassword,
    userContactNumber,
    userImage,
  } = req.body;

  const userExist = await prisma.users.findUnique({
    where: {
      id: Number(userId),
    },
  });

  if (!userExist) {
    return res.status(400).json({
      status: "Error",
      message: "User with this id doesn't exist.",
      data: null,
    });
  }

  const isPasswordMatched = bcrypt.compareSync(
    userPassword,
    userExist.userPassword
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      status: "Error",
      message: "Password doesn't matched.",
      data: null,
    });
  }

  const updatedUser = await prisma.users.update({
    where: {
      id: Number(userId),
    },
    data: {
      userFirstName: userFirstName || userExist.userFirstName,
      userLastName: userLastName || userExist.userLastName,
      userContactNumber: userContactNumber || userExist.userContactNumber,
      userImage: userImage || userExist.userImage,
    },
  });

  res.status(200).json({
    status: "Success",
    message: "User updated successfully.",
    data: updatedUser,
  });
};

// delete User
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  const { userPassword } = req.body;

  const userExist = await prisma.users.findUnique({
    where: {
      id: Number(userId),
    },
  });

  if (!userExist) {
    return res.status(400).json({
      success: "Error",
      message: "User with this id doesn't exist",
      data: null,
    });
  }

  const isPasswordMatched = bcrypt.compareSync(
    userPassword,
    userExist.userPassword
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      status: "Error",
      message: "Password doesn't matched.",
      data: null,
    });
  }

  await prisma.users.delete({
    where: {
      id: Number(userId),
    },
  });

  res.status(200).json({
    status: "Success",
    message: "User deleted Successfully.",
    data: null,
  });
};
