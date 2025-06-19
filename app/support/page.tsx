export default function SupportPage() {
	const faqItems = [
		{
			question: "How do I download and install the game?",
			answer:
				"Download the game from our official website or launcher. Run the installer and follow the on-screen instructions. The game requires approximately 50GB of free space.",
		},
		{
			question: "What are the minimum system requirements?",
			answer:
				"You need Windows 10 64-bit, Intel Core i5-4460 or AMD FX-6300, 8GB RAM, NVIDIA GTX 760 or AMD Radeon R7 260x, and 50GB storage space.",
		},
		{
			question: "How do I reset my password?",
			answer:
				"Go to the login page and click 'Forgot Password'. Enter your email address and follow the instructions sent to your email to reset your password.",
		},
		{
			question: "Can I play with friends on different servers?",
			answer:
				"Currently, cross-server play is limited to certain activities. We're working on expanding cross-server functionality in future updates.",
		},
		{
			question: "How do I report a bug or issue?",
			answer:
				"Use the in-game bug report feature or contact our support team through the contact form on this page. Include as much detail as possible.",
		},
		{
			question: "Is the game free to play?",
			answer:
				"Yes, Ethereal Chronicles is completely free to play. There are optional cosmetic items and premium features available for purchase.",
		},
	];

	const helpCategories = [
		{
			title: "Getting Started",
			icon: "🚀",
			articles: [
				"Creating Your Account",
				"First Steps in the Game",
				"Basic Controls Guide",
				"Character Creation Tips",
			],
		},
		{
			title: "Gameplay",
			icon: "⚔️",
			articles: [
				"Combat System Guide",
				"Magic Crafting Tutorial",
				"Guild System Explained",
				"PvP Battle Guide",
			],
		},
		{
			title: "Technical Issues",
			icon: "🔧",
			articles: [
				"Performance Optimization",
				"Connection Problems",
				"Graphics Settings Guide",
				"Common Error Solutions",
			],
		},
		{
			title: "Account & Billing",
			icon: "💰",
			articles: [
				"Account Security",
				"Payment Methods",
				"Subscription Management",
				"Refund Policy",
			],
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16">
			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Support Center
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
						Need help? We're here to assist you with any questions or issues you
						might have.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
							Contact Support
						</button>
						<button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300">
							Live Chat
						</button>
					</div>
				</div>
			</section>

			{/* Quick Help Categories */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						How Can We Help?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{helpCategories.map((category, index) => (
							<div
								key={index}
								className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer">
								<div className="text-3xl mb-4">{category.icon}</div>
								<h3 className="text-white font-semibold mb-4">
									{category.title}
								</h3>
								<ul className="space-y-2">
									{category.articles.map((article, articleIndex) => (
										<li
											key={articleIndex}
											className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
											{article}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Frequently Asked Questions
					</h2>
					<div className="space-y-6">
						{faqItems.map((item, index) => (
							<div
								key={index}
								className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
								<h3 className="text-white font-semibold mb-3 text-lg">
									{item.question}
								</h3>
								<p className="text-gray-400">{item.answer}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Contact Support
					</h2>
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-white font-medium mb-2">
										First Name
									</label>
									<input
										type="text"
										className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
										placeholder="Enter your first name"
									/>
								</div>
								<div>
									<label className="block text-white font-medium mb-2">
										Last Name
									</label>
									<input
										type="text"
										className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
										placeholder="Enter your last name"
									/>
								</div>
							</div>
							<div>
								<label className="block text-white font-medium mb-2">
									Email Address
								</label>
								<input
									type="email"
									className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
									placeholder="Enter your email address"
								/>
							</div>
							<div>
								<label className="block text-white font-medium mb-2">
									Subject
								</label>
								<select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white">
									<option value="">Select a subject</option>
									<option value="technical">Technical Issue</option>
									<option value="billing">Billing Question</option>
									<option value="account">Account Issue</option>
									<option value="gameplay">Gameplay Question</option>
									<option value="bug">Bug Report</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div>
								<label className="block text-white font-medium mb-2">
									Message
								</label>
								<textarea
									rows={6}
									className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white resize-none"
									placeholder="Describe your issue or question in detail..."></textarea>
							</div>
							<div className="text-center">
								<button
									type="submit"
									className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* Additional Support Options */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
						Other Ways to Get Help
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
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
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								Live Chat
							</h3>
							<p className="text-gray-400 mb-4">
								Get instant help from our support team
							</p>
							<button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
								Start Chat
							</button>
						</div>
						<div className="text-center">
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
										d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								Email Support
							</h3>
							<p className="text-gray-400 mb-4">
								Send us an email for detailed assistance
							</p>
							<button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
								Send Email
							</button>
						</div>
						<div className="text-center">
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
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">
								Knowledge Base
							</h3>
							<p className="text-gray-400 mb-4">
								Browse our comprehensive help articles
							</p>
							<button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
								Browse Articles
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
