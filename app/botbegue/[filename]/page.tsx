"use client";


import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Page() {

    let [logs, setLogs] = useState([]);

    const { signal } = new AbortController();

    const params = useParams();

    async function getLogs() {
        await fetch(`/api/botbegue/${params.filename}`, { signal })
            .then((res) => res.json())
            .then((res) => {
                setLogs(res.logs);
            });
    }

    useEffect(() => {
        getLogs();
    }, []);


    return (
        <main>
            <h1 className='title'>BotBegue</h1>
            <div>
                <ul>
                    {
                        logs.map((log, index) => (
                            <li className='text-white' key={index}>
                                {log}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>
    )
}