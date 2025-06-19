export default function PlayPage() {
	const downloadOptions = [
		{
			platform: "Windows",
			icon: "🪟",
			size: "45.2 GB",
			requirements: "Windows 10 64-bit or later",
			features: ["DirectX 12", "Full Controller Support", "4K Resolution"],
		},
		{
			platform: "macOS",
			icon: "🍎",
			size: "48.1 GB",
			requirements: "macOS 11.0 or later",
			features: [
				"Metal Graphics API",
				"Apple Silicon Optimized",
				"Retina Display Support",
			],
		},
		{
			platform: "Linux",
			icon: "🐧",
			size: "44.8 GB",
			requirements: "Ubuntu 20.04 or equivalent",
			features: ["Vulkan Support", "Steam Deck Compatible", "Custom Launcher"],
		},
	];

	const quickStartSteps = [
		{
			step: 1,
			title: "Download the Game",
			description:
				"Choose your platform and download the game client. The download size is approximately 45GB.",
			icon: "⬇️",
		},
		{
			step: 2,
			title: "Install & Update",
			description:
				"Run the installer and let the game update to the latest version. This may take a few minutes.",
			icon: "⚙️",
		},
		{
			step: 3,
			title: "Create Account",
			description:
				"Sign up for a free account or log in with your existing credentials.",
			icon: "👤",
		},
		{
			step: 4,
			title: "Start Playing",
			description:
				"Choose your server, create your character, and begin your adventure!",
			icon: "🎮",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Play Now
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
						Ready to embark on your epic journey? Download Ethereal Chronicles
						and join millions of players in the most immersive fantasy world.
					</p>
					<div className="bg-purple-600/20 backdrop-blur-sm rounded-lg p-8 mb-8">
						<div className="text-center">
							<div className="text-6xl mb-4">🎮</div>
							<h2 className="text-3xl font-bold text-white mb-4">
								Game Status: Online
							</h2>
							<p className="text-purple-300 mb-4">
								All servers are running smoothly
							</p>
							<div className="flex justify-center gap-8 text-sm">
								<span className="text-green-400">● Active Players: 2.5M+</span>
								<span className="text-blue-400">● Servers: 24/7</span>
								<span className="text-yellow-400">● Uptime: 99.9%</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Download Options */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Choose Your Platform
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{downloadOptions.map((option, index) => (
							<div
								key={index}
								className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300">
								<div className="text-center mb-6">
									<div className="text-4xl mb-4">{option.icon}</div>
									<h3 className="text-2xl font-semibold text-white mb-2">
										{option.platform}
									</h3>
									<p className="text-gray-400 mb-4">{option.size}</p>
									<p className="text-sm text-gray-500 mb-6">
										{option.requirements}
									</p>
								</div>
								<ul className="space-y-2 mb-8">
									{option.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className="flex items-center text-gray-300">
											<span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
											{feature}
										</li>
									))}
								</ul>
								<button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
									Download for {option.platform}
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Quick Start Guide */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Quick Start Guide
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{quickStartSteps.map((step, index) => (
							<div key={index} className="text-center">
								<div className="relative mb-6">
									<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto text-2xl">
										{step.icon}
									</div>
									<div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
										{step.step}
									</div>
								</div>
								<h3 className="text-xl font-semibold text-white mb-4">
									{step.title}
								</h3>
								<p className="text-gray-400">{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Game Launcher */}
			<section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
						Enhanced Gaming Experience
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Download our custom game launcher for the best experience with
						automatic updates, server status, and community features.
					</p>
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
							<div>
								<div className="text-3xl mb-2">🔄</div>
								<h3 className="text-white font-semibold mb-2">Auto Updates</h3>
								<p className="text-white/80 text-sm">
									Never miss a patch or update
								</p>
							</div>
							<div>
								<div className="text-3xl mb-2">📊</div>
								<h3 className="text-white font-semibold mb-2">Server Status</h3>
								<p className="text-white/80 text-sm">
									Real-time server information
								</p>
							</div>
							<div>
								<div className="text-3xl mb-2">👥</div>
								<h3 className="text-white font-semibold mb-2">Friend System</h3>
								<p className="text-white/80 text-sm">
									Connect with friends easily
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
							Download Launcher
						</button>
						<button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
							Learn More
						</button>
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

			{/* Call to Action */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
						Ready to Begin Your Adventure?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Join millions of players and start your epic journey in Ethereal
						Chronicles today!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
							Download Now
						</button>
						<button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300">
							Watch Trailer
						</button>
					</div>
					<p className="text-sm text-gray-400 mt-4">
						Free to play • No credit card required • Download size: ~45GB
					</p>
				</div>
			</section>
		</div>
	);
}
