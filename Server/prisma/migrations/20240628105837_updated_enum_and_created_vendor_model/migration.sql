-- CreateTable
CREATE TABLE "Vendors" (
    "id" TEXT NOT NULL,
    "vendorName" TEXT NOT NULL,
    "vendorEmail" TEXT NOT NULL,
    "vendorPassword" TEXT NOT NULL,
    "venderContactNumber" TEXT NOT NULL,
    "venderDocumentImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vendors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vendors_vendorEmail_key" ON "Vendors"("vendorEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Vendors_venderContactNumber_key" ON "Vendors"("venderContactNumber");
