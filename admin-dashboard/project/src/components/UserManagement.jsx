import { useState } from 'react';
import { Search, Bell, User as UserIcon, CheckCircle, XCircle, Star, Award } from 'lucide-react';
import UserDetailsModal from './UserDetailsModal';

// Removed: type UserType = 'clients' | 'freelancers' | 'mentors';
// Removed: interface User { ... }

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('freelancers'); // Removed type annotation
  const [selectedUser, setSelectedUser] = useState(null); // Removed type annotation
  const [contentTab, setContentTab] = useState('users'); // Removed type annotation

  const [users, setUsers] = useState([ // Removed type annotation
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      verified: true,
      rating: 4.8,
      reviews: 127,
      isActive: true,
      lastLogin: '2 hours ago',
      role: 'freelancers',
    },
    {
      id: '2',
      name: 'Michael Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      verified: false,
      rating: 4.9,
      reviews: 89,
      isActive: false,
      lastLogin: '5 days ago',
      inactiveDays: 5,
      role: 'freelancers',
    },
    {
      id: '3',
      name: 'Emma Williams',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      verified: true,
      rating: 4.6,
      reviews: 203,
      isActive: true,
      lastLogin: '1 day ago',
      role: 'freelancers',
    },
    {
      id: '4',
      name: 'David Rodriguez',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      verified: true,
      isActive: true,
      lastLogin: '3 hours ago',
      role: 'clients',
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      verified: false,
      isActive: true,
      lastLogin: '1 hour ago',
      role: 'clients',
    },
    {
      id: '6',
      name: 'James Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      verified: true,
      rating: 4.9,
      reviews: 450,
      isActive: true,
      lastLogin: '30 minutes ago',
      role: 'mentors',
    },
  ]);

  const toggleVerification = (userId) => { // Removed type annotation
    setUsers(users.map(user =>
      user.id === userId ? { ...user, verified: !user.verified } : user
    ));
  };

  const assignMentorRole = (userId) => { // Removed type annotation
    setUsers(users.map(user => {
      if (user.id === userId) {
        return { ...user, role: 'mentors' }; // Removed type assertion 'as UserType'
      }
      return user;
    }));
  };

  const filteredUsers = users.filter(user => user.role === activeTab);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-6 py-3 border-b border-gray-200 bg-gradient-to-r from-green-50 to-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} className="text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                alt="Admin"
                className="w-9 h-9 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">John Davidson</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          {/* User Type Tabs */}
          <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab('clients')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'clients'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Clients
              </button>
              <button
                onClick={() => setActiveTab('freelancers')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'freelancers'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Freelancers
              </button>
              <button
                onClick={() => setActiveTab('mentors')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'mentors'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Mentors
              </button>
          </div>

          {/* Users List */}
          <div className="space-y-2">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="bg-gradient-to-r from-green-50 to-gray-50 rounded-lg p-3 flex items-center justify-between hover:shadow-md transition-all border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-11 h-11 rounded-full cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    />
                    <div>
                      <h3
                        className="font-semibold text-gray-800 cursor-pointer hover:text-green-600 text-sm"
                        onClick={() => setSelectedUser(user)}
                      >
                        {user.name}
                      </h3>
                      {user.rating && (
                        <div className="flex items-center gap-2 mt-0.5">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-xs text-gray-600 font-medium">{user.rating}</span>
                          </div>
                          <span className="text-xs text-gray-400">({user.reviews})</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {activeTab === 'freelancers' && user.rating && user.rating >= 4.5 && user.role !== 'mentors' && (
                      <button
                        onClick={() => assignMentorRole(user.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-xs"
                      >
                        <Award size={16} />
                        <span className="font-medium">Assign Mentor</span>
                      </button>
                    )}

                    <button
                      onClick={() => toggleVerification(user.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors text-xs ${
                        user.verified
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-200 text-gray-600 hover:bg-green-500 hover:text-white'
                      }`}
                    >
                      {user.verified ? (
                        <>
                          <CheckCircle size={16} />
                          <span>Verified</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} />
                          <span>Verify</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserManagement;