import React, { useState } from 'react';

// Simple icon components
const Search = () => <span style={{fontSize: '16px'}}>🔍</span>;
const Bell = () => <span style={{fontSize: '16px'}}>🔔</span>;
const MessageCircle = () => <span style={{fontSize: '16px'}}>💬</span>;
const MoreHorizontal = () => <span style={{fontSize: '16px'}}>⋯</span>;
const Heart = () => <span style={{fontSize: '16px'}}>❤️</span>;
const User = () => <span style={{fontSize: '16px'}}>👤</span>;
const Zap = () => <span style={{fontSize: '16px'}}>⚡</span>;
const Users = () => <span style={{fontSize: '16px'}}>👥</span>;
const Calendar = () => <span style={{fontSize: '16px'}}>📅</span>;
const Upload = () => <span style={{fontSize: '16px'}}>📤</span>;

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewProject, setShowNewProject] = useState(false);
  const [budgetType, setBudgetType] = useState('fixed');
  const [isPublic, setIsPublic] = useState(true);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: '',
    description: '',
    timeline: '',
    attachments: '',
    experience: '',
    freelancersNeeded: '',
    fixedBudget: '',
    hourlyRate: ''
  });

  const handleNewProjectClick = () => {
    setShowNewProject(true);
    setTimeout(() => {
      document.getElementById('new-project-section').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleInputChange = (field, value) => {
    setProjectForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePublishProject = () => {
    console.log('Publishing project:', projectForm);
    alert('Project published successfully!');
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', projectForm);
    alert('Draft saved successfully!');
  };

  const mockProjects = [
    { id: 1, name: 'Hospital', type: 'Payment', amount: '$1900', icon: Heart, color: '#ef4444' },
    { id: 2, name: 'Farmer Project', type: 'Payment', amount: '$2000', icon: User, color: '#3b82f6' },
    { id: 3, name: 'Coordination Project', type: 'Payment', amount: '$2500', icon: User, color: '#8b5cf6' },
    { id: 4, name: 'Soda Pop Campaign', type: 'Subscription', amount: '$200', icon: Zap, color: '#eab308' }
  ];

  const mockOngoingProjects = [
    { name: 'E-commerce Website', progress: 85 },
    { name: 'Mobile App Design', progress: 60 },
    { name: 'Brand Identity', progress: 45 },
    { name: 'Content Writing', progress: 90 },
    { name: 'SEO Optimization', progress: 30 },
    { name: 'Social Media Campaign', progress: 75 },
    { name: 'Logo Design', progress: 100 }
  ];

  const mockDisputes = [
    'Website Development',
    'Logo Design Revision',
    'Payment Processing',
    'Content Delivery',
    'Mobile App Testing',
    'Database Setup',
    'API Integration'
  ];

  const mockPeople = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face'
  ];

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    fontFamily: 'Arial, sans-serif'
  };

  const sidebarStyle = {
    width: '256px',
    backgroundColor: '#4b5563',
    color: 'white',
    display: 'flex',
    flexDirection: 'column'
  };

  const sidebarHeaderStyle = {
    padding: '24px',
    borderBottom: '1px solid #6b7280'
  };

  const navItemStyle = {
    padding: '12px 24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s'
  };

  const activeNavStyle = {
    ...navItemStyle,
    backgroundColor: '#10b981',
    borderRadius: '0 25px 25px 0',
    marginRight: '16px'
  };

  const companyDetailsStyle = {
    margin: '48px 16px 16px 16px',
    backgroundColor: '#10b981',
    borderRadius: '8px',
    padding: '24px'
  };

  const mainContentStyle = {
    flex: 1,
    padding: '24px'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const searchInputStyle = {
    padding: '8px 12px 8px 40px',
    backgroundColor: '#374151',
    color: 'white',
    borderRadius: '20px',
    border: 'none',
    outline: 'none'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px'
  };

  const cardStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px'
  };

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  };

  const projectItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0'
  };

  const iconContainerStyle = (color) => ({
    width: '32px',
    height: '32px',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px'
  });

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    color: '#1f2937',
    boxSizing: 'border-box'
  };

  const inputContainerStyle = {
    marginBottom: '24px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '8px',
    color: 'white'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    backgroundColor: '#059669',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '16px'
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#10b981'
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={sidebarHeaderStyle}>
          <h1 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Company Name</h1>
        </div>
        
        <nav style={{marginTop: '32px', flex: 1}}>
          <div style={activeNavStyle}>
            <div style={{width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', marginRight: '12px'}}></div>
            <span>Dashboard</span>
          </div>
          
          <div style={navItemStyle}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Insight</span>
          </div>
          
          <div style={navItemStyle}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Transaction</span>
          </div>
          
          <div style={navItemStyle}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Account</span>
          </div>
          
          <div style={navItemStyle}>
            <div style={{width: '16px', height: '16px', marginRight: '12px'}}></div>
            <span>Settings</span>
          </div>
        </nav>
        
        {/* Company Details Card */}
        <div style={companyDetailsStyle}>
          <h3 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '8px'}}>COMPANY DETAILS</h3>
          <p style={{fontSize: '14px', marginBottom: '16px'}}>Details...</p>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{fontSize: '24px', marginRight: '8px'}}>→</span>
            <span style={{fontSize: '24px', marginRight: '8px'}}>→</span>
            <span style={{fontSize: '24px'}}>→</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={{fontSize: '32px', fontWeight: 'bold', color: '#1f2937', margin: 0}}>Dashboard</h1>
          <div style={searchContainerStyle}>
            <div style={{position: 'relative'}}>
              <div style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)'}}>
                <Search />
              </div>
              <input
                type="text"
                placeholder="Search Here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={searchInputStyle}
              />
            </div>
            <MessageCircle />
            <Bell />
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face"
              alt="Profile"
              style={{width: '40px', height: '40px', borderRadius: '50%'}}
            />
          </div>
        </div>

        <div style={gridStyle}>
          {/* Left Column */}
          <div>
            {/* Live Projects */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Live Projects</h2>
                <MoreHorizontal />
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
                <div>
                  <span style={{fontSize: '24px', fontWeight: 'bold'}}>5</span>
                  <span style={{marginLeft: '8px'}}>Completed</span>
                </div>
                <div>
                  <span style={{fontSize: '24px', fontWeight: 'bold', color: '#fca5a5'}}>2</span>
                  <span style={{marginLeft: '8px', color: '#fca5a5'}}>Pending</span>
                </div>
              </div>
            </div>

            {/* Previous Projects Listed */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Previous Projects Listed</h2>
                <MoreHorizontal />
              </div>
              <div>
                {mockProjects.map((project) => (
                  <div key={project.id} style={projectItemStyle}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div style={iconContainerStyle(project.color)}>
                        <project.icon />
                      </div>
                      <span style={{fontWeight: '500'}}>{project.name}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                      <span style={{fontSize: '14px'}}>{project.type}</span>
                      <span style={{fontWeight: 'bold'}}>{project.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous People */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Previous people you've worked with</h2>
                <MoreHorizontal />
              </div>
              <div style={{display: 'flex', gap: '8px'}}>
                {mockPeople.map((person, index) => (
                  <img
                    key={index}
                    src={person}
                    alt={`Person ${index + 1}`}
                    style={{width: '48px', height: '48px', borderRadius: '50%', border: '2px solid white'}}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Ongoing Projects */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '18px', fontWeight: 'bold', margin: 0}}>Ongoing Projects</h2>
                <MoreHorizontal />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {mockOngoingProjects.map((project, index) => (
                  <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '14px', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', marginRight: '8px'}}>{project.name}</span>
                    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <span style={{fontSize: '12px'}}>{project.progress}%</span>
                      <div style={{fontSize: '12px'}}>Status</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disputes Raised */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={{fontSize: '18px', fontWeight: 'bold', margin: 0}}>Disputes Raised</h2>
                <MoreHorizontal />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {mockDisputes.map((dispute, index) => (
                  <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '14px', fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', marginRight: '8px'}}>{dispute}</span>
                    <div style={{fontSize: '12px'}}>Status</div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Project Button */}
            <div 
              style={{
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onClick={handleNewProjectClick}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#047857'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#059669'}
            >
              <span style={{fontSize: '18px', fontWeight: 'bold'}}>+ new project</span>
            </div>
          </div>
        </div>

        {/* Create New Project Section */}
        {showNewProject && (
          <div id="new-project-section" style={{marginTop: '48px'}}>
            <div style={{backgroundColor: '#10b981', color: 'white', borderRadius: '8px', padding: '32px'}}>
              <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '8px'}}>CREATE A NEW PROJECT</h1>
              <p style={{fontSize: '18px', marginBottom: '32px', opacity: 0.9}}>Clear description helps you get better proposals.</p>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
                {/* Left Column */}
                <div>
                  {/* Project Title */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Project Title</label>
                    <input
                      type="text"
                      value={projectForm.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      style={inputStyle}
                      placeholder="Enter project title"
                    />
                  </div>

                  {/* Category/Skill Required */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Category/Skill Required</label>
                    <input
                      type="text"
                      value={projectForm.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      style={inputStyle}
                      placeholder="e.g., Web Development, Graphic Design"
                    />
                  </div>

                  {/* Project Description */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Project Description</label>
                    <textarea
                      value={projectForm.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      style={textareaStyle}
                      placeholder="Describe your project requirements in detail..."
                    />
                  </div>

                  {/* Budget */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Budget</label>
                    <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px'}}>
                      <div style={{marginBottom: '12px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                          <div style={{display: 'flex', alignItems: 'center', minWidth: '140px'}}>
                            <input
                              type="radio"
                              id="fixed-price"
                              name="budget-type"
                              checked={budgetType === 'fixed'}
                              onChange={() => setBudgetType('fixed')}
                              style={{width: '20px', height: '20px'}}
                            />
                            <label htmlFor="fixed-price" style={{marginLeft: '8px', fontSize: '16px', color: 'white'}}>Fixed Price</label>
                          </div>
                          <input
                            type="text"
                            value={projectForm.fixedBudget}
                            onChange={(e) => handleInputChange('fixedBudget', e.target.value)}
                            disabled={budgetType !== 'fixed'}
                            style={{...inputStyle, opacity: budgetType !== 'fixed' ? 0.5 : 1, flex: 1}}
                            placeholder="Enter fixed amount"
                          />
                        </div>
                      </div>
                      <div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                          <div style={{display: 'flex', alignItems: 'center', minWidth: '140px'}}>
                            <input
                              type="radio"
                              id="hourly-rate"
                              name="budget-type"
                              checked={budgetType === 'hourly'}
                              onChange={() => setBudgetType('hourly')}
                              style={{width: '20px', height: '20px'}}
                            />
                            <label htmlFor="hourly-rate" style={{marginLeft: '8px', fontSize: '16px', color: 'white'}}>Hourly Rate</label>
                          </div>
                          <input
                            type="text"
                            value={projectForm.hourlyRate}
                            onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                            disabled={budgetType !== 'hourly'}
                            style={{...inputStyle, opacity: budgetType !== 'hourly' ? 0.5 : 1, flex: 1}}
                            placeholder="Enter hourly rate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Timeline/Deadline */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Timeline/Deadline</label>
                    <div style={{position: 'relative'}}>
                      <input
                        type="date"
                        value={projectForm.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        style={inputStyle}
                      />
                      <div style={{position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none'}}>
                        <Calendar />
                      </div>
                    </div>
                  </div>

                  {/* Attachments */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Attachments (optional)</label>
                    <div style={{position: 'relative'}}>
                      <input
                        type="text"
                        value={projectForm.attachments}
                        onChange={(e) => handleInputChange('attachments', e.target.value)}
                        style={inputStyle}
                        placeholder="Upload files or paste links"
                      />
                      <div style={{position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none'}}>
                        <Upload />
                      </div>
                    </div>
                  </div>

                  {/* Experience Level Needed */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Experience Level Needed</label>
                    <select
                      value={projectForm.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      style={inputStyle}
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  {/* No. of Freelancers Needed */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>No. of Freelancers Needed</label>
                    <input
                      type="number"
                      value={projectForm.freelancersNeeded}
                      onChange={(e) => handleInputChange('freelancersNeeded', e.target.value)}
                      style={inputStyle}
                      placeholder="Enter number"
                      min="1"
                    />
                  </div>

                  {/* Visibility */}
                  <div style={inputContainerStyle}>
                    <label style={labelStyle}>Visibility</label>
                    <div style={{backgroundColor: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <span style={{fontSize: '16px', color: 'white'}}>public</span>
                        <div 
                          style={{
                            position: 'relative',
                            width: '56px',
                            height: '28px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            backgroundColor: isPublic ? '#10d9c4' : '#9ca3af',
                            transition: 'background-color 0.3s'
                          }}
                          onClick={() => setIsPublic(!isPublic)}
                        >
                          <div 
                            style={{
                              position: 'absolute',
                              top: '4px',
                              width: '20px',
                              height: '20px',
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              transition: 'transform 0.3s',
                              transform: isPublic ? 'translateX(4px)' : 'translateX(28px)'
                            }}
                          />
                        </div>
                        <span style={{fontSize: '16px', color: 'white'}}>invite-only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{display: 'flex', gap: '16px', marginTop: '32px'}}>
                <button
                  onClick={handlePublishProject}
                  style={buttonStyle}
                >
                  Publish Project
                </button>
                <button
                  onClick={handleSaveDraft}
                  style={secondaryButtonStyle}
                >
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;