import {Car} from "@/app/models/carType";

const BASE_URL = "http://185.69.152.209/carsAPI/v1";

export const carService = {
	getAll: async (): Promise<Car[]> => {
		const res = await fetch(`${BASE_URL}/cars`, { cache: "no-store" });
		if (!res.ok) throw new Error("Failed to fetch cars");
		return res.json();
	},

	create: async (car: { brand: string; price: number; year: number }) => {
		const res = await fetch(`${BASE_URL}/cars`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(car),
		});
		if (!res.ok) throw new Error("Failed to create car");
		return res.json();
	},
};
