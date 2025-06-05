/*
  Warnings:

  - You are about to drop the `chatparticipants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chatrooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `commentreactions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `friendrequests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postmedia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rolepermissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userroles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `chatparticipants` DROP FOREIGN KEY `ChatParticipants_chatRoomId_fkey`;

-- DropForeignKey
ALTER TABLE `chatparticipants` DROP FOREIGN KEY `ChatParticipants_userId_fkey`;

-- DropForeignKey
ALTER TABLE `commentreactions` DROP FOREIGN KEY `CommentReactions_commentId_fkey`;

-- DropForeignKey
ALTER TABLE `commentreactions` DROP FOREIGN KEY `CommentReactions_userId_fkey`;

-- DropForeignKey
ALTER TABLE `friendrequests` DROP FOREIGN KEY `FriendRequests_receiverId_fkey`;

-- DropForeignKey
ALTER TABLE `friendrequests` DROP FOREIGN KEY `FriendRequests_senderId_fkey`;

-- DropForeignKey
ALTER TABLE `messages` DROP FOREIGN KEY `Messages_chatRoomId_fkey`;

-- DropForeignKey
ALTER TABLE `postmedia` DROP FOREIGN KEY `PostMedia_postId_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermissions` DROP FOREIGN KEY `RolePermissions_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `rolepermissions` DROP FOREIGN KEY `RolePermissions_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `userroles` DROP FOREIGN KEY `UserRoles_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `userroles` DROP FOREIGN KEY `UserRoles_userId_fkey`;

-- DropIndex
DROP INDEX `Messages_chatRoomId_fkey` ON `messages`;

-- DropTable
DROP TABLE `chatparticipants`;

-- DropTable
DROP TABLE `chatrooms`;

-- DropTable
DROP TABLE `commentreactions`;

-- DropTable
DROP TABLE `friendrequests`;

-- DropTable
DROP TABLE `postmedia`;

-- DropTable
DROP TABLE `rolepermissions`;

-- DropTable
DROP TABLE `userroles`;

-- CreateTable
CREATE TABLE `User_Roles` (
    `userId` INTEGER NOT NULL,
    `roleId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role_Permissions` (
    `roleId` INTEGER NOT NULL,
    `permissionId` INTEGER NOT NULL,

    PRIMARY KEY (`roleId`, `permissionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post_Media` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `type` ENUM('IMAGE', 'VIDEO') NOT NULL,
    `caption` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment_Reactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `commentId` INTEGER NOT NULL,
    `type` ENUM('LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY') NOT NULL DEFAULT 'LIKE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Comment_Reactions_userId_commentId_key`(`userId`, `commentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Friend_Requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat_Rooms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `isGroup` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat_Participants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chatRoomId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `joinedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Chat_Participants_chatRoomId_userId_key`(`chatRoomId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Roles` ADD CONSTRAINT `User_Roles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Roles` ADD CONSTRAINT `User_Roles_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role_Permissions` ADD CONSTRAINT `Role_Permissions_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role_Permissions` ADD CONSTRAINT `Role_Permissions_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permissions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post_Media` ADD CONSTRAINT `Post_Media_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment_Reactions` ADD CONSTRAINT `Comment_Reactions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment_Reactions` ADD CONSTRAINT `Comment_Reactions_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `Comments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friend_Requests` ADD CONSTRAINT `Friend_Requests_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friend_Requests` ADD CONSTRAINT `Friend_Requests_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat_Participants` ADD CONSTRAINT `Chat_Participants_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `Chat_Rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat_Participants` ADD CONSTRAINT `Chat_Participants_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `Chat_Rooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
