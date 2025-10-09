import { FileText, Check, X } from 'lucide-react';
import { useState } from 'react';

// Removed: interface Proposal { ... }

const ProposalPanel = () => {
  const [proposals, setProposals] = useState([ // Removed type annotation
    {
      id: '1',
      title: 'Website Redesign',
      freelancer: 'Sarah Johnson',
      client: 'David Rodriguez',
      amount: '$2,500',
      approved: null,
    },
    {
      id: '2',
      title: 'Logo Design',
      freelancer: 'Michael Chen',
      client: 'Lisa Anderson',
      amount: '$800',
      approved: true,
    },
    {
      id: '3',
      title: 'SEO Optimization',
      freelancer: 'Emma Williams',
      client: 'David Rodriguez',
      amount: '$1,200',
      approved: null,
    },
    {
      id: '4',
      title: 'Content Writing',
      freelancer: 'Sarah Johnson',
      client: 'Lisa Anderson',
      amount: '$600',
      approved: false,
    },
  ]);

  const handleApprove = (proposalId) => { // Removed type annotation
    setProposals(
      proposals.map((p) =>
        p.id === proposalId ? { ...p, approved: true } : p
      )
    );
  };

  const handleRemove = (proposalId) => { // Removed type annotation
    setProposals(
      proposals.map((p) =>
        p.id === proposalId ? { ...p, approved: false } : p
      )
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex-1">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="text-green-600" size={20} />
        <h2 className="font-bold text-gray-800">Proposal List</h2>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="bg-gray-50 rounded-lg p-3">
            <div className="mb-2">
              <h3 className="font-medium text-gray-800 text-sm mb-1">
                {proposal.title}
              </h3>
              <div className="text-xs text-gray-600">
                <p>From: {proposal.freelancer}</p>
                <p>To: {proposal.client}</p>
              </div>
              <p className="text-sm font-bold text-green-600 mt-1">
                {proposal.amount}
              </p>
            </div>

            {proposal.approved === null && (
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(proposal.id)}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-xs font-medium"
                >
                  <Check size={14} />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => handleRemove(proposal.id)}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs font-medium"
                >
                  <X size={14} />
                  <span>Remove</span>
                </button>
              </div>
            )}

            {proposal.approved === true && (
              <div className="flex items-center justify-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                <Check size={14} />
                <span>Approved</span>
              </div>
            )}

            {proposal.approved === false && (
              <div className="flex items-center justify-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-medium">
                <X size={14} />
                <span>Removed</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProposalPanel;