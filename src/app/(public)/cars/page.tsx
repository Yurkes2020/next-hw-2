import CarList from "@/app/components/CarList";
import {carService} from "@/app/services/carService";

export default async function HomePage() {
	const cars = await carService.getAll();

	return (
		<>
			<h1 className="text-2xl font-bold mb-4">Список автівок</h1>
			<CarList cars={cars}/>
		</>
	);
}

