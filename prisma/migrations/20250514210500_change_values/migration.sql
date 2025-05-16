/*
  Warnings:

  - You are about to drop the column `resetPasswordExpires` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetPasswordToken` on the `User` table. All the data in the column will be lost.
  - Added the required column `category_app` to the `Executable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Executable` ADD COLUMN `category_app` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `resetPasswordExpires`,
    DROP COLUMN `resetPasswordToken`,
    ADD COLUMN `reset_password_expires` DATETIME(3) NULL,
    ADD COLUMN `reset_password_token` VARCHAR(191) NULL;
