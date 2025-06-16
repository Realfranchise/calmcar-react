import React from 'react';

interface Resource {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      icon: "📄",
      title: "Company Overview",
      description: "CalmCar technology portfolio and partnership opportunities",
      buttonText: "Download PDF",
      link: "#"
    },
    {
      icon: "🔧",
      title: "Technical Specifications",
      description: "Detailed specs for all autonomous driving solutions",
      buttonText: "Access Documents",
      link: "#"
    },
    {
      icon: "🎥",
      title: "Demo Videos",
      description: "System demonstrations and real-world applications",
      buttonText: "Watch Demos",
      link: "#"
    }
  ];

  return (
    <section className="resources" id="resources">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Resources</h2>
          <p className="section-desc">Documentation and materials for technical evaluation</p>
        </div>

        <div className="resource-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-icon">{resource.icon}</div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} className="btn btn-secondary">{resource.buttonText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;