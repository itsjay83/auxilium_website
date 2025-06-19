export default function CommunityPage() {
	const communityStats = [
		{ label: "Active Players", value: "2.5M+", icon: "👥" },
		{ label: "Guilds", value: "15K+", icon: "🏰" },
		{ label: "Discord Members", value: "500K+", icon: "💬" },
		{ label: "Daily Events", value: "50+", icon: "🎯" },
	];

	const featuredContent = [
		{
			id: 1,
			title: "Amazing Fan Art by @ShadowMage",
			author: "ShadowMage",
			type: "Fan Art",
			likes: 1247,
			image: "bg-gradient-to-br from-purple-600 to-pink-600",
		},
		{
			id: 2,
			title: "Epic Cosplay: Ethereal Warrior",
			author: "CosplayQueen",
			type: "Cosplay",
			likes: 892,
			image: "bg-gradient-to-br from-blue-600 to-cyan-600",
		},
		{
			id: 3,
			title: "Guild Tournament Highlights",
			author: "TournamentMaster",
			type: "Video",
			likes: 2156,
			image: "bg-gradient-to-br from-green-600 to-emerald-600",
		},
		{
			id: 4,
			title: "Beginner's Guide to Magic Crafting",
			author: "MagicMaster",
			type: "Guide",
			likes: 567,
			image: "bg-gradient-to-br from-orange-600 to-red-600",
		},
	];

	const forumCategories = [
		{ name: "General Discussion", topics: 1250, posts: 15420, icon: "💬" },
		{ name: "Gameplay Help", topics: 890, posts: 12340, icon: "❓" },
		{ name: "Guild Recruitment", topics: 456, posts: 6780, icon: "🏰" },
		{ name: "Trading & Economy", topics: 234, posts: 3450, icon: "💰" },
		{ name: "PvP & Combat", topics: 567, posts: 7890, icon: "⚔️" },
		{ name: "Lore & Story", topics: 123, posts: 2340, icon: "📚" },
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Community
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
						Join millions of players in the most vibrant gaming community. Share
						experiences, make friends, and be part of something extraordinary.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
							Join Discord
						</button>
						<button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300">
							Visit Forums
						</button>
					</div>
				</div>
			</section>

			{/* Community Stats */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Community Stats
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{communityStats.map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-4xl mb-4">{stat.icon}</div>
								<div className="text-3xl md:text-4xl font-bold text-white mb-2">
									{stat.value}
								</div>
								<div className="text-gray-400">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured Content */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Featured Content
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{featuredContent.map((content) => (
							<div
								key={content.id}
								className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
								<div
									className={`h-32 ${content.image} flex items-center justify-center`}>
									<span className="text-white text-lg font-semibold">
										{content.type}
									</span>
								</div>
								<div className="p-4">
									<h3 className="text-white font-semibold mb-2 line-clamp-2">
										{content.title}
									</h3>
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-400">by {content.author}</span>
										<span className="text-purple-400">❤️ {content.likes}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Forums */}
			<section className="py-20 px-4 bg-gray-800/50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Community Forums
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{forumCategories.map((category, index) => (
							<div
								key={index}
								className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer">
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl">{category.icon}</span>
									<span className="text-sm text-gray-400">
										{category.posts.toLocaleString()} posts
									</span>
								</div>
								<h3 className="text-white font-semibold mb-2">
									{category.name}
								</h3>
								<p className="text-gray-400 text-sm">
									{category.topics.toLocaleString()} topics
								</p>
							</div>
						))}
					</div>
					<div className="text-center mt-12">
						<button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
							Browse All Forums
						</button>
					</div>
				</div>
			</section>

			{/* Discord Integration */}
			<section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
						Join Our Discord
					</h2>
					<p className="text-xl text-white/90 mb-8">
						Connect with players, join voice channels, and get real-time updates
						from our development team.
					</p>
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
							<div>
								<div className="text-2xl mb-2">🎮</div>
								<h3 className="text-white font-semibold mb-2">
									Gaming Channels
								</h3>
								<p className="text-white/80 text-sm">
									Find groups, share strategies, and discuss gameplay
								</p>
							</div>
							<div>
								<div className="text-2xl mb-2">🎨</div>
								<h3 className="text-white font-semibold mb-2">
									Creative Corner
								</h3>
								<p className="text-white/80 text-sm">
									Share fan art, cosplay, and creative content
								</p>
							</div>
							<div>
								<div className="text-2xl mb-2">📢</div>
								<h3 className="text-white font-semibold mb-2">Announcements</h3>
								<p className="text-white/80 text-sm">
									Get notified about updates and events first
								</p>
							</div>
						</div>
					</div>
					<button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
						Join Discord Server
					</button>
				</div>
			</section>

			{/* Community Guidelines */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Community Guidelines
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-gray-800 p-8 rounded-lg">
							<h3 className="text-2xl font-semibold text-white mb-6">
								Be Respectful
							</h3>
							<p className="text-gray-300 mb-4">
								Treat all community members with respect and kindness.
								Harassment, hate speech, and toxic behavior will not be
								tolerated.
							</p>
							<ul className="space-y-2 text-gray-400">
								<li>• No personal attacks or harassment</li>
								<li>• Respect different opinions and perspectives</li>
								<li>• Be inclusive and welcoming to new players</li>
							</ul>
						</div>
						<div className="bg-gray-800 p-8 rounded-lg">
							<h3 className="text-2xl font-semibold text-white mb-6">
								Stay On Topic
							</h3>
							<p className="text-gray-300 mb-4">
								Keep discussions relevant to Ethereal Chronicles and gaming.
								Avoid spam, off-topic posts, and excessive self-promotion.
							</p>
							<ul className="space-y-2 text-gray-400">
								<li>• Keep discussions game-related</li>
								<li>• No spam or excessive advertising</li>
								<li>• Use appropriate channels for different topics</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
