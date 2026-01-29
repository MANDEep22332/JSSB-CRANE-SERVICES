import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ target, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Intersection Observer starts the count only when the user scrolls to this section
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setHasStarted(true);
    }, { threshold: 0.5 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds to reach target
    const increment = target / (duration / 16); // 16ms per frame (60fps)

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div className="col-md-3 col-6 mb-4" ref={elementRef}>
      <h2 className="fw-bold text-warning display-5 mb-0">{count}{suffix}</h2>
      <p className="text-white opacity-75 text-uppercase small fw-bold">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#1a2634', borderBottom: '1px solid #2c3e50' }}>
      <div className="container text-center">
        <div className="row">
          <StatItem target={15} label="Years Experience" />
          <StatItem target={500} label="Projects Completed" />
          <StatItem target={24} label="Hours Support" suffix="/7" />
          <StatItem target={100} label="Genuine Parts" suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;