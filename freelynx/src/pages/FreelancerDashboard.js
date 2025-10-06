import React, { useState } from 'react';
import { Search, Bell, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, ChevronRight, Home as HomeIcon, Grid, Folder, Star, Mail, FileText, DollarSign, User, MessageCircle, Settings, HelpCircle, Heart } from 'lucide-react';
import heroPersonImg from '../assets/FreelancerDashboard/hero-person.png';
import contractPersonImg from '../assets/FreelancerDashboard/contract-person.png';

export default function FreelancerDashboard() {
  const [isPlaying, setIsPlaying] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      height: '100vh',
      background: '#019523',
      padding: '0',
      display: 'flex',
      overflow: 'hidden'
    },
    mainWrapper: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      gap: '0',
      overflow: 'hidden'
    },
    sidebar: {
      width: '240px',
      background: '#017a1c',
      padding: '24px 16px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      height: '100vh',
      overflowY: 'auto',
      flexShrink: 0
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '8px'
    },
    avatar: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '50%'
    },
    profileText: {
      fontWeight: 'bold',
      fontSize: '16px'
    },
    profileSubtext: {
      fontSize: '13px',
      opacity: 0.9
    },
    navSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    },
    navTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      marginBottom: '8px',
      opacity: 0.9
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 12px',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background 0.2s',
      fontSize: '14px'
    },
    contentWrapper: {
      flex: 1,
      display: 'flex',
      padding: '24px',
      gap: '20px',
      background: '#019523',
      overflow: 'hidden',
      maxWidth: 'calc(100vw - 240px)'
    },
    mainContent: {
      flex: 1,
      background: 'white',
      borderRadius: '24px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      overflowY: 'auto',
      minWidth: 0
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
      flexWrap: 'wrap',
      gap: '16px'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    },
    searchWrapper: {
      position: 'relative'
    },
    searchInput: {
      padding: '10px 16px 10px 40px',
      borderRadius: '24px',
      border: '1px solid #e5e7eb',
      width: '280px',
      fontSize: '13px',
      outline: 'none',
      background: '#f9fafb'
    },
    searchIcon: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af'
    },
    iconButton: {
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: '50%',
      border: 'none',
      background: 'transparent'
    },
    userSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    userName: {
      fontWeight: '600',
      color: '#1f2937',
      fontSize: '14px'
    },
    userAvatar: {
      width: '36px',
      height: '36px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '50%'
    },
    heroSection: {
      background: 'linear-gradient(135deg, #017a1c, #019523)',
      borderRadius: '20px',
      padding: '48px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      gap: '32px',
      minHeight: '280px'
    },
    heroContent: {
      flex: 1,
      zIndex: 2,
      minWidth: 0
    },
    heroTitle: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '20px',
      lineHeight: '1.2'
    },
    heroText: {
      fontSize: '15px',
      lineHeight: '1.7',
      marginBottom: '28px',
      opacity: 0.95
    },
    heroButtons: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    },
    button: {
      padding: '12px 28px',
      borderRadius: '24px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '14px',
      transition: 'transform 0.2s'
    },
    buttonPrimary: {
      background: 'white',
      color: '#019523'
    },
    buttonSecondary: {
      background: 'transparent',
      color: 'white',
      border: '2px solid white'
    },
    heroImageContainer: {
  position: 'relative',
  zIndex: 2,
  flexShrink: 0,
  width: '280px',  // Add this
  height: '280px'  // Add this
},
heroImage: {
  width: '100%',     // Change from 220px
  height: '100%',    // Change from 220px
  objectFit: 'contain',
  display: 'block'
},
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '16px'
    },
    filterBar: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    filterButton: {
      padding: '8px 20px',
      borderRadius: '20px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: '500',
      transition: 'all 0.2s'
    },
    filterActive: {
      background: '#1f2937',
      color: 'white'
    },
    filterInactive: {
      background: '#f3f4f6',
      color: '#6b7280'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginBottom: '24px'
    },
    projectCard: {
      background: '#ffffff',
      borderRadius: '14px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid #f3f4f6'
    },
    projectImage: {
      width: '100%',
      height: '160px',
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    projectBadge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.75)',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '14px',
      fontSize: '12px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    projectContent: {
      padding: '16px'
    },
    projectTitle: {
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '6px',
      fontSize: '15px'
    },
    projectClient: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '12px'
    },
    projectTag: {
      display: 'inline-block',
      background: '#1f2937',
      color: 'white',
      padding: '5px 14px',
      borderRadius: '14px',
      fontSize: '12px',
      fontWeight: '500'
    },
    activeContract: {
      background: 'linear-gradient(135deg, #017a1c, #019523)',
      borderRadius: '20px',
      padding: '28px 36px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      gap: '24px',
      flexWrap: 'wrap'
    },
    contractContent: {
      display: 'flex',
      gap: '24px',
      alignItems: 'center',
      flex: 1,
      minWidth: 0
    },
    contractImageContainer: {
  background: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '14px',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: '140px',   // Add this
  height: '140px'   // Add this
},
contractImage: {
  width: '200%',    // Change from 100px
  height: '200%',   // Change from 100px
  objectFit: 'contain',
  display: 'block'
},
    contractInfo: {
      flex: 1,
      minWidth: 0
    },
    contractTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '6px'
    },
    contractDetails: {
      fontSize: '13px',
      opacity: 0.95,
      marginBottom: '20px'
    },
    timeDisplay: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '13px',
      marginBottom: '10px',
      fontWeight: '500'
    },
    progressBar: {
      width: '100%',
      height: '5px',
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '3px',
      overflow: 'hidden',
      marginBottom: '20px'
    },
    progressFill: {
      width: '60%',
      height: '100%',
      background: 'white',
      borderRadius: '3px'
    },
    controls: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    controlButton: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      transition: 'background 0.2s'
    },
    playButton: {
      width: '56px',
      height: '56px',
      background: 'white',
      color: '#019523'
    },
    rightSidebar: {
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      flexShrink: 0,
      overflowY: 'auto'
    },
    sidebarCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '24px'
    },
    clientList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    clientItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px',
      borderRadius: '10px',
      background: '#f9fafb',
      cursor: 'pointer',
      transition: 'background 0.2s'
    },
    clientAvatar: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '50%',
      flexShrink: 0
    },
    clientInfo: {
      flex: 1,
      minWidth: 0
    },
    clientName: {
      fontWeight: '600',
      fontSize: '13px',
      color: '#1f2937',
      marginBottom: '3px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    clientProject: {
      fontSize: '12px',
      color: '#6b7280',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    topicList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    topicItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      borderRadius: '10px',
      background: '#f9fafb',
      cursor: 'pointer',
      transition: 'background 0.2s'
    },
    topicLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flex: 1,
      minWidth: 0
    },
    topicIcon: {
      width: '36px',
      height: '36px',
      background: 'linear-gradient(135deg, #fbbf24, #86efac)',
      borderRadius: '8px',
      flexShrink: 0
    },
    topicInfo: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0
    },
    topicTag: {
      fontWeight: '600',
      fontSize: '13px',
      color: '#1f2937',
      marginBottom: '3px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    topicAuthor: {
      fontSize: '12px',
      color: '#6b7280',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  };

  const navItems = [
    { icon: <HomeIcon size={18} />, label: 'Home' },
    { icon: <Bell size={18} />, label: 'Notifications' },
    { icon: <Folder size={18} />, label: 'Browse Projects' },
    { icon: <Star size={18} />, label: 'Premium' }
  ];

  const libraryItems = [
    { icon: <Mail size={18} />, label: 'My Proposals' },
    { icon: <FileText size={18} />, label: 'Active Contracts' },
    { icon: <DollarSign size={18} />, label: 'Earnings/Wallet' },
    { icon: <User size={18} />, label: 'Profile & Portfolio' }
  ];

  const supportItems = [
    { icon: <MessageCircle size={18} />, label: 'Community Chat' },
    { icon: <Settings size={18} />, label: 'Setting' },
    { icon: <HelpCircle size={18} />, label: 'Help & Support' }
  ];

  const projects = [
    { title: 'Lost in Time', client: 'Studio Shodwe', tag: 'Client', views: '200' },
    { title: 'Falling Away', client: 'Drew Feig', tag: 'Client', views: '200' },
    { title: 'Shadows & Light', client: 'Howard Ong', tag: 'Client', views: '200' },
    { title: 'Endless Roads', client: 'Helene Paquet', tag: 'Client', views: '200' }
  ];

  const clients = [
    { name: 'Wandering Soul', project: 'Helene Paquet' },
    { name: 'Golden Skies', project: 'Hae-won Jeon' },
    { name: 'Drifting Away', project: 'Chidi Eze' },
    { name: 'Broken Moments', project: 'Chiaki Sato' },
    { name: 'Heartbeats', project: 'Claudia Alves' },
    { name: 'Unspoken', project: 'Lars Peeters' }
  ];

  const topics = [
    { tag: '#The Waves', author: 'Studio Shodwe' },
    { tag: '#End of the Night', author: 'Matt Zhang' },
    { tag: '#Between Us', author: 'Neil Tran' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.mainWrapper}>
        {/* Left Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.profile}>
            <div style={styles.avatar}></div>
            <div>
              <div style={styles.profileText}>Freelancer</div>
              <div style={styles.profileSubtext}>Name</div>
            </div>
          </div>

          <nav style={styles.navSection}>
            <div style={styles.navTitle}>Home</div>
            {navItems.map((item, i) => (
              <div key={i} style={styles.navItem}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>

          <nav style={styles.navSection}>
            <div style={styles.navTitle}>Library</div>
            {libraryItems.map((item, i) => (
              <div key={i} style={styles.navItem}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>

          <nav style={styles.navSection}>
            <div style={styles.navTitle}>Support</div>
            {supportItems.map((item, i) => (
              <div key={i} style={styles.navItem}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div style={styles.contentWrapper}>
          {/* Main Content */}
          <main style={styles.mainContent}>
            {/* Header */}
            <div style={styles.header}>
              <h1 style={styles.title}>Dashboard</h1>
              <div style={styles.searchContainer}>
                <div style={styles.searchWrapper}>
                  <Search size={18} style={styles.searchIcon} />
                  <input 
                    type="text" 
                    placeholder="Search projects, clients, mentors..."
                    style={styles.searchInput}
                  />
                </div>
                <button style={styles.iconButton}>
                  <div style={{width: '10px', height: '10px', background: '#1f2937', borderRadius: '50%'}}></div>
                </button>
                <div style={styles.userSection}>
                  <span style={styles.userName}>Drew Feig</span>
                  <div style={styles.userAvatar}></div>
                </div>
                <button style={styles.iconButton}>
                  <Bell size={20} color="#1f2937" />
                </button>
              </div>
            </div>

            {/* Hero Section */}
            <div style={styles.heroSection}>
              <div style={styles.heroContent}>
                <h2 style={styles.heroTitle}>Find Your next<br />Project</h2>
                <p style={styles.heroText}>
                  Browse jobs that match your skills and submit proposals today. Thousands of opportunities from global to local companies are waiting for you! Explore for more and get the opportunity.
                </p>
                <div style={styles.heroButtons}>
                  <button style={{...styles.button, ...styles.buttonPrimary}}>
                    Browse Projects
                  </button>
                  <button style={{...styles.button, ...styles.buttonSecondary}}>
                    Update Skills
                  </button>
                </div>
              </div>
              <div style={styles.heroImageContainer}>
                <img 
                  src={heroPersonImg}
                  alt="Person"
                  style={styles.heroImage}
                  onError={(e) => {
                    console.log('Hero image failed to load');
                  }}
                />
              </div>
            </div>

            {/* Recommended Projects */}
            <div>
              <h3 style={styles.sectionTitle}>Recommended Projects</h3>
              <div style={styles.filterBar}>
                <button style={{...styles.filterButton, ...styles.filterActive}}>Project Title</button>
                <button style={{...styles.filterButton, ...styles.filterInactive}}>Skills</button>
                <button style={{...styles.filterButton, ...styles.filterInactive}}>Web Dev</button>
                <button style={{...styles.filterButton, ...styles.filterInactive}}>Design</button>
                <button style={{...styles.filterButton, ...styles.filterInactive}}>Marketing</button>
                <button style={{...styles.filterButton, ...styles.filterInactive}}>Trending</button>
              </div>
              <div style={styles.projectsGrid}>
                {projects.map((project, i) => (
                  <div key={i} style={styles.projectCard}>
                    <div style={styles.projectImage}>
                      {project.views && (
                        <div style={styles.projectBadge}>
                          <span>{project.views}</span>
                          <Heart size={12} fill="white" />
                        </div>
                      )}
                    </div>
                    <div style={styles.projectContent}>
                      <div style={styles.projectTitle}>{project.title}</div>
                      <div style={styles.projectClient}>{project.client}</div>
                      <span style={styles.projectTag}>{project.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Contract */}
            <div style={styles.activeContract}>
              <div style={styles.contractContent}>
                <div style={styles.contractImageContainer}>
                  <img 
                    src={contractPersonImg}
                    alt="Contract"
                    style={styles.contractImage}
                    onError={(e) => {
                      console.log('Contract image failed to load');
                    }}
                  />
                </div>
                <div style={styles.contractInfo}>
                  <div style={styles.contractTitle}>Active Contract</div>
                  <div style={styles.contractDetails}>
                    Working on: E-commerce UI Design | Due in 5 days | Progress: 60%
                  </div>
                  <div style={styles.timeDisplay}>
                    <span>01:10</span>
                    <span>04:10</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div style={styles.progressFill}></div>
                  </div>
                  <div style={styles.controls}>
                    <button style={styles.controlButton}>
                      <Shuffle size={18} />
                    </button>
                    <button style={styles.controlButton}>
                      <SkipBack size={18} />
                    </button>
                    <button 
                      style={{...styles.controlButton, ...styles.playButton}}
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <button style={styles.controlButton}>
                      <SkipForward size={18} />
                    </button>
                    <button style={styles.controlButton}>
                      <Repeat size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside style={styles.rightSidebar}>
            {/* Top Clients */}
            <div style={styles.sidebarCard}>
              <h3 style={styles.sectionTitle}>Top Clients / Active Employers</h3>
              <div style={styles.clientList}>
                {clients.map((client, i) => (
                  <div key={i} style={styles.clientItem}>
                    <div style={styles.clientAvatar}></div>
                    <div style={styles.clientInfo}>
                      <div style={styles.clientName}>{client.name}</div>
                      <div style={styles.clientProject}>{client.project}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div style={styles.sidebarCard}>
              <h3 style={styles.sectionTitle}>Trending topics in your field</h3>
              <div style={styles.topicList}>
                {topics.map((topic, i) => (
                  <div key={i} style={styles.topicItem}>
                    <div style={styles.topicLeft}>
                      <div style={styles.topicIcon}></div>
                      <div style={styles.topicInfo}>
                        <div style={styles.topicTag}>{topic.tag}</div>
                        <div style={styles.topicAuthor}>{topic.author}</div>
                      </div>
                    </div>
                    <ChevronRight size={18} color="#9ca3af" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}