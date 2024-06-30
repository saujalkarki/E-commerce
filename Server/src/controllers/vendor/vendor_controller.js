// requiring library
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const prisma = require("../../database/db_config");

// requiring services
const sendEmail = require("../../services/send_mail");

// registser vendor
exports.registerVendor = async (req, res) => {
  const {
    vendorName,
    vendorEmail,
    vendorPassword,
    vendorContactNumber,
    vendorOTP,
  } = req.body;

  if (!vendorName || !vendorEmail || !vendorPassword || !vendorContactNumber) {
    return res.status(400).json({
      status: "Error",
      message: "Please Enter all the data.",
      data: null,
    });
  }

  const vendorExist =
    (await prisma.vendors.findUnique({
      where: {
        vendorEmail,
      },
    })) ||
    (await prisma.vendors.findUnique({
      where: {
        vendorContactNumber,
      },
    }));

  if (vendorExist) {
    return res.status(400).json({
      status: "Error",
      message: "Vendor with this Email or Number already Exist.",
      data: null,
    });
  }

  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  sendEmail({
    email: vendorEmail,
    subject: `OTP for E-com Registeration.`,
    message: `Please don't share this OTP with anyone.
    OTP:${otp}
    This OTP will expires in 10 mins.`,
  });

  if (otp !== vendorOTP) {
    return res.status(400).json({
      status: "Error",
      message: "The OTP you provided didn't matched.",
      data: null,
    });
  }

  const newVendor = await prisma.vendors.create({
    data: {
      vendorName,
      vendorEmail,
      vendorPassword: bcrypt.hashSync(vendorPassword, 10),
      vendorContactNumber,
    },
  });

  res.status(200).json({
    status: "Success",
    message: "Uesr created successfully.",
    data: newVendor,
  });
};

// login vendor
exports.vendorLogin = async (req, res) => {
  const { vendorEmail, vendorPassword } = req.body;

  if (!vendorEmail || !vendorPassword) {
    return res.status(400).message({
      status: "Error",
      message: "Please enter all the data.",
      data: null,
    });
  }

  const vendorExist = await prisma.vendors.findUnique({
    where: {
      vendorEmail,
    },
  });

  if (!vendorExist) {
    return res.status(400).json({
      status: "Error",
      message: "Vendor with this email doesn't exist.",
      data: null,
    });
  }

  const isPasswordMatched = bcrypt.compareSync(
    vendorPassword,
    vendorExist.vendorPassword
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      status: "Error",
      message: "Email or Password doesn't matched.",
      data: null,
    });
  }

  const loginToken = jwt.sign(
    { vendorId: Number(vendorExist.id) },
    process.env.SecretJWTKey,
    { expiresIn: "10m" }
  );

  res.status(200).json({
    status: "success",
    message: `${vendorExist.vendorName} logged in successfully.`,
    data: loginToken,
  });
};

// read Single Vendor
exports.getSingleVendor = async (req, res) => {
  const vendorId = req.params.id;

  const vendorExist = await prisma.vendors.findUnique({
    where: {
      id: Number(vendorId),
    },
  });

  if (!vendorExist) {
    return res.status(400).json({
      status: "Error",
      message: "Vendor with this Id doesn't exist.",
      data: null,
    });
  }

  res.status(200).json({
    status: "Success",
    message: `${vendorExist.vendorName} data fetched successfully.`,
    data: vendorExist,
  });
};

// update Vendor
exports.updateVendor = async (req, res) => {
  const vendorId = req.params.id;
  const { vendorName, vendorPassword, vendorContactNumber } = req.body;

  const vendorExist = await prisma.vendors.findUnique({
    where: {
      id: Number(vendorId),
    },
  });

  if (!vendorExist) {
    return res.status(400).json({
      status: "Error",
      message: "Vendor with this id doesn't exist.",
      data: null,
    });
  }

  const isPasswordMatched = bcrypt.compareSync(
    vendorPassword,
    vendorExist.vendorPassword
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      status: "Error",
      message: "Password doesn't matched.",
      data: null,
    });
  }

  const updatedVendor = await prisma.vendors.update({
    where: {
      id: Number(vendorId),
    },
    data: {
      vendorName: vendorName || vendorExist.vendorName,
      vendorContactNumber:
        vendorContactNumber || vendorExist.vendorContactNumber,
      vendorDocumentImage:
        vendorDocumentImage || vendorExist.vendorDocumentImage,
    },
  });

  res.status(200).json({
    status: "Success",
    message: "Vendor updated successfully.",
    data: updatedVendor,
  });
};

// delete Vendor
exports.deleteVendor = async (req, res) => {
  const vendorId = req.params.id;
  const { vendorPassword } = req.body;

  const vendorExist = await prisma.vendors.findUnique({
    where: {
      id: Number(vendorId),
    },
  });

  if (!vendorExist) {
    return res.status(400).json({
      success: "Error",
      message: "Vendor with this id doesn't exist",
      data: null,
    });
  }

  const isPasswordMatched = bcrypt.compareSync(
    vendorPassword,
    vendorExist.vendorPassword
  );

  if (!isPasswordMatched) {
    return res.status(400).json({
      status: "Error",
      message: "Password doesn't matched.",
      data: null,
    });
  }

  await prisma.vendors.delete({
    where: {
      id: Number(vendorId),
    },
  });

  res.status(200).json({
    status: "Success",
    message: "Vendor deleted Successfully.",
    data: null,
  });
};
