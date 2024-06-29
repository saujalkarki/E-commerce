// requiring library
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

// call for prisma
const prisma = require("../../database/db_config");

// importing services
const sendEmail = require("../../services/send_mail");

// register vendor -- create vendor
exports.registerVendor = async (req, res) => {
  const {
    vendorName,
    vendorEmail,
    vendorPassword,
    vendorContactNumber,
    vendorDocumentImage,
    vendorOtp,
  } = req.body;

  if (
    !vendorName ||
    !vendorEmail ||
    !vendorPassword ||
    !vendorContactNumber ||
    !vendorDocumentImage ||
    !vendorOtp
  ) {
    return res.status(400).json({
      status: "error",
      message: "Please provide all the datas.",
      data: null,
    });
  }

  const vendorExist =
    (await prisma.vendors.findUnique({
      where: {
        vendorEmail,
      },
    })) &&
    (await prisma.vendors.findUnique({
      where: {
        vendorContactNumber,
      },
    }));

  if (vendorExist) {
    return res.status(400).json({
      status: "error",
      message: "Vendor with this Email or Number already exist.",
      data: null,
    });
  }

  const otp = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  sendEmail({
    to: vendorEmail,
    subject: "Vendor OTP -- E-commerce ",
    text: `Please don't share this with anyone.
    OTP : ${otp} 
    This One time passwrod will expires in 10 minutes.`,
  });

  if (otp !== vendorOtp) {
    return res.status(400).json({
      status: "error",
      message: "Please try with a correct OTP.",
      data: null,
    });
  }

  await prisma.vendors.update({
    where: {
      vendorEmail,
    },
    data: {
      vendorOtp: otp,
      vendorOtpVerified: true,
    },
  });

  if (!vendo) {
    const createdVendor = await prisma.vendors.create({
      data: {
        vendorName,
        vendorEmail,
        vendorPassword: bcrypt.hashSync(vendorPassword, 10),
        vendorContactNumber,
        vendorDocumentImage,
        vendorOtp: otp,
      },
    });
  }

  res.status(200).json({
    status: "success",
    message: "Vendor registered successfully.",
    data: createdVendor,
  });
};

// // vendor Login
// exports.loginVendor = async (req, res) => {
//   const { vendorEmail, vendorPassword } = req.body;

//   if (!vendorEmail || !vendorPassword) {
//     return res.status(400).json({
//       status: "error",
//       message: "Please provide vendor Email or password.",
//       data: null,
//     });
//   }

//   const vendorExist = await prisma.vendors.findUnique({
//     where: {
//       vendorEmail,
//     },
//   });

//   if (!vendorExist) {
//     return res.status(400).json({
//       status: "error",
//       message: "Vendor with this Email doesn't Exist.",
//       data: null,
//     });
//   }

//   const passwordMatched = bcrypt.compareSync(
//     vendorPassword,
//     vendorExist.vendorPassword
//   );

//   if (!passwordMatched) {
//     return res.status(400).message({
//       status: "error",
//       message: "Vendor password doesn't matched.",
//       data: null,
//     });
//   }

//   const loginToken = jwt.sign(
//     {
//       id: vendorExist.id,
//     },
//     process.env.JWTPrivateKey,
//     {
//       expiresIn: "10m",
//     }
//   );

//   res.status(200).json({
//     status: "Success",
//     message: "Vendor Logged In successfully.",
//     data: loginToken,
//   });
// };
