import { useState } from 'react';
import { Search, Bell, ArrowLeft, Upload, Paperclip } from 'lucide-react';

function RaiseQuery({ onBack }) {
	const [project, setProject] = useState('');
	const [disputeCategory, setDisputeCategory] = useState('');
	const [counterpart] = useState('John Developer');
	const [attachments, setAttachments] = useState(null);
	const [issueDescription, setIssueDescription] = useState('');

	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setAttachments(e.target.files[0]);
		}
	};

	const handlePublish = () => {
		console.log('Publishing issue:', { project, disputeCategory, counterpart, attachments, issueDescription });
	};

	const handleSaveDraft = () => {
		console.log('Saving draft:', { project, disputeCategory, counterpart, attachments, issueDescription });
	};

	return (
		<div className="flex-1 bg-gray-50">
			<div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<button
						onClick={onBack}
						className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
					>
						<ArrowLeft className="w-6 h-6 text-gray-600" />
					</button>
					<h1 className="text-3xl font-bold text-gray-800">Raise New Dispute</h1>
				</div>
				<div className="flex items-center gap-6">
					<div className="relative">
						<input
							type="text"
							placeholder="Search..."
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
				<div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 mb-8 text-white">
					<h2 className="text-2xl font-bold mb-2">Create Dispute</h2>
					<p className="text-green-100">
						Describe your issue in detail. Our dispute resolution team will review and mediate.
					</p>
				</div>
				<div className="bg-white rounded-xl border border-gray-200 p-8">
					<div className="grid grid-cols-2 gap-8 mb-8">
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Project <span className="text-red-500">*</span>
							</label>
							<select
								value={project}
								onChange={(e) => setProject(e.target.value)}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
							>
								<option value="">Select project</option>
								<option value="project1">E-commerce Website Development</option>
								<option value="project2">Mobile App Design</option>
								<option value="project3">Logo Design Project</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Dispute Category <span className="text-red-500">*</span>
							</label>
							<select
								value={disputeCategory}
								onChange={(e) => setDisputeCategory(e.target.value)}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
							>
								<option value="">Select category</option>
								<option value="payment">Payment Issue</option>
								<option value="quality">Quality Issue</option>
								<option value="deadline">Deadline Issue</option>
								<option value="scope">Scope Creep</option>
								<option value="communication">Communication Issue</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Counterpart
							</label>
							<input
								type="text"
								value={counterpart}
								readOnly
								className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
							/>
							<p className="text-xs text-gray-500 mt-1">Auto-filled based on selected project</p>
						</div>
						<div>
							<label className="block text-sm font-semibold text-gray-700 mb-2">
								Attachments
							</label>
							<div className="relative">
								<input
									type="file"
									onChange={handleFileChange}
									className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
									multiple
								/>
								<div className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors flex items-center gap-3">
									{attachments ? (
										<>
											<Paperclip className="w-5 h-5 text-green-600" />
											<span className="text-gray-700 font-medium">{attachments.name}</span>
										</>
									) : (
										<>
											<Upload className="w-5 h-5 text-gray-400" />
											<span className="text-gray-500">Upload files or drag and drop</span>
										</>
									)}
								</div>
							</div>
							<p className="text-xs text-gray-500 mt-1">PDF, PNG, JPG up to 10MB</p>
						</div>
					</div>
					<div className="mb-8">
						<label className="block text-sm font-semibold text-gray-700 mb-2">
							Issue Description <span className="text-red-500">*</span>
						</label>
						<textarea
							value={issueDescription}
							onChange={(e) => setIssueDescription(e.target.value)}
							rows={8}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
							placeholder="Provide a detailed description of the issue. Include relevant dates, communications, and any other important information..."
						/>
						<div className="flex justify-between items-center mt-2">
							<p className="text-xs text-gray-500">Minimum 50 characters</p>
							<p className="text-xs text-gray-500">{issueDescription.length} characters</p>
						</div>
					</div>
					<div className="bg-gray-50 rounded-lg p-6 mb-8">
						<h3 className="font-semibold text-gray-800 mb-3">Dispute Resolution Process</h3>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-center">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
									<span className="text-green-700 font-bold">1</span>
								</div>
								<p className="text-sm text-gray-600">Dispute Submitted</p>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
									<span className="text-gray-700 font-bold">2</span>
								</div>
								<p className="text-sm text-gray-600">Under Review</p>
							</div>
							<div className="text-center">
								<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
									<span className="text-gray-700 font-bold">3</span>
								</div>
								<p className="text-sm text-gray-600">Resolution</p>
							</div>
						</div>
					</div>
					<div className="flex gap-4 justify-end">
						<button
							onClick={onBack}
							className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
						>
							Cancel
						</button>
						<button
							onClick={handleSaveDraft}
							className="px-6 py-3 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
						>
							Save Draft
						</button>
						<button
							onClick={handlePublish}
							className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-colors"
						>
							Publish Issue
						</button>
					</div>
				</div>
				<div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
					<p className="text-sm text-blue-800">
						<strong>Note:</strong> All disputes are handled confidentially. Both parties will be notified and given an opportunity to respond.
						Average resolution time is 3-5 business days.
					</p>
				</div>
			</div>
		</div>
	);
}

export default RaiseQuery;