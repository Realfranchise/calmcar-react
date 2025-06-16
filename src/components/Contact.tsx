import React, { useState } from 'react';

interface FormData {
  companyName: string;
  email: string;
  industry: string;
  solution: string;
  requirements: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: '',
    industry: '',
    solution: '',
    requirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h3>Partner with CalmCar</h3>
            <p style={{marginBottom: '2rem'}}>Join leading OEMs in deploying next-generation autonomous systems</p>
            
            <div style={{marginBottom: '2rem'}}>
              <h4>Strategic Investors Include:</h4>
              <p>ZF, SAIC Capital, China Unicom, BAIC Capital, HOZON, and more</p>
            </div>
            
            <div>
              <h4>Financial Investors Include:</h4>
              <p>Delian Capital, GZVCM, Shihu Funds, OCBC, and others</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Request Technical Information</h3>
            <div className="form-group">
              <input 
                type="text" 
                name="companyName"
                placeholder="Company Name *" 
                value={formData.companyName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Business Email *" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <select 
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
              >
                <option value="">Select Industry *</option>
                <option value="automotive-oem">Automotive OEM</option>
                <option value="tier1">Tier 1 Supplier</option>
                <option value="logistics">Logistics & Transportation</option>
                <option value="port-industrial">Port & Industrial</option>
                <option value="service-hospitality">Service & Hospitality</option>
              </select>
            </div>
            <div className="form-group">
              <select 
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                required
              >
                <option value="">Solution of Interest *</option>
                <option value="smart-parking">Smart Parking Systems</option>
                <option value="highway-city">Highway & City Pilot</option>
                <option value="l4-commercial">L4 Commercial Systems</option>
                <option value="service-robots">Service Robots</option>
                <option value="humanoid-motors">Humanoid Robot Motors</option>
              </select>
            </div>
            <div className="form-group">
              <textarea 
                name="requirements"
                placeholder="Please describe your requirements" 
                rows={4}
                value={formData.requirements}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;