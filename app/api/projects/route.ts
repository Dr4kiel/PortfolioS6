import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/prisma";

export const GET = (req: NextRequest) => {
    return getProjects().then((projects) => {
        return NextResponse.json(projects, {
            status: 200,
        });
    }).catch((err) => {
        return NextResponse.json({ message: "Error" }, {
            status: 500,
        });
    });
};