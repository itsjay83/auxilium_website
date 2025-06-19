"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname === path;
	};

	return (
		<nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/30 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex-shrink-0 flex items-center">
							<span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
								Ethereal Chronicles
							</span>
						</Link>
					</div>

					<div className="hidden md:flex items-center space-x-1">
						<Link
							href="/"
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
								isActive("/")
									? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
									: "text-gray-300 hover:text-white hover:bg-gray-800"
							}`}>
							Home
						</Link>
						<Link
							href="/game"
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
								isActive("/game")
									? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
									: "text-gray-300 hover:text-white hover:bg-gray-800"
							}`}>
							Game
						</Link>
						<Link
							href="/news"
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
								isActive("/news")
									? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
									: "text-gray-300 hover:text-white hover:bg-gray-800"
							}`}>
							News
						</Link>
						<Link
							href="/community"
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
								isActive("/community")
									? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
									: "text-gray-300 hover:text-white hover:bg-gray-800"
							}`}>
							Community
						</Link>
						<Link
							href="/support"
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
								isActive("/support")
									? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
									: "text-gray-300 hover:text-white hover:bg-gray-800"
							}`}>
							Support
						</Link>
					</div>

					<div className="flex items-center space-x-3">
						<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/25">
							Play Now
						</button>

						{/* Mobile menu button */}
						<button className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu - hidden by default */}
			<div className="md:hidden hidden">
				<div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
					<Link
						href="/"
						className={`block px-3 py-2 rounded-md text-base font-medium ${
							isActive("/")
								? "bg-purple-600 text-white"
								: "text-gray-300 hover:text-white hover:bg-gray-800"
						}`}>
						Home
					</Link>
					<Link
						href="/game"
						className={`block px-3 py-2 rounded-md text-base font-medium ${
							isActive("/game")
								? "bg-purple-600 text-white"
								: "text-gray-300 hover:text-white hover:bg-gray-800"
						}`}>
						Game
					</Link>
					<Link
						href="/news"
						className={`block px-3 py-2 rounded-md text-base font-medium ${
							isActive("/news")
								? "bg-purple-600 text-white"
								: "text-gray-300 hover:text-white hover:bg-gray-800"
						}`}>
						News
					</Link>
					<Link
						href="/community"
						className={`block px-3 py-2 rounded-md text-base font-medium ${
							isActive("/community")
								? "bg-purple-600 text-white"
								: "text-gray-300 hover:text-white hover:bg-gray-800"
						}`}>
						Community
					</Link>
					<Link
						href="/support"
						className={`block px-3 py-2 rounded-md text-base font-medium ${
							isActive("/support")
								? "bg-purple-600 text-white"
								: "text-gray-300 hover:text-white hover:bg-gray-800"
						}`}>
						Support
					</Link>
				</div>
			</div>
		</nav>
	);
}
