/*
  Warnings:

  - You are about to drop the column `name` on the `Executable` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Executable` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_file]` on the table `Executable` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_file` to the `Executable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Executable` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Executable_name_key` ON `Executable`;

-- AlterTable
ALTER TABLE `Executable` DROP COLUMN `name`,
    ADD COLUMN `name_file` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Executable_title_key` ON `Executable`(`title`);

-- CreateIndex
CREATE UNIQUE INDEX `Executable_name_file_key` ON `Executable`(`name_file`);
