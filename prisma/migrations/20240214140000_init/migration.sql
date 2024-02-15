/*
  Warnings:

  - You are about to drop the column `competence` on the `ApprentissageCritique` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Competence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competence" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ApprentissageCritique" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "competenceId" INTEGER NOT NULL DEFAULT 1,
    "semestreId" INTEGER NOT NULL,
    "niveauActuel" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ApprentissageCritique_competenceId_fkey" FOREIGN KEY ("competenceId") REFERENCES "Competence" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ApprentissageCritique" ("id", "niveauActuel", "semestreId", "titre") SELECT "id", "niveauActuel", "semestreId", "titre" FROM "ApprentissageCritique";
DROP TABLE "ApprentissageCritique";
ALTER TABLE "new_ApprentissageCritique" RENAME TO "ApprentissageCritique";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
