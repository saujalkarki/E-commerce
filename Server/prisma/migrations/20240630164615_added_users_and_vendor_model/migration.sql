-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "userFirstName" TEXT NOT NULL,
    "userLastName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL,
    "userContactNumber" TEXT NOT NULL,
    "userImage" TEXT,
    "role" "Role" NOT NULL DEFAULT 'User',
    "userOTP" TEXT,
    "userOTPVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendors" (
    "id" TEXT NOT NULL,
    "vendorName" TEXT NOT NULL,
    "vendorEmail" TEXT NOT NULL,
    "vendorPassword" TEXT NOT NULL,
    "vendorContactNumber" TEXT NOT NULL,
    "vendorDocumentImage" TEXT NOT NULL,
    "vendorOTP" TEXT,
    "vendorOTPVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vendors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_userEmail_key" ON "Users"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Users_userContactNumber_key" ON "Users"("userContactNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Vendors_vendorEmail_key" ON "Vendors"("vendorExmail");

-- CreateIndex
CREATE UNIQUE INDEX "Vendors_vendorContactNumber_key" ON "Vendors"("vendorContactNumber");
