import { NextResponse } from "next/server";


export const GET = async (req: Request, res: Response) => {
    try {
        return NextResponse.json({ message: "Hello" }, {
            status: 200,
        });
    } catch (err) {
        return NextResponse.json({ message: "Hello", err }.err, {
            status: 500,
        })
    }
}