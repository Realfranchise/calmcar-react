import React from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  videoId: string;
  featured?: boolean;
}

const RobotShowcase: React.FC = () => {
  const videos: Video[] = [
    {
      id: 'video1',
      title: 'Future Technology – All In One Up Robot',
      description: 'Advanced bipedal locomotion with real-time balance control and adaptive movement capabilities',
      videoId: 'G_-4wr36NIY',
      featured: true
    },
    {
      id: 'video2',
      title: 'Future Technology – Humanoid Robot',
      description: 'Full-body coordination showcasing dexterous manipulation and human-like motion patterns',
      videoId: 'FxmYdDmry8U'
    },
    {
      id: 'video3',
      title: 'Future Technology – Manufacturing Excellence',
      description: 'From precision components to final assembly: Building the next generation of humanoid robots',
      videoId: '_0L-8sydoBU'
    }
  ];

  return (
    <section className="robot-showcase" id="robot-videos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Humanoid Robot Technology Showcase</h2>
          <p className="section-desc">Experience the future of robotics through our cutting-edge demonstrations</p>
        </div>

        <div className="video-gallery">
          {videos.map((video) => (
            <div key={video.id} className={`video-item ${video.featured ? 'featured' : ''}`}>
              <div className="video-wrapper">
                <iframe 
                  width="560" 
                  height="315" 
                  src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1&rel=0`}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RobotShowcase;