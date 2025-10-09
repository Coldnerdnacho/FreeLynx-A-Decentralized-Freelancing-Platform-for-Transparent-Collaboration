import { Folder, FileText, Check, X } from 'lucide-react';
import { useState } from 'react';

// Removed: interface Project { ... }

const ProjectPanel = () => {
  const [items, setItems] = useState([ // Removed type annotation
    {
      id: '1',
      name: 'E-commerce Website',
      client: 'David Rodriguez',
      freelancer: 'Sarah Johnson',
      status: 'ongoing',
      type: 'project',
    },
    {
      id: '2',
      name: 'Brand Identity',
      client: 'David Rodriguez',
      freelancer: 'Emma Williams',
      status: 'completed',
      type: 'project',
    },
    {
      id: '3',
      name: 'Web Development',
      client: 'Lisa Anderson',
      freelancer: 'Sarah Johnson',
      status: 'ongoing',
      type: 'project',
    },
    {
      id: '4',
      name: 'Website Redesign',
      freelancer: 'Sarah Johnson',
      client: 'David Rodriguez',
      amount: '$2,500',
      approved: null,
      type: 'proposal',
      status: 'ongoing',
    },
    {
      id: '5',
      name: 'Logo Design',
      freelancer: 'Michael Chen',
      client: 'Lisa Anderson',
      amount: '$800',
      approved: true,
      type: 'proposal',
      status: 'ongoing',
    },
    {
      id: '6',
      name: 'SEO Optimization',
      freelancer: 'Emma Williams',
      client: 'David Rodriguez',
      amount: '$1,200',
      approved: null,
      type: 'proposal',
      status: 'ongoing',
    },
  ]);

  const handleApprove = (id) => { // Removed type annotation
    setItems(items.map(item => item.id === id ? { ...item, approved: true } : item));
  };

  const handleReject = (id) => { // Removed type annotation
    setItems(items.map(item => item.id === id ? { ...item, approved: false } : item));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-gray-800 text-lg">Projects & Proposals</h2>
        <p className="text-xs text-gray-600 mt-1">{items.length} total items</p>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {item.type === 'project' ? (
                  <Folder size={14} className="text-green-600" />
                ) : (
                  <FileText size={14} className="text-blue-600" />
                )}
                <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
              </div>
              {item.type === 'project' && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    item.status === 'ongoing'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {item.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                </span>
              )}
            </div>

            <div className="text-xs text-gray-600 space-y-0.5">
              <p><span className="font-medium">Client:</span> {item.client}</p>
              <p><span className="font-medium">Freelancer:</span> {item.freelancer}</p>
              {item.amount && (
                <p className="text-green-600 font-bold mt-1">{item.amount}</p>
              )}
            </div>

            {item.type === 'proposal' && (
              <div className="mt-2">
                {item.approved === null && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(item.id)}
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-xs font-medium"
                    >
                      <Check size={12} />
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(item.id)}
                      className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs font-medium"
                    >
                      <X size={12} />
                      Reject
                    </button>
                  </div>
                )}
                {item.approved === true && (
                  <div className="flex items-center justify-center gap-1 px-2 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                    <Check size={12} />
                    Approved
                  </div>
                )}
                {item.approved === false && (
                  <div className="flex items-center justify-center gap-1 px-2 py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-medium">
                    <X size={12} />
                    Rejected
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPanel;