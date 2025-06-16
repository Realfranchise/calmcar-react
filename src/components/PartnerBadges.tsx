import React from 'react';

const PartnerBadges: React.FC = () => {
  const partners = [
    { row: 1, logos: ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png'] },
    { row: 2, logos: ['logo5.png', 'logo6.png', 'logo7.png'] }
  ];

  return (
    <section className="partner-badges">
      <div className="container">
        <div className="partner-logos">
          {partners.map((row, index) => (
            <div key={index} className="partner-row">
              {row.logos.map((logo, logoIndex) => (
                <img 
                  key={logoIndex}
                  src={`/images/${logo}`} 
                  alt="Partner Logo" 
                  className="partner-logo" 
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;