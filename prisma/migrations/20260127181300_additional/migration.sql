-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "role" TEXT DEFAULT 'CUSTOMER';
