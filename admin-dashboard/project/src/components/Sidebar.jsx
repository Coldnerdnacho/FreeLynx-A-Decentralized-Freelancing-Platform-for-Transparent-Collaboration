import { Users, Folder, FileText, Headphones, Settings, AlertTriangle } from 'lucide-react';

// Removed: interface SidebarProps { ... }

const Sidebar = ({ activeSection, setActiveSection }) => { // Removed type annotation

  return (
    <div className="w-64 bg-green-700 text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Users className="text-green-700" size={20} />
          </div>
          <span className="font-bold text-xl">Admin</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <button
          onClick={() => setActiveSection('users')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
            activeSection === 'users'
              ? 'bg-white text-green-700 font-medium'
              : 'text-white hover:bg-green-600'
          }`}
        >
          <Users size={20} />
          <span className="text-sm">User Management</span>
        </button>

        <button
          onClick={() => setActiveSection('disputes')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
            activeSection === 'disputes'
              ? 'bg-white text-green-700 font-medium'
              : 'text-white hover:bg-green-600'
          }`}
        >
          <AlertTriangle size={20} />
          <span className="text-sm">Disputes</span>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors text-white hover:bg-green-600">
          <Folder size={20} />
          <span className="text-sm">Projects & Commissions</span>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors text-white hover:bg-green-600">
          <FileText size={20} />
          <span className="text-sm">Finance & Monetization</span>
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors text-white hover:bg-green-600">
          <Settings size={20} />
          <span className="text-sm">System Settings</span>
        </button>
      </nav>

      {/* Support Section */}
      <div className="mt-auto pt-6 border-t border-green-600">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-green-600 transition-colors">
          <Headphones size={20} />
          <span className="text-sm">FAQ & Support</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;