/*
  Warnings:

  - You are about to drop the column `version` on the `Executable` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[version]` on the table `HistoryExecutable` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `version` to the `HistoryExecutable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Executable` DROP COLUMN `version`;

-- AlterTable
ALTER TABLE `HistoryExecutable` ADD COLUMN `version` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `HistoryExecutable_version_key` ON `HistoryExecutable`(`version`);
