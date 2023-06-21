import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchForm from "@/app/[lang]/components/SearchForm";

export default function Header() {


	/* useEffect(() => {
		if (document) {
			document.body.classList.remove('nav-active')
		}
	}, []) */

	return (
		<>
		<header className="header w-full py-4">
			<h2 className="text-center mb-6">ScamScan Website Check</h2>
			<SearchForm></SearchForm>
		</header>
		</>
	)
}