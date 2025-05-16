/*
  Warnings:

  - You are about to drop the column `pathExecutable` on the `Executable` table. All the data in the column will be lost.
  - Added the required column `pathExecutable` to the `HistoryExecutable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Executable` DROP COLUMN `pathExecutable`;

-- AlterTable
ALTER TABLE `HistoryExecutable` ADD COLUMN `pathExecutable` VARCHAR(191) NOT NULL;
