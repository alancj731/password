/*
  Warnings:

  - You are about to drop the column `detail` on the `Memo` table. All the data in the column will be lost.
  - You are about to drop the column `due` on the `Memo` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Memo` table. All the data in the column will be lost.
  - Added the required column `password` to the `Memo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Memo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Memo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Memo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "website" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Memo" ("id") SELECT "id" FROM "Memo";
DROP TABLE "Memo";
ALTER TABLE "new_Memo" RENAME TO "Memo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
