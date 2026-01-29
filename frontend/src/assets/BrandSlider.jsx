import React from 'react';
import './BrandSlider.css';

const BrandSlider = () => {
  const brands = [
    "ACE", "ESCORTS", "HYDRA", "KATO", "TEREX", "SANY", "LIEBHERR", "JCB"
  ];

  return (
    <section className="brand-section py-5 bg-white">
      <div className="container">
        <h5 className="text-center text-muted mb-4 fw-bold">BRANDS WE SUPPORT & SERVICE</h5>
        <div className="logo-slider">
          <div className="logo-slide-track">
            {/* Render brands twice for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div className="slide" key={index}>
                <div className="brand-box">
                  <span className="brand-text">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;