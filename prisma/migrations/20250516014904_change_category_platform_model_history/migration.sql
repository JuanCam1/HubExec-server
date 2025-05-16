/*
  Warnings:

  - You are about to drop the column `category_app` on the `Executable` table. All the data in the column will be lost.
  - You are about to drop the column `platformId` on the `Executable` table. All the data in the column will be lost.
  - Added the required column `category_app` to the `HistoryExecutable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platformId` to the `HistoryExecutable` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Executable` DROP FOREIGN KEY `Executable_platformId_fkey`;

-- DropIndex
DROP INDEX `Executable_platformId_fkey` ON `Executable`;

-- AlterTable
ALTER TABLE `Executable` DROP COLUMN `category_app`,
    DROP COLUMN `platformId`;

-- AlterTable
ALTER TABLE `HistoryExecutable` ADD COLUMN `category_app` VARCHAR(191) NOT NULL,
    ADD COLUMN `platformId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `HistoryExecutable` ADD CONSTRAINT `HistoryExecutable_platformId_fkey` FOREIGN KEY (`platformId`) REFERENCES `Platform`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
