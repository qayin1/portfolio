import React, { useState } from 'react';

const IconHover = ({ icon, size }) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = {
    color: isHovered ? '#D2691E' : 'black',
    fontSize: size,
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.cloneElement(icon, { style: iconStyle })}
    </div>
  );
};

export default IconHover;
