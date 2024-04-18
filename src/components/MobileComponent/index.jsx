// ResponsiveComponent.js

import React, { useState, useEffect } from "react";

const ResponsiveComponent = ({ mobileBreakpoint, children }) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < mobileBreakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Temizleme işlevi.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileBreakpoint]);

  return <div style={{ display: isMobile ? "block" : "none" }}>{children}</div>;
};

export default ResponsiveComponent;
