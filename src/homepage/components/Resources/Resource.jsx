import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './resources.css';
// import ai from './Resources_images/ai_resource.png';
// import de from './Resources_images/de_resources.png';
// import ds from './Resources_images/ds_resources.png';
// import ml from './Resources_images/ml_resources.png';
// import power from './Resources_images/power_bi.jpeg';
// import tableau from './Resources_images/tableau.jpeg';

export const ResourcesPage = () => {
  const resources = [
    { image: '/resources_images/ai_resource.png', label: 'AI Engineer', url: 'https://docs.google.com/document/d/1gKfhU6aq1IBQri12T8khS59dFwXQtfJj' },
    { image: '/resources_images/de_resources.png', label: 'DE Engineer', url: 'https://docs.google.com/document/d/1xT4loDwHvg0NgS0rWlN__EwtZJdgx1qj' },
    { image: '/resources_images/ds_resources.png', label: 'DS Engineer', url: 'https://docs.google.com/document/d/1x-KNIGC5_roQMyOiHdPyXw4RjePlRWpx' },
    { image: '/resources_images/ml_resources.png', label: 'ML Engineer', url: 'https://docs.google.com/document/d/1pt2slUfBGuVtuio3jPBETAUsi6XaybQy' },
    { image: '/resources_images/power_bi.jpeg', label: 'Power BI', url: 'https://docs.google.com/document/d/1yChXkpfBZBWCULekmJTzhtbPC2vs_Nqq' },
    { image: '/resources_images/tableau.jpeg', label: 'Tableau', url: 'https://docs.google.com/document/d/1uGPPeqBAeXo8NQXu2c-cArRLSMJJaJ3P' },
  ];

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="resources-page">
      <h1 className="resources-heading">Resources</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation={true}
      >
        {resources.map((resource, index) => (
          <SwiperSlide key={index}>
            <div className="resource-item" onClick={() => handleClick(resource.url)}>
              <div className="image-container">
                <img src={resource.image} alt={resource.label} />
              </div>
              <p className="image-label">{resource.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
