/*
  Warnings:

  - Made the column `birthDate` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `birthDate` DATETIME(3) NOT NULL;
