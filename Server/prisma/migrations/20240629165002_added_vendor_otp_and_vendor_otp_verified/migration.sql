-- AlterTable
ALTER TABLE "Vendors" ADD COLUMN     "vendorOtp" INTEGER,
ADD COLUMN     "vendorOtpVerified" BOOLEAN NOT NULL DEFAULT false;
