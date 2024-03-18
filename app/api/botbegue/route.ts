import { NextResponse } from "next/server";

import fs from 'fs';


export const GET = async (req: Request, res: Response) => {
    try {
        // read logs from logs_symbol folder and return the logs
        // make a json object with the logs and return it
        let files = fs.readdirSync('logs_symbol');
        return NextResponse.json({ files }, {
            status: 200,
        });
    } catch (err) {
        return NextResponse.json({ message: "Hello", err }.err, {
            status: 500,
        })
    }
}