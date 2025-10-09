import { X, Clock, Activity, FileText, Briefcase, Upload, Ban } from 'lucide-react';
import { useState } from 'react';

// Removed: interface User { ... }
// Removed: interface UserDetailsModalProps { ... }

const UserDetailsModal = ({ user, onClose }) => { // Removed type annotation
  const [activeTab, setActiveTab] = useState('activity'); // Removed type annotation

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 capitalize">{user.role.slice(0, -1)}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              activeTab === 'activity'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Activity Status
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-2 font-medium transition-colors border-b-2 ${
              activeTab === 'documents'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            Documents
          </button>
          {user.role === 'freelancers' && (
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'experience'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Experience
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === 'activity' && (
            <>
              <div className="bg-gradient-to-r from-green-50 to-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-semibold">Account Status</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.isActive
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {!user.isActive && user.inactiveDays && (
                <div className="bg-orange-50 rounded-xl p-4 flex items-center gap-3 border border-orange-200">
                  <Clock className="text-orange-500" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Inactive Duration</p>
                    <p className="text-sm text-gray-600">{user.inactiveDays} days inactive</p>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3 border border-blue-200">
                <Activity className="text-blue-500" size={20} />
                <div>
                  <p className="font-semibold text-gray-800">Last Login</p>
                  <p className="text-sm text-gray-600">{user.lastLogin}</p>
                </div>
              </div>

              {user.rating && (
                <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl p-4 border border-yellow-200">
                  <p className="font-semibold text-gray-800 mb-3">Performance Metrics</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <p className="text-3xl font-bold text-green-600">{user.rating}</p>
                      <p className="text-sm text-gray-600 mt-1">Average Rating</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <p className="text-3xl font-bold text-blue-600">{user.reviews}</p>
                      <p className="text-sm text-gray-600 mt-1">Total Reviews</p>
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium mt-4">
                <Ban size={18} />
                Suspend Account
              </button>
            </>
          )}

          {activeTab === 'documents' && (
            <div>
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300 text-center mb-4">
                <Upload size={40} className="text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-3">Upload user documents</p>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                  Choose Files
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800 mb-3">Uploaded Documents</h3>
                {['ID Verification.pdf', 'Portfolio.pdf', 'Certifications.pdf'].map((doc, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 flex items-center justify-between border border-gray-200">
                    <div className="flex items-center gap-3">
                      <FileText className="text-blue-500" size={20} />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{doc}</p>
                        <p className="text-xs text-gray-500">Uploaded 2 days ago</p>
                      </div>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && user.role === 'freelancers' && (
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="text-purple-600" size={24} />
                  <h3 className="font-semibold text-gray-800">Professional Experience</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium text-gray-800">Senior Web Developer</p>
                    <p className="text-sm text-gray-600">Tech Solutions Inc. • 2020-2023</p>
                    <p className="text-xs text-gray-500 mt-1">Led development of enterprise web applications</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-medium text-gray-800">Full Stack Developer</p>
                    <p className="text-sm text-gray-600">Digital Agency • 2018-2020</p>
                    <p className="text-xs text-gray-500 mt-1">Built custom CMS and e-commerce platforms</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-3">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Git'].map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {user.role === 'clients' && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-700"><span className="font-semibold">Verification Status:</span> {user.verified ? 'Verified Client' : 'Pending Verification'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailsModal;