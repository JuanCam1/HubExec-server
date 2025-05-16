/*
  Warnings:

  - Added the required column `type` to the `Sesion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sesion` ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `stateId` INTEGER NOT NULL DEFAULT 1;
