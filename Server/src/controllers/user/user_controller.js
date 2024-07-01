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

// forgotPassword-reset-update---sending otp
exports.forgotUpdateOrResetPassword = async (req, res) => {
  const userId = req.params.id;
  const { userEmail } = req.body;

  if (!userEmail) {
    return res.status(400).json({
      status: "Error",
      message: "Please enter your Email address.",
      data: null,
    });
  }

  const userExist = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userExist) {
    return res.status(400).json({
      status: "Error",
      message: "User with this Id doesn't exist.",
      data: null,
    });
  }

  const otp = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  sendEmail({
    email: userExist.userEmail,
    subject: `OTP for E-com reset password.`,
    message: `Please don't share this OTP with anyone.
    OTP:${otp}
    This OTP will expires in 10 mins.`,
  });

  await prisma.users.update({
    where: {
      userEmail,
    },
    data: {
      userOTP: otp,
    },
  });

  res.status(200).json({
    status: "Success",
    message: "OTP sent successfully.",
    data: userExist,
  });
};

// verify otp
exports.verifyOtp = async (req, res) => {
  const { userEmail, userOTP } = req.body;

  if (!userEmail || !userOTP) {
    return res.status(400).json({
      status: " Error",
      message: "Please enter the OTP from your Email.",
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
      where: {
        status: "Error",
        message: "User with this id doesn't exist.",
      },
    });
  }

  const isOtpMatched = userExist.userOTP === userOTP;

  if (!isOtpMatched) {
    return res.status(400).json({
      status: "Error",
      message: "OTP doesn't matched, please check Email and try Again",
      data: null,
    });
  }

  await prisma.users.update({
    where: {
      userEmail,
    },
    data: {
      userOTP: null,
      userOTPVerified: true,
    },
  });

  res.status(200).json({
    status: "Success",
    message: "OTP verified successfully, you can change your password now.",
    data: userExist,
  });
};

// changing password
exports.changePassword = async (req, res) => {
  const { userEmail, newPassword, confirmNewPassowrd } = req.body;

  if (!userEmail || !newPassword || !confirmNewPassowrd) {
    return res.status(400).json({
      status: "Error",
      message: "Please enter new password.",
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
      message: "User with this Email doesn't exist",
    });
  }

  if (newPassword !== confirmNewPassowrd) {
    return res.status(400).json({
      status: "Error",
      message: "Please enter the same password at both input field.",
      data: null,
    });
  }

  if (bcrypt.compareSync(newPassword, userExist.userPassword)) {
    return res.status(400).json({
      status: "Error",
      message: "Please enter an unique password.",
      data: null,
    });
  }

  if (!userExist.userOTPVerified) {
    return res.status(400).json({
      status: "Error",
      message: "OTP hasn't verified yet, please verify it.",
      data: null,
    });
  }

  await prisma.users.update({
    where: {
      userEmail,
    },
    data: {
      userPassword: bcrypt.hashSync(newPassword, 10),
      userOTPVerified: false,
    },
  });

  res.status(200).json({
    status: "Success",
    message: "Password changed successfully.",
    data: userExist,
  });
};
