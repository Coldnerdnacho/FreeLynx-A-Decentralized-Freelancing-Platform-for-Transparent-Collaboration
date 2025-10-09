import { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserManagement from './components/UserManagement';
import ProjectPanel from './components/ProjectPanel';
import ProposalPanel from './components/ProposalPanel';

function App() {
  const [activeSection, setActiveSection] = useState('users'); // Removed type annotation

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-600 flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="flex-1 p-4">
        <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-white">
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Manage users, projects, proposals, and disputes</p>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Left Panel - Projects/Proposals or Disputes */}
            <div className="w-80 border-r border-gray-200 flex flex-col">
              {activeSection === 'users' ? <ProjectPanel /> : <DisputePanel />}
            </div>

            {/* Main Content - User Management */}
            <div className="flex-1 overflow-auto">
              <UserManagement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DisputePanel = () => {
  const disputes = [
    {
      id: '1',
      project: 'Mobile App Design',
      client: 'Lisa Anderson',
      freelancer: 'Michael Chen',
      issue: 'Payment dispute - work not completed as agreed',
      date: '2 days ago',
    },
    {
      id: '2',
      project: 'Logo Design',
      client: 'David Rodriguez',
      freelancer: 'Emma Williams',
      issue: 'Quality concerns with deliverables',
      date: '5 hours ago',
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-gray-800 text-lg">Active Disputes</h2>
        <p className="text-xs text-gray-600 mt-1">{disputes.length} pending resolution</p>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-3">
        {disputes.map((dispute) => (
          <div key={dispute.id} className="bg-red-50 border border-red-200 rounded-lg p-3">
            <h3 className="font-semibold text-gray-800 text-sm mb-2">{dispute.project}</h3>
            <div className="text-xs text-gray-600 space-y-1 mb-2">
              <p><span className="font-medium">Client:</span> {dispute.client}</p>
              <p><span className="font-medium">Freelancer:</span> {dispute.freelancer}</p>
              <p className="text-red-600 font-medium mt-2">{dispute.issue}</p>
              <p className="text-gray-500">{dispute.date}</p>
            </div>
            <button className="w-full px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-xs font-medium mt-2">
              Resolve Dispute
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;