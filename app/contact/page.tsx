'use client';
import { useState } from 'react';

export default function Page() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email) {
            // change the color of the input fields to red
            let nameLabel = document.getElementById('name-label');
            let emailLabel = document.getElementById('email-label');
            if (nameLabel != null) nameLabel.style.color = 'red';
            if (emailLabel != null) emailLabel.style.color = 'red';
            return alert('Veuillez remplir tous les champs');
        }

        if (!text) {
            let textLabel = document.getElementById('text-label');
            if (textLabel != null) textLabel.style.backgroundColor = 'red';
            return alert('Dites quelque chose quand même. Promis je mords pas :)');
        }

        try {
            setLoading(true);
            const res = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, text })
            });
            if (res.ok) {
                alert('Message Envoyé');
                window.location.reload();
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <main className=''>
            <div id="title" className="h-screen flex justify-center flex-col">
                <h1 className="title text-center font-bold text-white">Contact</h1>
                <div className="bg-white mx-auto text-center rounded w-2/3 text-white">
                    Work In Progress
                </div>
            </div>
            <div className='flex content-center'>
                <form action="" onSubmit={handleSubmit} className='bg-white h-screen grid w-svw'>
                    <div className='flex items-center justify-evenly row-span-1'>
                        <label htmlFor="name" id='name-label' className='text-xl'>Votre Nom*</label>
                        <input type="text" id="name" value={name} className='bg-blue-100 w-[50%] h-[15%] rounded' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='flex items-center justify-evenly row-span-2'>
                        <label htmlFor="email" id='email-label' className='text-xl'>Votre Email*</label>
                        <input type="email" id="email" value={email} className='bg-blue-100 w-[50%] h-[10%] rounded' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex items-center justify-evenly row-span-2'>
                        <label htmlFor="text" id='text-label' className='text-xl'>Votre Message*</label>
                        <textarea id="text" value={text} className='bg-blue-100 rounded w-[50%] h-[50%]' onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                    <div className='row-span-3 flex justify-center'>
                        <button id="submit-button" type="submit" className='text-xl bg-blue-500 h-12 w-28 rounded'>{
                            loading ? (
                                <span className="spinner-border spinner-border-sm">
                                    <span className="visually-hidden">Loading...</span>
                                </span>
                            ) : (
                                "Envoyer"
                            )
                        }</button>
                    </div>
                </form>
            </div>
        </main >
    )
}