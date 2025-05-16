/*
  Warnings:

  - Added the required column `category_app` to the `Executable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Executable` ADD COLUMN `category_app` VARCHAR(191) NOT NULL;
