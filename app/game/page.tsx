export default function GamePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						The Game
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
						Dive into a world where ancient magic meets modern adventure.
						Experience epic battles, forge alliances, and discover the secrets
						of the Ethereal Realms.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
							Download Now
						</button>
						<button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300">
							System Requirements
						</button>
					</div>
				</div>
			</section>

			{/* Game Features */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Game Features
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
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
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4 text-center">
								Character Customization
							</h3>
							<p className="text-gray-400 text-center">
								Create your unique hero with extensive customization options
								including appearance, skills, and abilities.
							</p>
						</div>
						<div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
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
										d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4 text-center">
								Open World
							</h3>
							<p className="text-gray-400 text-center">
								Explore vast, beautifully crafted worlds filled with hidden
								treasures and dangerous creatures.
							</p>
						</div>
						<div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
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
							<h3 className="text-xl font-semibold text-white mb-4 text-center">
								Guild System
							</h3>
							<p className="text-gray-400 text-center">
								Join or create guilds, participate in guild wars, and build your
								own community.
							</p>
						</div>
						<div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
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
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4 text-center">
								Achievement System
							</h3>
							<p className="text-gray-400 text-center">
								Complete challenges, unlock achievements, and earn exclusive
								rewards.
							</p>
						</div>
						<div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
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
							<h3 className="text-xl font-semibold text-white mb-4 text-center">
								PvP Arenas
							</h3>
							<p className="text-gray-400 text-center">
								Test your skills against other players in competitive PvP
								battles and tournaments.
							</p>
						</div>
						<div className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
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
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4 text-center">
								Real-time Events
							</h3>
							<p className="text-gray-400 text-center">
								Participate in limited-time events, seasonal content, and
								special challenges.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* System Requirements */}
			<section className="py-20 px-4 bg-gray-800/50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						System Requirements
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-gray-900 p-8 rounded-lg">
							<h3 className="text-2xl font-semibold text-white mb-6 text-center">
								Minimum Requirements
							</h3>
							<ul className="space-y-3 text-gray-300">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									OS: Windows 10 64-bit
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									Processor: Intel Core i5-4460 / AMD FX-6300
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									Memory: 8 GB RAM
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									Graphics: NVIDIA GTX 760 / AMD Radeon R7 260x
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									Storage: 50 GB available space
								</li>
							</ul>
						</div>
						<div className="bg-gray-900 p-8 rounded-lg">
							<h3 className="text-2xl font-semibold text-white mb-6 text-center">
								Recommended Requirements
							</h3>
							<ul className="space-y-3 text-gray-300">
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									OS: Windows 11 64-bit
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									Processor: Intel Core i7-8700K / AMD Ryzen 5 3600X
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									Memory: 16 GB RAM
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									Graphics: NVIDIA RTX 3070 / AMD RX 6700 XT
								</li>
								<li className="flex items-center">
									<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
									Storage: 100 GB available space (SSD recommended)
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Download Section */}
			<section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
						Ready to Play?
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Download Ethereal Chronicles now and start your epic adventure
						today!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
							Download for Windows
						</button>
						<button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
							Download for Mac
						</button>
					</div>
					<p className="text-sm text-white/70 mt-4">
						Free to play • No credit card required
					</p>
				</div>
			</section>
		</div>
	);
}
