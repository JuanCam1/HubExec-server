/*
  Warnings:

  - Added the required column `createdAt` to the `HistoryExecutable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `HistoryExecutable` ADD COLUMN `createdAt` DATETIME(3) NOT NULL;
