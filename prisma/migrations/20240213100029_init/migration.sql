-- CreateTable
CREATE TABLE "_ApprentissageCritiqueToSemestre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ApprentissageCritiqueToSemestre_A_fkey" FOREIGN KEY ("A") REFERENCES "ApprentissageCritique" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ApprentissageCritiqueToSemestre_B_fkey" FOREIGN KEY ("B") REFERENCES "Semestre" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ApprentissageCritique" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "semestreId" INTEGER NOT NULL,
    "competenceId" INTEGER NOT NULL,
    CONSTRAINT "ApprentissageCritique_competenceId_fkey" FOREIGN KEY ("competenceId") REFERENCES "Competence" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ApprentissageCritique" ("competenceId", "id", "semestreId", "titre") SELECT "competenceId", "id", "semestreId", "titre" FROM "ApprentissageCritique";
DROP TABLE "ApprentissageCritique";
ALTER TABLE "new_ApprentissageCritique" RENAME TO "ApprentissageCritique";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ApprentissageCritiqueToSemestre_AB_unique" ON "_ApprentissageCritiqueToSemestre"("A", "B");

-- CreateIndex
CREATE INDEX "_ApprentissageCritiqueToSemestre_B_index" ON "_ApprentissageCritiqueToSemestre"("B");
