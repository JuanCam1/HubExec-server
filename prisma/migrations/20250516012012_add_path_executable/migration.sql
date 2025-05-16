/*
  Warnings:

  - Added the required column `pathExecutable` to the `Executable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Executable` ADD COLUMN `pathExecutable` VARCHAR(191) NOT NULL;
