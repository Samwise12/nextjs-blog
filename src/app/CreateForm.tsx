'use client';

import {useState} from 'react';
import { useRouter } from 'next/navigation';

export default function CreateForm() {
	const [name, setName] = useState('');
	const [color, setColor] = useState('');

	const router = useRouter();

	const handleClick = async (e: React.FormEvent) => {	
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:8080/api/b', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					color,
				}),
			});

		} catch (err) {
			// console.log("ERROR:", "failed to fetch")
		}

	}
	return (
		<form onSubmit={handleClick}>
			<h3>Fill out form</h3>
			<input 
				type="text"
				placeholder="enter name"
				value={name}
				onChange={e=>setName(e.target.value)}
			/>
			<br/><br/>
			<input 
				type="text"
				placeholder="enter color"
				value={color}
				onChange={e=>setColor(e.target.value)}
			/>			
			<button type="submit">enter</button>
		</form>
	)
}