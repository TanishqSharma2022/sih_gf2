import React from 'react';
import './marquee.css';

const Marquee = ({ children, speed }) => {
  const animationDuration = `${(children.props.children.length + 10) * speed}s`;

  return (
    <div className="marquee" style={{ animationDuration }}>
      {children}
    </div>
  );
};

export default Marquee;
