import { getDatasByYear } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        const annee = req.url.split("/portfolio/")[1];
        const response = await getDatasByYear(annee);
        if(!response) {
            return NextResponse.json({message: "Error"}, {
                status: 404,
            });
        }
        return NextResponse.json({message: "OK", response}, {
            status: 200,
        });
    } catch (err) {
        return NextResponse.json({message: "Error"}, {
            status: 500,
        });
    }
}

export const POST = async (req: Request, res: Response) => {
    console.log("MERP");
    return NextResponse.json({ message: "Hello" }, {
        status: 200,
    });
}