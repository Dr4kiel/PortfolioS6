-- CreateTable
CREATE TABLE "_ApprentissageCritiqueToCritere" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ApprentissageCritiqueToCritere_A_fkey" FOREIGN KEY ("A") REFERENCES "ApprentissageCritique" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ApprentissageCritiqueToCritere_B_fkey" FOREIGN KEY ("B") REFERENCES "Critere" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Critere" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "critere" TEXT NOT NULL,
    "niveauAcceptabilite" INTEGER NOT NULL,
    "apprentissageCritiqueId" INTEGER NOT NULL
);
INSERT INTO "new_Critere" ("apprentissageCritiqueId", "critere", "id", "niveauAcceptabilite") SELECT "apprentissageCritiqueId", "critere", "id", "niveauAcceptabilite" FROM "Critere";
DROP TABLE "Critere";
ALTER TABLE "new_Critere" RENAME TO "Critere";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ApprentissageCritiqueToCritere_AB_unique" ON "_ApprentissageCritiqueToCritere"("A", "B");

-- CreateIndex
CREATE INDEX "_ApprentissageCritiqueToCritere_B_index" ON "_ApprentissageCritiqueToCritere"("B");
