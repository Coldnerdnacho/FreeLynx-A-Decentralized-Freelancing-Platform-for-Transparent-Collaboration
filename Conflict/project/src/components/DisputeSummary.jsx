import { Search, Bell, User, Plus, AlertCircle, Clock, FileText } from 'lucide-react';

function DisputeSummary({ onRaiseQuery }) {
  const disputes = [
    {
      id: '12345',
      projectTitle: 'E-commerce Website Development',
      involvedUser: 'Client',
      counterpart: 'John Developer',
      lastUpdated: '10/5/2025',
      status: 'Open',
      description: 'Payment dispute regarding final milestone delivery',
    },
    {
      id: '12344',
      projectTitle: 'Mobile App Design',
      involvedUser: 'Freelancer',
      counterpart: 'Sarah Client',
      lastUpdated: '10/3/2025',
      status: 'Under Review',
      description: 'Scope creep and additional work compensation',
    },
  ];

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dispute Management</h1>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search disputes..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-80"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>

          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Name</span>
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Active Disputes Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3">Active Disputes</h2>
              <p className="text-green-100 mb-6 max-w-2xl">
                Manage and resolve disputes with clients or freelancers. Track all ongoing issues and their resolution progress.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={onRaiseQuery}
                  className="bg-white text-green-700 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Raise New Dispute
                </button>
                <button className="bg-green-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-900 transition-colors">
                  View History
                </button>
              </div>
            </div>
            <div className="w-48 h-48">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="80" r="30" fill="white" opacity="0.9"/>
                <rect x="85" y="110" width="30" height="60" fill="white" opacity="0.9" rx="15"/>
                <circle cx="95" cy="75" r="5" fill="#059669"/>
                <circle cx="105" cy="75" r="5" fill="#059669"/>
                <path d="M 90 90 Q 100 85, 110 90" stroke="#059669" strokeWidth="3" fill="none"/>
                <circle cx="60" cy="100" r="8" fill="white" opacity="0.7"/>
                <circle cx="140" cy="100" r="8" fill="white" opacity="0.7"/>
                <path d="M 50 130 L 45 140 L 55 138" fill="white" opacity="0.7"/>
                <path d="M 150 130 L 155 140 L 145 138" fill="white" opacity="0.7"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Filter & Sort */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-green-700 text-white rounded-lg font-medium">All Disputes</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 border border-gray-200">Open</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 border border-gray-200">Under Review</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 border border-gray-200">Resolved</button>
          </div>

          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Sort by: Latest</option>
            <option>Sort by: Oldest</option>
            <option>Sort by: Status</option>
          </select>
        </div>

        {/* Dispute Cards */}
        <div className="space-y-4">
          {disputes.map((dispute) => (
            <div key={dispute.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{dispute.projectTitle}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      dispute.status === 'Open' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>{dispute.status}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{dispute.description}</p>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Dispute ID</div>
                        <div className="font-semibold text-gray-800">#{dispute.id}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Involved User</div>
                        <div className="font-semibold text-gray-800">{dispute.involvedUser}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Counterpart</div>
                        <div className="font-semibold text-gray-800">{dispute.counterpart}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500">Last Updated</div>
                        <div className="font-semibold text-gray-800">{dispute.lastUpdated}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 ml-6">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Dispute Statistics</h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2</div>
              <div className="text-sm text-gray-600">Active Disputes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">1</div>
              <div className="text-sm text-gray-600">Under Review</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5</div>
              <div className="text-sm text-gray-600">Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600">3.2 days</div>
              <div className="text-sm text-gray-600">Avg. Resolution Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisputeSummary;
