import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import "../assets/Login.css"; 
import logo1 from "../Images/Subtract.png"; 
import logo3 from "../Images/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.css';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('saas');
  const navigate = useNavigate(); 

  const showOptions = (option) => {
    setActiveTab(option);
  };

  const handleLogin = () => {
    navigate('/main'); 
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="stats">
          <h3 style={{ textAlign: 'left', marginLeft: '20px' }}>
            <img src={logo3} alt="Icon" style={{ height: '22px', width: '22px', marginTop: '20px' }} /> AI to Detect & Autofix Bad Code
          </h3>
          <hr className="divider1" />
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', padding: '10px', fontSize: 'large' }}>
            <div>
              <strong>30+</strong>
              <p style={{ fontSize: 'medium' }}>Language Support</p>
            </div>
            <div>
              <strong>10K+</strong>
              <p style={{ fontSize: 'medium' }}>Developers</p>
            </div>
            <div>
              <strong>100K+</strong>
              <p style={{ fontSize: 'medium' }}>Hours Saved</p>
            </div>
          </div>
        </div>
        <div className="stats-large">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <i className="fas fa-chart-pie" style={{ fontSize: '24px', color: '#5b87f4', marginRight: '18px' }}></i>
              <div className="stats-content">
                <h3>Issues Fixed</h3>
                <p style={{ fontSize: '32px', fontWeight: 'bold' }}>500K+</p>
              </div>
            </div>
            <span className="badge">↑ 14% <br /><span style={{ color: '#181D27' }}>This Week</span></span>
          </div>
        </div>
        <img src={logo1} alt="Left Bottom " className="bottom-left-image" />
      </div>

      <div className="right-section">
        <div className="logo-header">
          <img src={logo3} alt="Ant Logo" style={{ height: '40px', width: '35.62px', marginBottom: '10px' }} />
          <h1>CodeAnt AI</h1>
        </div>
        <div className="header1">
          <h2>Welcome to CodeAnt AI</h2>
        </div>
        <div className="tabs">
          <button className={activeTab === 'saas' ? 'active' : ''} onClick={() => showOptions('saas')}>SAAS</button>
          <button className={activeTab === 'self-hosted' ? 'active' : ''} onClick={() => showOptions('self-hosted')}>Self Hosted</button>
        </div>
        <hr className="divider" />
        <div className="login-options" id="saas-options" style={{ display: activeTab === 'saas' ? 'block' : 'none' }}>
          <button onClick={handleLogin}><i><FaGithub /></i> Sign in with Github</button>
          <button onClick={handleLogin}><i><FaBitbucket style={{color:"#205081"}} /></i>Sign in with Bitbucket</button>
          <button onClick={handleLogin}>
            <i className="fab fa-microsoft" style={{ color: "#f25022" }}></i> Sign in with Azure Devops
          </button>
          <button onClick={handleLogin}>
            <i className="fab fa-gitlab" style={{ color: " #fc6d26" }}></i> Sign in with GitLab
          </button>
        </div>
        <div className="login-options" id="self-hosted-options" style={{ display: activeTab === 'self-hosted' ? 'block' : 'none' }}>
          <button onClick={handleLogin}><i className="fab fa-gitlab" style={{ color: '#fc6d26' }}></i> Self Hosted GitLab</button>
          <button onClick={handleLogin}><i className="fas fa-key" style={{ color: '#ffbf00' }}></i> Sign in with SSO</button>
        </div>
        <div className="privacy-policy">
          By signing up you agree to the <a href="./LoginPage.js">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
