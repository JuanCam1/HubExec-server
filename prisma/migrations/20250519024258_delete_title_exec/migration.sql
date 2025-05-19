/*
  Warnings:

  - You are about to drop the column `name_file` on the `Executable` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Executable` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Executable` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Executable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `HistoryExecutable` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Executable_name_file_key` ON `Executable`;

-- DropIndex
DROP INDEX `Executable_title_key` ON `Executable`;

-- AlterTable
ALTER TABLE `Executable` DROP COLUMN `name_file`,
    DROP COLUMN `title`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `HistoryExecutable` ADD COLUMN `filename` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Executable_name_key` ON `Executable`(`name`);
