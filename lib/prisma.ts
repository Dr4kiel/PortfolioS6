import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ["query"],
    });

if (process.env.NODE_ENV != "production") globalForPrisma.prisma;

export const getDatasByYear = async (year: string) => {
    return await prisma.annee.findMany({
        where: {
            annee: year,
        },
        select: {
            annee: true,
            semestres: {
                select: {
                    semestre: true,
                    apprentissageCritiques: {
                        select: {
                            titre: true,
                            criteres: {
                                select: {
                                    critere: true,
                                    niveauAcceptabilite: true
                                }
                            },
                            niveauActuel: true,
                            competence: {
                                select: {
                                    id: true,
                                    competence: true,
                                }
                            }
                        }
                    },
                },
            },
        }
    });
}

export const getCompetence = async (annee: string) => {
    if (annee === "but3") {
        return await prisma.competence.findMany({
            where: {
                id: {
                    in: [1, 2, 6]
                }
            },
            select: {
                id: true,
                competence: true,
            }
        });
    } else {
        return await prisma.competence.findMany({
            select: {
                id: true,
                competence: true,
            }
        });
    }
}

export const getProjects = async () => {
    return await prisma.project.findMany();
}