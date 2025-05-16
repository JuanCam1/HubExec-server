-- CreateTable
CREATE TABLE `HistoryExecutable` (
    `id` VARCHAR(191) NOT NULL,
    `executableId` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HistoryExecutable` ADD CONSTRAINT `HistoryExecutable_executableId_fkey` FOREIGN KEY (`executableId`) REFERENCES `Executable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoryExecutable` ADD CONSTRAINT `HistoryExecutable_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
