/*
  Warnings:

  - You are about to drop the `CriteresEvaluation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `apprentissageCritique` on the `ApprentissageCritique` table. All the data in the column will be lost.
  - You are about to drop the column `niveauAcquisition` on the `ApprentissageCritique` table. All the data in the column will be lost.
  - You are about to drop the column `semestreId` on the `Competence` table. All the data in the column will be lost.
  - Added the required column `semestreId` to the `ApprentissageCritique` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titre` to the `ApprentissageCritique` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CriteresEvaluation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Critere" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "critere" TEXT NOT NULL,
    "niveauAcceptabilite" INTEGER NOT NULL,
    "apprentissageCritiqueId" INTEGER NOT NULL,
    CONSTRAINT "Critere_apprentissageCritiqueId_fkey" FOREIGN KEY ("apprentissageCritiqueId") REFERENCES "ApprentissageCritique" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ApprentissageCritique" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "semestreId" INTEGER NOT NULL,
    "competenceId" INTEGER NOT NULL,
    CONSTRAINT "ApprentissageCritique_competenceId_fkey" FOREIGN KEY ("competenceId") REFERENCES "Competence" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ApprentissageCritique_semestreId_fkey" FOREIGN KEY ("semestreId") REFERENCES "Semestre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ApprentissageCritique" ("competenceId", "id") SELECT "competenceId", "id" FROM "ApprentissageCritique";
DROP TABLE "ApprentissageCritique";
ALTER TABLE "new_ApprentissageCritique" RENAME TO "ApprentissageCritique";
CREATE TABLE "new_Competence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competence" TEXT NOT NULL
);
INSERT INTO "new_Competence" ("competence", "id") SELECT "competence", "id" FROM "Competence";
DROP TABLE "Competence";
ALTER TABLE "new_Competence" RENAME TO "Competence";
CREATE UNIQUE INDEX "Competence_competence_key" ON "Competence"("competence");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
