import Link from "next/link";

export const Menu = () => {
	return <>
		<ul>
			<li>
				<Link href="/cars">Cars</Link>
			</li>
			<li>
				<Link href="/add-car">Add-car</Link>
			</li>
		</ul>
	</>
}