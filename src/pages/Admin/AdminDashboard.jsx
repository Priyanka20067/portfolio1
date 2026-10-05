import React, { useState } from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../../context/PortfolioContext';
import { resolveImage } from '../../utils/imageHelper';

const AdminDashboard = () => {
    const { profile, projects, skills, services, pricing, faqs, refreshPortfolio, API_BASE } = usePortfolio();

    // Authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('portfolio_admin_auth') === 'true';
    });
    const [passcode, setPasscode] = useState('');
    const [authError, setAuthError] = useState('');

    // Active tab
    const [activeTab, setActiveTab] = useState('profile');

    // Toast notification
    const [toastMessage, setToastMessage] = useState('');
    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(''), 3500);
    };

    // Profile Form State
    const [profileForm, setProfileForm] = useState(profile || {});

    // Sync profileForm if profile updates
    React.useEffect(() => {
        if (profile) setProfileForm(profile);
    }, [profile]);

    // Project Form (Add/Edit)
    const [projectForm, setProjectForm] = useState({
        title: '',
        description: '',
        category: 'website',
        tech: '',
        image: '',
        demo: '',
        repo: '',
        featured: false
    });
    const [editingProjectId, setEditingProjectId] = useState(null);

    // Skill Form
    const [skillForm, setSkillForm] = useState({
        name: '',
        category: 'Front-End',
        icon: '',
        title: '',
        description: '',
        order: 0
    });
    const [editingSkillId, setEditingSkillId] = useState(null);

    // Service Form
    const [serviceForm, setServiceForm] = useState({
        title: '',
        icon: 'fas fa-laptop',
        description: '',
        order: 0
    });
    const [editingServiceId, setEditingServiceId] = useState(null);

    // Pricing Form
    const [pricingForm, setPricingForm] = useState({
        title: '',
        subtitle: '',
        price: 100,
        currency: '$',
        features: '',
        isRecommended: false
    });
    const [editingPricingId, setEditingPricingId] = useState(null);

    // Faq Form
    const [faqForm, setFaqForm] = useState({
        question: '',
        answer: ''
    });
    const [editingFaqId, setEditingFaqId] = useState(null);

    // --- Authentication Handler ---
    const handleLogin = (e) => {
        e.preventDefault();
        // Default passcode: admin123
        if (passcode === 'admin123' || passcode === 'admin') {
            setIsAuthenticated(true);
            localStorage.setItem('portfolio_admin_auth', 'true');
            setAuthError('');
            showToast('Welcome to Admin Dashboard! 🚀');
        } else {
            setAuthError('Incorrect passcode. Try: admin123');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('portfolio_admin_auth');
    };

    // --- Profile Save Handler ---
    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_BASE}/profile`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profileForm)
            });
            if (res.ok) {
                await refreshPortfolio();
                showToast('Profile updated in MongoDB! ✨');
            } else {
                showToast('Failed to update profile.');
            }
        } catch (err) {
            showToast('Error saving profile: ' + err.message);
        }
    };

    // --- Project Handlers ---
    const handleSaveProject = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...projectForm,
                tech: typeof projectForm.tech === 'string'
                    ? projectForm.tech.split(',').map(t => t.trim()).filter(Boolean)
                    : projectForm.tech
            };

            const url = editingProjectId
                ? `${API_BASE}/projects/${editingProjectId}`
                : `${API_BASE}/projects`;
            const method = editingProjectId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                await refreshPortfolio();
                setEditingProjectId(null);
                setProjectForm({
                    title: '',
                    description: '',
                    category: 'website',
                    tech: '',
                    image: '',
                    demo: '',
                    repo: '',
                    featured: false
                });
                showToast('Project saved successfully! 💼');
            }
        } catch (err) {
            showToast('Error saving project.');
        }
    };

    const handleDeleteProject = async (id) => {
        if (!window.confirm('Delete this project?')) return;
        try {
            const res = await fetch(`${API_BASE}/projects/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await refreshPortfolio();
                showToast('Project deleted.');
            }
        } catch (err) {
            showToast('Failed to delete project.');
        }
    };

    // --- Skill Handlers ---
    const handleSaveSkill = async (e) => {
        e.preventDefault();
        try {
            const url = editingSkillId
                ? `${API_BASE}/skills/${editingSkillId}`
                : `${API_BASE}/skills`;
            const method = editingSkillId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(skillForm)
            });

            if (res.ok) {
                await refreshPortfolio();
                setEditingSkillId(null);
                setSkillForm({
                    name: '',
                    category: 'Front-End',
                    icon: '',
                    title: '',
                    description: '',
                    order: 0
                });
                showToast('Skill saved! ⚡');
            }
        } catch (err) {
            showToast('Error saving skill.');
        }
    };

    const handleDeleteSkill = async (id) => {
        if (!window.confirm('Delete this skill?')) return;
        try {
            const res = await fetch(`${API_BASE}/skills/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await refreshPortfolio();
                showToast('Skill deleted.');
            }
        } catch (err) {
            showToast('Failed to delete skill.');
        }
    };

    // --- Service Handlers ---
    const handleSaveService = async (e) => {
        e.preventDefault();
        try {
            const url = editingServiceId
                ? `${API_BASE}/services/${editingServiceId}`
                : `${API_BASE}/services`;
            const method = editingServiceId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(serviceForm)
            });

            if (res.ok) {
                await refreshPortfolio();
                setEditingServiceId(null);
                setServiceForm({ title: '', icon: 'fas fa-laptop', description: '', order: 0 });
                showToast('Service saved! 🛠️');
            }
        } catch (err) {
            showToast('Error saving service.');
        }
    };

    const handleDeleteService = async (id) => {
        if (!window.confirm('Delete this service?')) return;
        try {
            const res = await fetch(`${API_BASE}/services/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await refreshPortfolio();
                showToast('Service deleted.');
            }
        } catch (err) {
            showToast('Failed to delete service.');
        }
    };

    // --- Pricing Handlers ---
    const handleSavePricing = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...pricingForm,
                features: typeof pricingForm.features === 'string'
                    ? pricingForm.features.split('\n').map(f => f.trim()).filter(Boolean)
                    : pricingForm.features
            };
            const url = editingPricingId
                ? `${API_BASE}/pricing/${editingPricingId}`
                : `${API_BASE}/pricing`;
            const method = editingPricingId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                await refreshPortfolio();
                setEditingPricingId(null);
                setPricingForm({ title: '', subtitle: '', price: 100, currency: '$', features: '', isRecommended: false });
                showToast('Pricing plan saved! 💰');
            }
        } catch (err) {
            showToast('Error saving pricing plan.');
        }
    };

    const handleDeletePricing = async (id) => {
        if (!window.confirm('Delete this plan?')) return;
        try {
            const res = await fetch(`${API_BASE}/pricing/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await refreshPortfolio();
                showToast('Plan deleted.');
            }
        } catch (err) {
            showToast('Failed to delete plan.');
        }
    };

    // --- FAQ Handlers ---
    const handleSaveFaq = async (e) => {
        e.preventDefault();
        try {
            const url = editingFaqId
                ? `${API_BASE}/faqs/${editingFaqId}`
                : `${API_BASE}/faqs`;
            const method = editingFaqId ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(faqForm)
            });

            if (res.ok) {
                await refreshPortfolio();
                setEditingFaqId(null);
                setFaqForm({ question: '', answer: '' });
                showToast('FAQ saved! ❓');
            }
        } catch (err) {
            showToast('Error saving FAQ.');
        }
    };

    const handleDeleteFaq = async (id) => {
        if (!window.confirm('Delete this FAQ?')) return;
        try {
            const res = await fetch(`${API_BASE}/faqs/${id}`, { method: 'DELETE' });
            if (res.ok) {
                await refreshPortfolio();
                showToast('FAQ deleted.');
            }
        } catch (err) {
            showToast('Failed to delete FAQ.');
        }
    };

    // --- Render Login If Not Authenticated ---
    if (!isAuthenticated) {
        return (
            <div className="admin-container">
                <header className="admin-header">
                    <div className="admin-logo">
                        <h1>PORTFOLIO ADMIN</h1>
                        <span className="badge-admin">Security</span>
                    </div>
                    <Link to="/" className="btn-secondary-link">
                        <i className="fas fa-arrow-left"></i> Back to Site
                    </Link>
                </header>

                <div className="admin-login-wrapper">
                    <div className="admin-login-card">
                        <h2>Admin Access</h2>
                        <p>Enter your admin passcode to edit your portfolio dynamically.</p>
                        <form onSubmit={handleLogin} className="login-form">
                            <input
                                type="password"
                                placeholder="Enter passcode (default: admin123)"
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)}
                                autoFocus
                            />
                            {authError && <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>{authError}</p>}
                            <button type="submit" className="btn-primary-block">
                                <i className="fas fa-lock-open"></i> Unlock Dashboard
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-container">
            {/* Header */}
            <header className="admin-header">
                <div className="admin-logo">
                    <h1>PORTFOLIO ADMIN</h1>
                    <span className="badge-admin">Live MongoDB Mode</span>
                </div>
                <div className="admin-actions">
                    <Link to="/" className="btn-secondary-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i> View Live Site
                    </Link>
                    <button onClick={handleLogout} className="btn-danger-sm">
                        <i className="fas fa-sign-out-alt"></i> Exit Admin
                    </button>
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav className="admin-tabs">
                <button
                    className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                >
                    <i className="fas fa-user"></i> Profile & Bio
                </button>
                <button
                    className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
                    onClick={() => setActiveTab('projects')}
                >
                    <i className="fas fa-project-diagram"></i> Projects ({projects.length})
                </button>
                <button
                    className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                    onClick={() => setActiveTab('skills')}
                >
                    <i className="fas fa-code"></i> Skills ({skills.length})
                </button>
                <button
                    className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
                    onClick={() => setActiveTab('services')}
                >
                    <i className="fas fa-concierge-bell"></i> Services ({services.length})
                </button>
                <button
                    className={`tab-btn ${activeTab === 'pricing' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pricing')}
                >
                    <i className="fas fa-tag"></i> Pricing ({pricing.length})
                </button>
                <button
                    className={`tab-btn ${activeTab === 'faqs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('faqs')}
                >
                    <i className="fas fa-question-circle"></i> FAQs ({faqs.length})
                </button>
            </nav>

            {/* Main Content Area */}
            <main className="admin-content">
                {/* 1. PROFILE TAB */}
                {activeTab === 'profile' && (
                    <div className="admin-card">
                        <div className="card-title">
                            <span>Edit Profile & Hero Information</span>
                            <button type="button" onClick={handleProfileSubmit} className="btn-primary">
                                <i className="fas fa-save"></i> Save Profile
                            </button>
                        </div>
                        <form onSubmit={handleProfileSubmit}>
                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        value={profileForm.name || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Role / Job Title</label>
                                    <input
                                        type="text"
                                        value={profileForm.role || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Logo Title</label>
                                    <input
                                        type="text"
                                        value={profileForm.logoTitle || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, logoTitle: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Badge Icon / Emoji</label>
                                    <input
                                        type="text"
                                        value={profileForm.badge || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, badge: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Greeting</label>
                                    <input
                                        type="text"
                                        value={profileForm.greeting || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, greeting: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input
                                        type="text"
                                        value={profileForm.age || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, age: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Location / City</label>
                                    <input
                                        type="text"
                                        value={profileForm.from || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, from: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        value={profileForm.email || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone / WhatsApp Number</label>
                                    <input
                                        type="text"
                                        value={profileForm.phone || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Hobbies</label>
                                    <input
                                        type="text"
                                        value={profileForm.hobbies || ''}
                                        onChange={(e) => setProfileForm({ ...profileForm, hobbies: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Short Intro (About Me on Home Page)</label>
                                <textarea
                                    value={profileForm.aboutDescription || ''}
                                    onChange={(e) => setProfileForm({ ...profileForm, aboutDescription: e.target.value })}
                                />
                            </div>

                            <h3 style={{ color: '#00d2df', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                Social Media Links
                            </h3>
                            <div className="form-grid-2">
                                <div className="form-group">
                                    <label>LinkedIn URL</label>
                                    <input
                                        type="url"
                                        value={profileForm.socialLinks?.linkedin || ''}
                                        onChange={(e) => setProfileForm({
                                            ...profileForm,
                                            socialLinks: { ...profileForm.socialLinks, linkedin: e.target.value }
                                        })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>GitHub URL</label>
                                    <input
                                        type="url"
                                        value={profileForm.socialLinks?.github || ''}
                                        onChange={(e) => setProfileForm({
                                            ...profileForm,
                                            socialLinks: { ...profileForm.socialLinks, github: e.target.value }
                                        })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Instagram URL</label>
                                    <input
                                        type="url"
                                        value={profileForm.socialLinks?.instagram || ''}
                                        onChange={(e) => setProfileForm({
                                            ...profileForm,
                                            socialLinks: { ...profileForm.socialLinks, instagram: e.target.value }
                                        })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>WhatsApp Link</label>
                                    <input
                                        type="url"
                                        value={profileForm.socialLinks?.whatsapp || ''}
                                        onChange={(e) => setProfileForm({
                                            ...profileForm,
                                            socialLinks: { ...profileForm.socialLinks, whatsapp: e.target.value }
                                        })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Telegram Link</label>
                                    <input
                                        type="url"
                                        value={profileForm.socialLinks?.telegram || ''}
                                        onChange={(e) => setProfileForm({
                                            ...profileForm,
                                            socialLinks: { ...profileForm.socialLinks, telegram: e.target.value }
                                        })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>CV Download Link / File URL (Optional)</label>
                                    <input
                                        type="text"
                                        value={profileForm.cvUrl || ''}
                                        placeholder="Leave empty to use built-in cv.pdf"
                                        onChange={(e) => setProfileForm({ ...profileForm, cvUrl: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
                                <i className="fas fa-save"></i> Save Profile to Database
                            </button>
                        </form>
                    </div>
                )}

                {/* 2. PROJECTS TAB */}
                {activeTab === 'projects' && (
                    <div>
                        {/* Project Form */}
                        <div className="admin-card">
                            <div className="card-title">
                                <span>{editingProjectId ? 'Edit Project' : 'Add New Project'}</span>
                                {editingProjectId && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingProjectId(null);
                                            setProjectForm({
                                                title: '',
                                                description: '',
                                                category: 'website',
                                                tech: '',
                                                image: '',
                                                demo: '',
                                                repo: '',
                                                featured: false
                                            });
                                        }}
                                        className="btn-danger-sm"
                                    >
                                        Cancel Edit
                                    </button>
                                )}
                            </div>
                            <form onSubmit={handleSaveProject}>
                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label>Project Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={projectForm.title}
                                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select
                                            value={projectForm.category}
                                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                                        >
                                            <option value="website">Website</option>
                                            <option value="app">App</option>
                                            <option value="game">Game</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Image Filename or URL</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. proyecto-14.png or https://..."
                                            value={projectForm.image}
                                            onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Technologies (Comma separated)</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. React, Node.js, MongoDB"
                                            value={Array.isArray(projectForm.tech) ? projectForm.tech.join(', ') : projectForm.tech}
                                            onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Live Demo URL</label>
                                        <input
                                            type="url"
                                            value={projectForm.demo}
                                            onChange={(e) => setProjectForm({ ...projectForm, demo: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>GitHub Repo URL</label>
                                        <input
                                            type="url"
                                            value={projectForm.repo}
                                            onChange={(e) => setProjectForm({ ...projectForm, repo: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        value={projectForm.description}
                                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                                    />
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.2rem' }}>
                                    <input
                                        type="checkbox"
                                        id="featuredCheck"
                                        checked={projectForm.featured}
                                        onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })}
                                    />
                                    <label htmlFor="featuredCheck" style={{ cursor: 'pointer', color: '#e2e8f0' }}>
                                        Show in Featured Home Carousel ⭐
                                    </label>
                                </div>

                                <button type="submit" className="btn-primary">
                                    <i className="fas fa-plus-circle"></i> {editingProjectId ? 'Update Project' : 'Add Project to Database'}
                                </button>
                            </form>
                        </div>

                        {/* Projects List */}
                        <div className="admin-items-grid">
                            {projects.map((proj) => (
                                <div className="admin-item-card" key={proj._id}>
                                    <div className="admin-item-preview">
                                        <img src={resolveImage(proj.image)} alt={proj.title} />
                                    </div>
                                    <div className="admin-item-body">
                                        <div className="admin-item-title">
                                            <span>{proj.title}</span>
                                            <span className="badge-tag">{proj.category}</span>
                                        </div>
                                        <p className="admin-item-desc">{proj.description}</p>
                                        <div className="admin-item-tech">
                                            {proj.tech && proj.tech.map((t, idx) => (
                                                <span className="tech-pill" key={idx}>{t}</span>
                                            ))}
                                        </div>
                                        <div className="admin-item-footer">
                                            <div>
                                                {proj.featured && (
                                                    <span style={{ fontSize: '0.75rem', color: '#eab308' }}>
                                                        <i className="fas fa-star"></i> Featured
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        setEditingProjectId(proj._id);
                                                        setProjectForm(proj);
                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                    }}
                                                    className="btn-icon-edit"
                                                    title="Edit"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteProject(proj._id)}
                                                    className="btn-icon-danger"
                                                    title="Delete"
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. SKILLS TAB */}
                {activeTab === 'skills' && (
                    <div>
                        <div className="admin-card">
                            <div className="card-title">
                                <span>{editingSkillId ? 'Edit Skill' : 'Add New Skill'}</span>
                                {editingSkillId && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingSkillId(null);
                                            setSkillForm({ name: '', category: 'Front-End', icon: '', title: '', description: '', order: 0 });
                                        }}
                                        className="btn-danger-sm"
                                    >
                                        Cancel Edit
                                    </button>
                                )}
                            </div>
                            <form onSubmit={handleSaveSkill}>
                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label>Skill Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={skillForm.name}
                                            onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select
                                            value={skillForm.category}
                                            onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}
                                        >
                                            <option value="Front-End">Front-End</option>
                                            <option value="Back-End">Back-End</option>
                                            <option value="App">App</option>
                                            <option value="Tools">Tools</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Icon URL (SVG / PNG)</label>
                                        <input
                                            type="url"
                                            required
                                            placeholder="https://raw.githubusercontent.com/..."
                                            value={skillForm.icon}
                                            onChange={(e) => setSkillForm({ ...skillForm, icon: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Display Title (Optional)</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. ReactJS"
                                            value={skillForm.title}
                                            onChange={(e) => setSkillForm({ ...skillForm, title: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Description (for About page skill card)</label>
                                    <textarea
                                        value={skillForm.description}
                                        onChange={(e) => setSkillForm({ ...skillForm, description: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="btn-primary">
                                    <i className="fas fa-plus-circle"></i> {editingSkillId ? 'Update Skill' : 'Add Skill'}
                                </button>
                            </form>
                        </div>

                        <div className="admin-items-grid">
                            {skills.map((sk) => (
                                <div className="admin-item-card" key={sk._id} style={{ padding: '1.2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                        <img src={sk.icon} alt={sk.name} style={{ width: '40px', height: '40px' }} />
                                        <div>
                                            <h4 style={{ margin: 0, color: '#fff' }}>{sk.name}</h4>
                                            <span className="badge-tag">{sk.category}</span>
                                        </div>
                                    </div>
                                    <p className="admin-item-desc">{sk.description || 'No description provided.'}</p>
                                    <div className="admin-item-footer">
                                        <span></span>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setEditingSkillId(sk._id);
                                                    setSkillForm(sk);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="btn-icon-edit"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteSkill(sk._id)}
                                                className="btn-icon-danger"
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. SERVICES TAB */}
                {activeTab === 'services' && (
                    <div>
                        <div className="admin-card">
                            <div className="card-title">
                                <span>{editingServiceId ? 'Edit Service' : 'Add New Service'}</span>
                                {editingServiceId && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingServiceId(null);
                                            setServiceForm({ title: '', icon: 'fas fa-laptop', description: '', order: 0 });
                                        }}
                                        className="btn-danger-sm"
                                    >
                                        Cancel Edit
                                    </button>
                                )}
                            </div>
                            <form onSubmit={handleSaveService}>
                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label>Service Title</label>
                                        <input
                                            type="text"
                                            required
                                            value={serviceForm.title}
                                            onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>FontAwesome Icon Class</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. fas fa-laptop, fas fa-chart-line"
                                            value={serviceForm.icon}
                                            onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        required
                                        value={serviceForm.description}
                                        onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="btn-primary">
                                    <i className="fas fa-plus-circle"></i> {editingServiceId ? 'Update Service' : 'Add Service'}
                                </button>
                            </form>
                        </div>

                        <div className="admin-items-grid">
                            {services.map((serv) => (
                                <div className="admin-item-card" key={serv._id} style={{ padding: '1.2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                        <i className={serv.icon} style={{ fontSize: '1.8rem', color: '#00d2df' }}></i>
                                        <h4 style={{ margin: 0, color: '#fff' }}>{serv.title}</h4>
                                    </div>
                                    <p className="admin-item-desc">{serv.description}</p>
                                    <div className="admin-item-footer">
                                        <span></span>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setEditingServiceId(serv._id);
                                                    setServiceForm(serv);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="btn-icon-edit"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteService(serv._id)}
                                                className="btn-icon-danger"
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 5. PRICING TAB */}
                {activeTab === 'pricing' && (
                    <div>
                        <div className="admin-card">
                            <div className="card-title">
                                <span>{editingPricingId ? 'Edit Plan' : 'Add New Pricing Plan'}</span>
                                {editingPricingId && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingPricingId(null);
                                            setPricingForm({ title: '', subtitle: '', price: 100, currency: '$', features: '', isRecommended: false });
                                        }}
                                        className="btn-danger-sm"
                                    >
                                        Cancel Edit
                                    </button>
                                )}
                            </div>
                            <form onSubmit={handleSavePricing}>
                                <div className="form-grid-2">
                                    <div className="form-group">
                                        <label>Plan Title (e.g. Essential, Professional)</label>
                                        <input
                                            type="text"
                                            required
                                            value={pricingForm.title}
                                            onChange={(e) => setPricingForm({ ...pricingForm, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Subtitle</label>
                                        <input
                                            type="text"
                                            value={pricingForm.subtitle}
                                            onChange={(e) => setPricingForm({ ...pricingForm, subtitle: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            required
                                            value={pricingForm.price}
                                            onChange={(e) => setPricingForm({ ...pricingForm, price: Number(e.target.value) })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Currency</label>
                                        <input
                                            type="text"
                                            value={pricingForm.currency}
                                            onChange={(e) => setPricingForm({ ...pricingForm, currency: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Features (One per line)</label>
                                    <textarea
                                        placeholder={"1 responsive page\nDomain for 1 year\nHosting for 1 year"}
                                        value={Array.isArray(pricingForm.features) ? pricingForm.features.join('\n') : pricingForm.features}
                                        onChange={(e) => setPricingForm({ ...pricingForm, features: e.target.value })}
                                    />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.2rem' }}>
                                    <input
                                        type="checkbox"
                                        id="recCheck"
                                        checked={pricingForm.isRecommended}
                                        onChange={(e) => setPricingForm({ ...pricingForm, isRecommended: e.target.checked })}
                                    />
                                    <label htmlFor="recCheck" style={{ cursor: 'pointer', color: '#e2e8f0' }}>
                                        Highlighted / Recommended Plan ⭐
                                    </label>
                                </div>
                                <button type="submit" className="btn-primary">
                                    <i className="fas fa-plus-circle"></i> {editingPricingId ? 'Update Plan' : 'Add Plan'}
                                </button>
                            </form>
                        </div>

                        <div className="admin-items-grid">
                            {pricing.map((p) => (
                                <div className="admin-item-card" key={p._id} style={{ padding: '1.2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 style={{ margin: 0, color: '#fff' }}>{p.title}</h4>
                                        <span style={{ color: '#00d2df', fontWeight: 'bold' }}>{p.currency || '$'}{p.price}</span>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '4px 0 10px 0' }}>{p.subtitle}</p>
                                    <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>
                                        {p.features && p.features.map((f, idx) => (
                                            <li key={idx}>{f}</li>
                                        ))}
                                    </ul>
                                    <div className="admin-item-footer" style={{ marginTop: '12px' }}>
                                        {p.isRecommended ? <span className="badge-tag">Recommended</span> : <span></span>}
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setEditingPricingId(p._id);
                                                    setPricingForm(p);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="btn-icon-edit"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDeletePricing(p._id)}
                                                className="btn-icon-danger"
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 6. FAQS TAB */}
                {activeTab === 'faqs' && (
                    <div>
                        <div className="admin-card">
                            <div className="card-title">
                                <span>{editingFaqId ? 'Edit FAQ' : 'Add New FAQ'}</span>
                                {editingFaqId && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditingFaqId(null);
                                            setFaqForm({ question: '', answer: '' });
                                        }}
                                        className="btn-danger-sm"
                                    >
                                        Cancel Edit
                                    </button>
                                )}
                            </div>
                            <form onSubmit={handleSaveFaq}>
                                <div className="form-group">
                                    <label>Question</label>
                                    <input
                                        type="text"
                                        required
                                        value={faqForm.question}
                                        onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Answer</label>
                                    <textarea
                                        required
                                        value={faqForm.answer}
                                        onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="btn-primary">
                                    <i className="fas fa-plus-circle"></i> {editingFaqId ? 'Update FAQ' : 'Add FAQ'}
                                </button>
                            </form>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {faqs.map((faq) => (
                                <div className="admin-card" key={faq._id} style={{ margin: 0, padding: '1.2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 style={{ margin: 0, color: '#00d2df' }}>{faq.question}</h4>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setEditingFaqId(faq._id);
                                                    setFaqForm(faq);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="btn-icon-edit"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteFaq(faq._id)}
                                                className="btn-icon-danger"
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p style={{ marginTop: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Toast Notification */}
            {toastMessage && (
                <div className="admin-toast">
                    <i className="fas fa-check-circle" style={{ color: '#00d2df' }}></i>
                    <span>{toastMessage}</span>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
