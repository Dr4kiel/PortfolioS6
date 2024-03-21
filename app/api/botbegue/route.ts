import { NextResponse } from "next/server";

import fs from 'fs';

export const GET = async (req: Request, res: Response) => {

    try {
        // read logs from logs_symbol folder updated and return the logs
        let files = await fs.promises.readdir(`logs_symbol`);
        return NextResponse.json({ files }, {
            status: 200,
        });
        
    } catch (err) {
        return NextResponse.json({ message: "Internal Server Error", err }.err, {
            status: 500,
        })
    }
}