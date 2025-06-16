import React from 'react';
import { useCountAnimation } from '../hooks/useCountAnimation';

const Hero: React.FC = () => {
  const stat1 = useCountAnimation(50000, 2000);
  const stat2 = useCountAnimation(140, 1500);
  const stat3 = useCountAnimation(2025, 1800);

  return (
    <section className="hero">
      <img src="/images/hero-panorama.jpg" alt="CalmCar 자율주행 테스트 차량" className="hero-background" />
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Artificial Intelligence &<br />
            Intelligent Driving &<br />
            Future Technology</h1>
            <p className="subtitle">From L2 ADAS to L4 Autonomous Systems<br />
            Proven Technology for Global OEMs</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number" ref={stat1.ref}>
                  {stat1.count.toLocaleString()}+
                </div>
                <div className="stat-label">KM National Road Test</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" ref={stat2.ref}>
                  {stat2.count}+
                </div>
                <div className="stat-label">Labeling Classes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" ref={stat3.ref}>
                  {stat3.count}
                </div>
                <div className="stat-label">Mercedes Production Target</div>
              </div>
            </div>
            <button className="btn btn-ghost">Download Company Overview</button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-arrow"></span>
      </div>
    </section>
  );
};

export default Hero;