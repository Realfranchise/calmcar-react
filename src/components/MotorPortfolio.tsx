import React, { useState } from 'react';

interface Motor {
  model: string;
  reducerType: string;
  reductionRatio: string;
  ratedTorque: string;
  peakTorque: string;
  dimensions: string;
  weight: string;
}

const MotorPortfolio: React.FC = () => {
  const [showAllMotors, setShowAllMotors] = useState(false);

  const initialMotors: Motor[] = [
    {
      model: "CALM54-36P-FM",
      reducerType: "Planetary Reducer",
      reductionRatio: "36",
      ratedTorque: "12 N.m",
      peakTorque: "36 N.m",
      dimensions: "54×77.5mm",
      weight: "480g"
    },
    {
      model: "CALM90-100H-FM",
      reducerType: "Harmonic Drive",
      reductionRatio: "100",
      ratedTorque: "45 N.m",
      peakTorque: "88.6 N.m",
      dimensions: "90×70.8mm",
      weight: "1160g"
    },
    {
      model: "CALM135-12.96P-FM",
      reducerType: "Planetary Reducer",
      reductionRatio: "12.96",
      ratedTorque: "95 N.m",
      peakTorque: "280 N.m",
      dimensions: "130×61mm",
      weight: "2500g"
    }
  ];

  const extendedMotors: Motor[] = [
    {
      model: "CALM70-100H-BD",
      reducerType: "Harmonic Drive",
      reductionRatio: "100",
      ratedTorque: "10 N.m",
      peakTorque: "32 N.m",
      dimensions: "70×80mm",
      weight: "620g"
    },
    {
      model: "CALM75-25P-BD",
      reducerType: "Planetary Reducer",
      reductionRatio: "25",
      ratedTorque: "30 N.m",
      peakTorque: "90 N.m",
      dimensions: "86.5×85mm",
      weight: "900g"
    },
    {
      model: "CALM80-36P-FM",
      reducerType: "Planetary Reducer",
      reductionRatio: "36",
      ratedTorque: "22.9 N.m",
      peakTorque: "68.7 N.m",
      dimensions: "80×67mm",
      weight: "800g"
    },
    {
      model: "CALM90-16P-BD",
      reducerType: "Planetary Reducer",
      reductionRatio: "16",
      ratedTorque: "20 N.m",
      peakTorque: "60 N.m",
      dimensions: "90×57mm",
      weight: "700g"
    },
    {
      model: "CALM55-100H-BD",
      reducerType: "Harmonic Drive",
      reductionRatio: "100",
      ratedTorque: "10 N.m",
      peakTorque: "25 N.m",
      dimensions: "73×55mm",
      weight: "600g"
    },
    {
      model: "CALM70-100H-FM",
      reducerType: "Harmonic Drive",
      reductionRatio: "100",
      ratedTorque: "10 N.m",
      peakTorque: "32 N.m",
      dimensions: "70×72.6mm",
      weight: "580g"
    },
    {
      model: "CALM90-100H-BD",
      reducerType: "Harmonic Drive",
      reductionRatio: "100",
      ratedTorque: "35 N.m",
      peakTorque: "90 N.m",
      dimensions: "90×93.5mm",
      weight: "1200g"
    },
    {
      model: "CALM110-100H-FM",
      reducerType: "Harmonic Drive",
      reductionRatio: "100",
      ratedTorque: "77.7 N.m",
      peakTorque: "205 N.m",
      dimensions: "110×74mm",
      weight: "1720g"
    }
  ];

  const toggleMotors = () => {
    setShowAllMotors(!showAllMotors);
  };

  const renderMotorCard = (motor: Motor, index: number) => (
    <div key={index} className="motor-card">
      <div className="motor-model">{motor.model}</div>
      <div className="motor-specs">
        <div className="spec-row">
          <span className="spec-label">Reducer Type:</span>
          <span className="spec-value">{motor.reducerType}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Reduction Ratio:</span>
          <span className="spec-value">{motor.reductionRatio}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Rated Torque:</span>
          <span className="spec-value">{motor.ratedTorque}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Peak Torque:</span>
          <span className="spec-value">{motor.peakTorque}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Dimensions:</span>
          <span className="spec-value">{motor.dimensions}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Weight:</span>
          <span className="spec-value">{motor.weight}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="solutions" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Humanoid Robot Motor Portfolio</h2>
          <p className="section-desc">Complete range of custom actuators for robotics applications</p>
        </div>

        <div className="motor-section">
          <div className="motor-grid" id="initial-motors">
            {initialMotors.map((motor, index) => renderMotorCard(motor, index))}
          </div>

          <div className="expand-section">
            <button className="btn btn-secondary expand-motors-btn" onClick={toggleMotors}>
              <span className="btn-text">
                {showAllMotors ? 'Show Less' : 'View All 11 Motor Models'}
              </span>
              <span className="btn-arrow" style={{
                transform: showAllMotors ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>▼</span>
            </button>
          </div>

          {showAllMotors && (
            <div className="motor-grid motor-grid-extended" id="extended-motors">
              {extendedMotors.map((motor, index) => renderMotorCard(motor, index + initialMotors.length))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MotorPortfolio;