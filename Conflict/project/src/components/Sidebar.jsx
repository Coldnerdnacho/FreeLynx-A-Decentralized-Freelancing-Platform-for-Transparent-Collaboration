import { Home, Bell, Search, Crown, BookOpen, Mail, FileText, DollarSign, User, MessageSquare, Settings, HelpCircle } from 'lucide-react';

function Sidebar({ currentPage, onNavigate }) {
	const menuItems = [
		{ id: 'home', icon: Home, label: 'Home' },
		{ id: 'notifications', icon: Bell, label: 'Notifications' },
		{ id: 'browse', icon: Search, label: 'Browse Projects' },
		{ id: 'premium', icon: Crown, label: 'Premium' },
	];

	const libraryItems = [
		{ id: 'proposals', icon: Mail, label: 'My Proposals' },
		{ id: 'contracts', icon: FileText, label: 'Active Contracts' },
		{ id: 'earnings', icon: DollarSign, label: 'Earnings/Wallet' },
		{ id: 'profile', icon: User, label: 'Profile & Portfolio' },
	];

	const supportItems = [
		{ id: 'community', icon: MessageSquare, label: 'Community Chat' },
		{ id: 'settings', icon: Settings, label: 'Setting' },
		{ id: 'help', icon: HelpCircle, label: 'Help & Support' },
	];

	return (
		<div className="w-64 bg-gradient-to-b from-green-600 to-green-700 min-h-screen text-white p-6 flex flex-col">
			<div className="flex items-center gap-3 mb-8">
				<div className="w-10 h-10 bg-white rounded-lg"></div>
				<div>
					<div className="font-bold text-sm">Freelancer</div>
					<div className="font-bold text-sm">name</div>
				</div>
			</div>

			<nav className="flex-1">
				<div className="space-y-2 mb-6">
					{menuItems.map((item) => (
						<button
							key={item.id}
							onClick={() => onNavigate(item.id)}
							className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
								currentPage === item.id ? 'bg-white/20' : 'hover:bg-white/10'
							}`}
						>
							<item.icon className="w-5 h-5" />
							<span className="font-medium">{item.label}</span>
						</button>
					))}
				</div>

				<div className="mb-6">
					<h3 className="text-sm font-bold mb-3 px-4">Library</h3>
					<div className="space-y-2">
						{libraryItems.map((item) => (
							<button
								key={item.id}
								onClick={() => onNavigate(item.id)}
								className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
									currentPage === item.id ? 'bg-white/20' : 'hover:bg-white/10'
								}`}
							>
								<item.icon className="w-5 h-5" />
								<span className="font-medium">{item.label}</span>
							</button>
						))}
					</div>
				</div>

				<div>
					<h3 className="text-sm font-bold mb-3 px-4">Support</h3>
					<div className="space-y-2">
						{supportItems.map((item) => (
							<button
								key={item.id}
								onClick={() => onNavigate(item.id)}
								className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
									currentPage === item.id ? 'bg-white/20' : 'hover:bg-white/10'
								}`}
							>
								<item.icon className="w-5 h-5" />
								<span className="font-medium">{item.label}</span>
							</button>
						))}
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;