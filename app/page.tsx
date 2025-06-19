export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-black/50 z-10"></div>
				<div className="relative z-20 text-center text-white px-4">
					<h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Ethereal Chronicles
					</h1>
					<p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
						Embark on an epic journey through mystical realms where magic and
						destiny collide
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
							Play Now
						</button>
						<button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
							Watch Trailer
						</button>
					</div>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-5"></div>
			</section>

			{/* Features Section */}
			<section className="py-20 px-4 bg-gray-900">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Game Features
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gray-800 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
							<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								Epic Combat
							</h3>
							<p className="text-gray-400">
								Master powerful spells and engage in intense battles with
								mythical creatures
							</p>
						</div>
						<div className="bg-gray-800 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
							<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								Multiplayer
							</h3>
							<p className="text-gray-400">
								Join forces with friends in cooperative adventures and PvP
								battles
							</p>
						</div>
						<div className="bg-gray-800 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
							<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								Magic System
							</h3>
							<p className="text-gray-400">
								Discover and master ancient spells with our unique magic
								crafting system
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Screenshots Section */}
			<section className="py-20 px-4 bg-gray-800">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Screenshots
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<div
								key={i}
								className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
								<div className="h-64 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
									<span className="text-white text-lg font-semibold">
										Screenshot {i}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
						Ready to Begin Your Adventure?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Join millions of players in the most immersive fantasy world ever
						created
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
							Download Now
						</button>
						<button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
							Learn More
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 py-12 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-white text-lg font-semibold mb-4">
								Ethereal Chronicles
							</h3>
							<p className="text-gray-400">
								Embark on an epic journey through mystical realms
							</p>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Game</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Download
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Patch Notes
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Support
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Community</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Forums
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Discord
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Reddit
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										About
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Press
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>&copy; 2024 Ethereal Chronicles. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
