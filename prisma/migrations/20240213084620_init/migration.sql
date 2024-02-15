-- CreateTable
CREATE TABLE "Annee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "annee" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Semestre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "semestre" TEXT NOT NULL,
    "anneeId" INTEGER NOT NULL,
    CONSTRAINT "Semestre_anneeId_fkey" FOREIGN KEY ("anneeId") REFERENCES "Annee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Competence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competence" TEXT NOT NULL,
    "semestreId" INTEGER NOT NULL,
    CONSTRAINT "Competence_semestreId_fkey" FOREIGN KEY ("semestreId") REFERENCES "Semestre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ApprentissageCritique" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "apprentissageCritique" TEXT NOT NULL,
    "competenceId" INTEGER NOT NULL,
    "niveauAcquisition" INTEGER NOT NULL,
    CONSTRAINT "ApprentissageCritique_competenceId_fkey" FOREIGN KEY ("competenceId") REFERENCES "Competence" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CriteresEvaluation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "critereEvaluation" TEXT NOT NULL,
    "apprentissageCritiqueId" INTEGER NOT NULL,
    CONSTRAINT "CriteresEvaluation_apprentissageCritiqueId_fkey" FOREIGN KEY ("apprentissageCritiqueId") REFERENCES "ApprentissageCritique" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
