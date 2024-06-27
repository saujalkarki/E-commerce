const prisma = require("./src/database/db_config");
const bcrypt = require("bcryptjs");

const adminSeeder = async () => {
  try {
    const adminExist = await prisma.users.findUnique({
      where: {
        userEmail: process.env.ADMIN_EMAIL,
      },
    });

    if (!adminExist) {
      await prisma.users.create({
        data: {
          userFirstName: "admin",
          userLastName: "admin",
          userEmail: process.env.ADMIN_EMAIL,
          userPassword: bcrypt.hashSync(process.env.ADMIN_PASS, 10),
          userContactNumber: "9800000000000000",
          role: "Admin",
        },
      });

      console.log("Admin Seeded successfully.");
    } else {
      console.log("Admin already seeded.");
    }
  } catch (err) {
    console.log("Admin Seeder Error", err.message);
  }
};

module.exports = adminSeeder;
