/*
  Warnings:

  - You are about to drop the `Competence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `competenceId` on the `ApprentissageCritique` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Competence_competence_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Competence";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ApprentissageCritique" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "competence" TEXT NOT NULL DEFAULT 'NoCompetence',
    "semestreId" INTEGER NOT NULL,
    "niveauActuel" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_ApprentissageCritique" ("id", "niveauActuel", "semestreId", "titre") SELECT "id", "niveauActuel", "semestreId", "titre" FROM "ApprentissageCritique";
DROP TABLE "ApprentissageCritique";
ALTER TABLE "new_ApprentissageCritique" RENAME TO "ApprentissageCritique";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
