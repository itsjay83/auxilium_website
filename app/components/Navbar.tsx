"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname === path;
	};

	return (
		<nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0 flex items-center">
							<span className="text-xl font-bold text-gray-900 dark:text-white">
								Ethereal Chorinicles
							</span>
						</Link>
					</div>

					<div className="flex items-center space-x-4">
						<Link
							href="/"
							className={`px-3 py-2 rounded-md text-sm font-medium ${
								isActive("/")
									? "text-blue-600 dark:text-blue-400"
									: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
							}`}>
							Home
						</Link>
						<Link
							href="/about"
							className={`px-3 py-2 rounded-md text-sm font-medium ${
								isActive("/about")
									? "text-blue-600 dark:text-blue-400"
									: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
							}`}>
							About
						</Link>
						<Link
							href="/contact"
							className={`px-3 py-2 rounded-md text-sm font-medium ${
								isActive("/contact")
									? "text-blue-600 dark:text-blue-400"
									: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
							}`}>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
