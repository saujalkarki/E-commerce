/*
  Warnings:

  - You are about to drop the column `venderContactNumber` on the `Vendors` table. All the data in the column will be lost.
  - You are about to drop the column `venderDocumentImage` on the `Vendors` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[vendorContactNumber]` on the table `Vendors` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `vendorContactNumber` to the `Vendors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorDocumentImage` to the `Vendors` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Vendors_venderContactNumber_key";

-- AlterTable
ALTER TABLE "Vendors" DROP COLUMN "venderContactNumber",
DROP COLUMN "venderDocumentImage",
ADD COLUMN     "vendorContactNumber" TEXT NOT NULL,
ADD COLUMN     "vendorDocumentImage" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vendors_vendorContactNumber_key" ON "Vendors"("vendorContactNumber");
