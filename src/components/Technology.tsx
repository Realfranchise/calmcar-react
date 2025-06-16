import React, { useState } from 'react';

const Technology: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vision-specs');

  const tabs = [
    { id: 'vision-specs', label: 'Vision System Specs' },
    { id: 'hardware-partners', label: 'Hardware Partners' },
    { id: 'performance-data', label: 'Performance Data' }
  ];

  return (
    <section className="technology" id="technology">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Technology Stack</h2>
          <p className="section-desc">Advanced perception and AI systems powering autonomous driving</p>
        </div>

        <div className="tech-showcase">
          <div className="tech-card">
            <img src="/images/CT1.png" alt="Vision Perception System" className="tech-image" />
            <h3>Vision Perception System</h3>
            <p>Panoptic perception with multi-camera fusion supporting fisheye and bird's eye view</p>
          </div>
          
          <div className="tech-card">
            <img src="/images/CT2.png" alt="Point Cloud Perception" className="tech-image" />
            <h3>Point Cloud Perception</h3>
            <p>Multi-LiDAR and 4D imaging radar integration with anchor-free detection</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-image">[AIGC Platform Architecture Diagram]</div>
            <h3>CalmCar AIGC Integrated Platform</h3>
            <p>End-to-end autonomous ML pipeline from data collection to deployment</p>
          </div>
        </div>

        <div className="tech-tabs">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tech-content">
          {/* Vision System Specs Tab */}
          <div className={`tab-content ${activeTab === 'vision-specs' ? 'active' : ''}`}>
            <h3>Vision Perception System - Technical Specifications</h3>
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Specification</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Detection Range</td>
                  <td>Fisheye Ground Truth &gt; 30m<br />BEV Ground Truth &gt; 15m</td>
                  <td>Validated in production environment</td>
                </tr>
                <tr>
                  <td>Perception Features</td>
                  <td>3D Detection & Segmentation<br />Vision Pseudo Point Cloud</td>
                  <td>Real-time processing</td>
                </tr>
                <tr>
                  <td>Object Classification</td>
                  <td>More than 140 Labeling Classes</td>
                  <td>Continuously expanding</td>
                </tr>
                <tr>
                  <td>System Features</td>
                  <td>Multi-Camera Fusion<br />Multi-Function Fusion</td>
                  <td>Support up to 12 cameras</td>
                </tr>
                <tr>
                  <td>Special Capabilities</td>
                  <td>Panoptic Perception<br />Optical Character Recognition</td>
                  <td>For complex urban scenarios</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Hardware Partners Tab */}
          <div className={`tab-content ${activeTab === 'hardware-partners' ? 'active' : ''}`}>
            <h3>Strategic Technology Partners</h3>
            <div className="partners-grid">
              <div className="partner-category">
                <h4>SoC Partners</h4>
                <ul>
                  <li>NVIDIA</li>
                  <li>Texas Instruments</li>
                  <li>Ambarella</li>
                  <li>HiSilicon</li>
                  <li>BLACK SESAME</li>
                  <li>Horizon Robotics (地平线)</li>
                </ul>
              </div>
              
              <div className="partner-category">
                <h4>Tier1 Partners</h4>
                <ul>
                  <li>ZF</li>
                  <li>Jingwei Hirain (经纬恒润)</li>
                  <li>Technomous (创财智驾)</li>
                  <li>ADAYO</li>
                  <li>Autoliv</li>
                  <li>HASCO</li>
                </ul>
              </div>
              
              <div className="partner-category">
                <h4>Map Partners</h4>
                <ul>
                  <li>NavInfo (中海庭)</li>
                  <li>Maps for Life</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Data Tab */}
          <div className={`tab-content ${activeTab === 'performance-data' ? 'active' : ''}`}>
            <h3>Validated Performance Metrics</h3>
            <div className="performance-metrics">
              <div className="metric-card">
                <h4>Road Testing</h4>
                <p className="metric-value">50,000+ km</p>
                <p className="metric-desc">National road test completed</p>
                <p className="metric-note">L3 pilot features validated</p>
              </div>
              
              <div className="metric-card">
                <h4>Vision System Performance</h4>
                <ul>
                  <li>Fisheye Ground Truth: &gt; 30m</li>
                  <li>BEV Ground Truth: &gt; 15m</li>
                  <li>Object Classes: 140+ labels</li>
                  <li>Multi-Camera Fusion Support</li>
                </ul>
              </div>
              
              <div className="metric-card">
                <h4>Key Achievements</h4>
                <ul>
                  <li>Mercedes-Benz: Parking PoC nominated, 2025 production target</li>
                  <li>BAIC, SERES, SINOTRUK: DMS production</li>
                  <li>Navigation on Autopilot: Hands-free mode under development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;