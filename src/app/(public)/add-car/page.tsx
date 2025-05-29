"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { carService } from "@/app/services/carService";

export default function AddCarPage() {
	const router = useRouter();
	const [form, setForm] = useState({ brand: "", price: "", year: "" });
	const [error, setError] = useState("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			await carService.create({
				brand: form.brand.trim(),
				price: Number(form.price),
				year: Number(form.year),
			});

			router.push("/");
		} catch (err) {
			setError("Помилка при створенні автівки.");
			console.error(err);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};


	return (
		<main className="max-w-md mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Додати автівку</h1>
			{error && <p className="text-red-500">{error}</p>}

			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					placeholder="Бренд"
					value={form.brand}
					onChange={handleChange}
					required
					pattern="^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$"
					className="border p-2 rounded w-full"
				/>
				<input
					type="number"
					placeholder="Ціна"
					value={form.price}
					onChange={handleChange}
					required
					min={0}
					max={1000000}
					className="border p-2 rounded w-full"
				/>
				<input
					type="number"
					placeholder="Рік"
					value={form.year}
					onChange={handleChange}
					required
					min={1990}
					max={2024}
					className="border p-2 rounded w-full"
				/>
				<button
					type="submit"
					className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
				>
					Додати
				</button>
			</form>
		</main>
	);
}
