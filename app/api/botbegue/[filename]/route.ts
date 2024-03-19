import { NextResponse } from "next/server";

import fs from 'fs';


export const GET = async (req: Request, res: Response) => {
    try {
        const filename = req.url.split("/botbegue/")[1];
        
        // read logs from logs_symbol folder and return the logs

        let data = await fs.promises.readFile(`logs_symbol/${filename}`);
        
        // transform buffer to string
        let log = data.toString();

        let logs = log.split("\r\n");
        // make a json object with the logs and return it
        return NextResponse.json({ logs }, {
            status: 200,
        });

    }catch(err) {
        return NextResponse.json({message: "Error"}, {
            status: 500,
        });
    }
}