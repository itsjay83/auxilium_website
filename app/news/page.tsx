export default function NewsPage() {
	const newsItems = [
		{
			id: 1,
			title: "Major Update 2.1: The Shadow Realms Expansion",
			date: "December 15, 2024",
			category: "Update",
			excerpt:
				"Explore the mysterious Shadow Realms in our biggest expansion yet. New zones, dungeons, and legendary items await!",
			image: "bg-gradient-to-br from-purple-600 to-pink-600",
		},
		{
			id: 2,
			title: "Winter Festival Event Now Live",
			date: "December 10, 2024",
			category: "Event",
			excerpt:
				"Celebrate the season with special winter-themed quests, exclusive cosmetics, and limited-time rewards.",
			image: "bg-gradient-to-br from-blue-600 to-cyan-600",
		},
		{
			id: 3,
			title: "Balance Changes - December Patch Notes",
			date: "December 5, 2024",
			category: "Patch Notes",
			excerpt:
				"We've made significant balance adjustments to improve gameplay experience. Check out all the changes here.",
			image: "bg-gradient-to-br from-green-600 to-emerald-600",
		},
		{
			id: 4,
			title: "New Player Guide: Getting Started in Ethereal Chronicles",
			date: "November 28, 2024",
			category: "Guide",
			excerpt:
				"Everything new players need to know about starting their journey in the mystical world of Ethereal Chronicles.",
			image: "bg-gradient-to-br from-orange-600 to-red-600",
		},
		{
			id: 5,
			title: "Community Spotlight: Player Creations",
			date: "November 20, 2024",
			category: "Community",
			excerpt:
				"Showcasing amazing fan art, cosplay, and creative content from our incredible community.",
			image: "bg-gradient-to-br from-indigo-600 to-purple-600",
		},
		{
			id: 6,
			title: "Server Maintenance - December 1st",
			date: "November 25, 2024",
			category: "Maintenance",
			excerpt:
				"Scheduled maintenance to improve server performance and implement new features.",
			image: "bg-gradient-to-br from-gray-600 to-slate-600",
		},
	];

	const categories = [
		"All",
		"Update",
		"Event",
		"Patch Notes",
		"Guide",
		"Community",
		"Maintenance",
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						News & Updates
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
						Stay up to date with the latest news, updates, and announcements
						from the world of Ethereal Chronicles.
					</p>
				</div>
			</section>

			{/* Category Filter */}
			<section className="py-8 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-wrap justify-center gap-4">
						{categories.map((category) => (
							<button
								key={category}
								className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium">
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* News Grid */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{newsItems.map((item) => (
							<article
								key={item.id}
								className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
								<div
									className={`h-48 ${item.image} flex items-center justify-center`}>
									<span className="text-white text-lg font-semibold">
										{item.category}
									</span>
								</div>
								<div className="p-6">
									<div className="flex items-center justify-between mb-3">
										<span className="text-sm text-purple-400 font-medium">
											{item.category}
										</span>
										<span className="text-sm text-gray-400">{item.date}</span>
									</div>
									<h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
										{item.title}
									</h3>
									<p className="text-gray-400 mb-4 line-clamp-3">
										{item.excerpt}
									</p>
									<button className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
										Read More →
									</button>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
						Never Miss an Update
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Subscribe to our newsletter and get the latest news delivered to
						your inbox.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
						/>
						<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
							Subscribe
						</button>
					</div>
					<p className="text-sm text-white/70 mt-4">
						We respect your privacy. Unsubscribe at any time.
					</p>
				</div>
			</section>

			{/* Social Media */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
						Follow Us
					</h2>
					<p className="text-xl text-gray-300 mb-12">
						Join our community on social media for real-time updates and
						discussions.
					</p>
					<div className="flex flex-wrap justify-center gap-6">
						<a
							href="#"
							className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-lg hover:bg-purple-600 transition-all duration-300">
							<svg
								className="w-6 h-6 text-white"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
							<span className="text-white font-medium">Twitter</span>
						</a>
						<a
							href="#"
							className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-lg hover:bg-purple-600 transition-all duration-300">
							<svg
								className="w-6 h-6 text-white"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
							</svg>
							<span className="text-white font-medium">Discord</span>
						</a>
						<a
							href="#"
							className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-lg hover:bg-purple-600 transition-all duration-300">
							<svg
								className="w-6 h-6 text-white"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
							</svg>
							<span className="text-white font-medium">Instagram</span>
						</a>
						<a
							href="#"
							className="flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-lg hover:bg-purple-600 transition-all duration-300">
							<svg
								className="w-6 h-6 text-white"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
							</svg>
							<span className="text-white font-medium">YouTube</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
