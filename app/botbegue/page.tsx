"use client";

import { useEffect, useState } from 'react';

export default function Page() {

    const [datas, setDatas] = useState([]);

    async function getDatas() {
        await fetch("/api/botbegue")
            .then((res) => res.json())
            .then((res) => {
                setDatas(res.files);
            });
    }

    useEffect(() => {
        getDatas();
    }, []);

    return (
        <main>
            <h1 className='title'>BotBegue</h1>
            <div>
                <ul>
                    {datas.map((data, index) => (
                        <li className='text-white' key={index}>
                            <a href={`/botbegue/${data}`}>{data}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}