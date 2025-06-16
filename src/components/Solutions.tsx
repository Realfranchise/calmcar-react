import React from 'react';

interface Solution {
  title: string;
  icon: string;
  image: string;
  features: string[];
  note: {
    label: string;
    text: string;
  };
}

const Solutions: React.FC = () => {
  const solutions: Solution[] = [
    {
      title: "Smart Parking",
      icon: "🚗",
      image: "PL1.png",
      features: [
        "Automated Parking",
        "Remote Parking",
        "Summon Mode Pilot",
        "Auto Trained Parking",
        "Valet Parking"
      ],
      note: {
        label: "Key Achievement:",
        text: "Nominated by Mercedes for Parking PoC, targeting production in 2025"
      }
    },
    {
      title: "Highway & City Pilot",
      icon: "🛣️",
      image: "PL2.png",
      features: [
        "Surround Perception",
        "Far Range Perception",
        "Front Perception",
        "Highway Pilot",
        "Urban Pilot"
      ],
      note: {
        label: "Validation:",
        text: "L3 pilot features developed with over 50k km national road test"
      }
    },
    {
      title: "Next Generation Mobility Services",
      icon: "🚌",
      image: "PL3.png",
      features: [
        "Autonomous Shuttle Bus",
        "L4 Hub to Hub Commercial",
        "AGV at port zone"
      ],
      note: {
        label: "Application:",
        text: "24/7 autonomous operation for logistics and transportation"
      }
    }
  ];

  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Company and Product Line</h2>
          <p className="section-desc">Comprehensive autonomous driving solutions for every industry need</p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className={`solution-card fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={`/images/${solution.image}`} alt={`${solution.title} Solution`} className="solution-image" />
              <div className="solution-content">
                <div className="solution-header">
                  <div className="solution-icon">{solution.icon}</div>
                  <h3 className="solution-title">{solution.title}</h3>
                </div>
                <ul className="solution-features">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <div className="solution-note">
                  <strong>{solution.note.label}</strong> {solution.note.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;