import React, { useState, useEffect, useRef } from "react";

function AnimatedNumber({ target, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Only animate if the section is visible

    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 20; // Update every 20ms
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    // Reset count to 0 each time it becomes visible
    setCount(0);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [target, isVisible]);

  // Format number as "5.2M", "7K", etc.
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toFixed(0);
  };

  return <span className="text-4xl font-bold text-blue-600">{formatNumber(count)}</span>;
}

function StatsSection() {
  const stats = [
    { number: 5200000, text: "Satisfied Customers" }, // 5.2M
    { number: 7000, text: "Properties Listed" },      // 7K
    { number: 4000, text: "Properties Sold" },        // 4K
    { number: 221, text: "Active Agents" },           // 221
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when the section leaves the viewport
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Our mission is to redefine real estate</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg">
            <AnimatedNumber target={stat.number} isVisible={isVisible} />
            <p className="text-gray-600">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
