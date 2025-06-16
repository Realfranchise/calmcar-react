import React from 'react';

interface Robot {
  title: string;
  image: string;
  capacity?: string;
  load?: string;
  endurance?: string;
  speed?: string;
  functions?: string;
  efficiency?: string;
  features?: string;
  batteryLife?: string;
  noiseLevel?: string;
  waterTank?: string;
}

const FutureTech: React.FC = () => {
  const robots: Robot[] = [
    {
      title: "All-In-One Delivery Robot",
      image: "SR1.png",
      capacity: "Upper/Lower warehouse 23L each",
      load: "10kg per warehouse",
      endurance: "Chassis 12h, Delivery 15h",
      speed: "0.4-1.4m/s",
      functions: "Delivery, Guidance, Reception"
    },
    {
      title: "Open Delivery Robot",
      image: "SR2.png",
      capacity: "44L",
      load: "40kg",
      endurance: "12H",
      speed: "0.4-1.4m/s",
      functions: "Delivery and Guidance"
    },
    {
      title: "Cleaning Robot",
      image: "SR3.png",
      efficiency: "300-500㎡/h",
      features: "Vacuuming + Mopping",
      batteryLife: "4h sweeping, 6h dust pushing",
      noiseLevel: "Less than 65 dB",
      waterTank: "5L"
    }
  ];

  return (
    <section className="future-tech" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Future Technology Products</h2>
          <p className="section-desc">Next-generation robotics and AI systems for diverse applications</p>
        </div>

        <div className="product-showcase">
          <div className="product-info">
            <h3>Café Robot - xbot S-F Series</h3>
            <p>Professional dual-arm robotic barista system with advanced customer interaction</p>
            <div className="product-specs">
              <h4>Technical Specifications:</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li>• Model Dimension: 1130×1280×1490mm</li>
                <li>• Weight: 370kg</li>
                <li>• Robotic Arm: Aubo i3 6 axis × 2</li>
                <li>• Coffee Machine: Franke A300</li>
                <li>• Ordering System: inSight dual-screen integration</li>
                <li>• Cup Dispensing: Acrylic countertop L400mm circular runway lighting</li>
              </ul>
            </div>
          </div>
          <img src="/images/FT1.png" alt="xbot Café Robot" className="product-image" />
        </div>

        <div className="product-showcase">
          <div className="product-info">
            <h3>MR-X Mixed Reality Headset</h3>
            <p>Enterprise-grade AR/MR solution for training and remote collaboration</p>
            <div className="product-specs">
              <h4>Key Features:</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li>• Field of View: 100° (Superior to competitors)</li>
                <li>• HD Camera: 1080P video</li>
                <li>• Design: Self-contained and non-tethered</li>
                <li>• Durability: MIL-C-48497, MIL-PRF-138303B</li>
                <li>• Safety: ISEA/ANSI Z87.1 compliant lenses</li>
                <li>• Features: Active cooling, stereo speakers, replaceable lenses</li>
              </ul>
            </div>
          </div>
          <img src="/images/FT2.png" alt="MR-X Headset" className="product-image" />
        </div>

        <h3 style={{textAlign: 'center', margin: '3rem 0'}}>Service Robot Portfolio</h3>
        <div className="robot-grid">
          {robots.map((robot, index) => (
            <div key={index} className="robot-card">
              <img src={`/images/${robot.image}`} alt={robot.title} className="robot-image" />
              <div className="robot-specs">
                <h4>{robot.title}</h4>
                {robot.capacity && <p><strong>Capacity:</strong> {robot.capacity}</p>}
                {robot.load && <p><strong>Load:</strong> {robot.load}</p>}
                {robot.endurance && <p><strong>Endurance:</strong> {robot.endurance}</p>}
                {robot.speed && <p><strong>Speed:</strong> {robot.speed}</p>}
                {robot.functions && <p><strong>Functions:</strong> {robot.functions}</p>}
                {robot.efficiency && <p><strong>Efficiency:</strong> {robot.efficiency}</p>}
                {robot.features && <p><strong>Features:</strong> {robot.features}</p>}
                {robot.batteryLife && <p><strong>Battery Life:</strong> {robot.batteryLife}</p>}
                {robot.noiseLevel && <p><strong>Noise Level:</strong> {robot.noiseLevel}</p>}
                {robot.waterTank && <p><strong>Water Tank:</strong> {robot.waterTank}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureTech;