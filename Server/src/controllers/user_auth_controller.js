const bcrypt = require("bcryptjs");

const prisma = require("../database/db_config");

// create user
exports.registerUser = async (req, res) => {
  const {
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userContactNumber,
  } = req.body;

  if (
    !userFirstName ||
    !userLastName ||
    !userEmail ||
    !userPassword ||
    !userContactNumber
  ) {
    return res.status(400).json({
      status: "error",
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
      status: "error",
      message: "User with this Email or Number already Exist.",
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

// update User
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { userName, userEmail, userPassword } = req.body;

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

  const updatedUser = await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      userName: userName || userExist.userName,
      userEmail: userEmail || userExist.userEmail,
      userPassword: userPassword || userExist.userPassword,
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

  const userExist = await prisma.user.findUnique({
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

  await prisma.user.delete({
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

// read all user
exports.readAllUser = async (req, res) => {
  const allUser = await prisma.user.findMany();

  if (allUser.length === 0) {
    return res.status(400).json({
      status: "error",
      message: "No any user registered yet.",
      data: allUser,
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Users fetched successfully.",
    data: allUser,
  });
};

// read Single User

exports.getSingleUser = async (req, res) => {
  const userId = req.params.id;

  const userExist = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });

  if (!userExist) {
    return res.status(400).json({
      status: "error",
      message: "User with this Id doesn't exist.",
      data: null,
    });
  }

  res.status(200).json({
    status: "Success",
    message: "User fetched successfully.",
    data: userExist,
  });
};
