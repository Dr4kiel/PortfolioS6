import { getCompetence } from "@/lib/prisma";
import { NextResponse } from "next/server";


export const GET = async (req: Request, res: Response) => {
    try {
        const response = await getCompetence();
        if(!response) {
            return NextResponse.json({message: "Error"}, {
                status: 404,
            });
        }
        return NextResponse.json({message: "OK", response}, {
            status: 200,
        });
    }catch(err) {
        return NextResponse.json({message: "Error"}, {
            status: 500,
        });
    }
}