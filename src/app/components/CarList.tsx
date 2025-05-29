import React from "react";

interface Car {
	id: number;
	brand: string;
	price: number;
	year: number;
}

interface CarListProps {
	cars: Car[];
}

export const CarList: React.FC<CarListProps> = ({ cars }) => {
	if (cars.length === 0) {
		return <p className="text-gray-500">Автівок поки немає.</p>;
	}

	return (
		<ul className="mt-4 space-y-2">
			{cars.map((car) => (
				<li key={car.id} className="border p-3 rounded shadow-sm hover:shadow-md transition">
					<p><strong>Бренд:</strong> {car.brand}</p>
					<p><strong>Ціна:</strong> ${car.price}</p>
					<p><strong>Рік:</strong> {car.year}</p>
				</li>
			))}
		</ul>
	);
};

export default CarList;
