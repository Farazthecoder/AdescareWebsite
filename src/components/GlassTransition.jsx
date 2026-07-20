import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function GlassTransition({ children }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => setVisible(true), 100); // Delay to trigger transition
  }, [location.pathname]);

  return (
    <div
      className={`transition-all duration-500 
      ${visible ? "opacity-100 blur-0" : "opacity-0 blur-xl"}`}
    >
      <div className="glass-effect p-2 md:p-6 rounded-2xl">
        {children}
      </div>
    </div>
  );
}
