import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./NotFound.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon">🚀</div>
        <h1 className="not-found-title">404</h1>
        <p className="not-found-subtitle">Oops! Page not found</p>
        <p className="not-found-description">
          The page you're looking for seems to have drifted off into space.
        </p>
        <a href="/" className="not-found-link">
          Return to Home
        </a>
      </div>
      
      <div className="not-found-background">
        <div className="floating-element element-1">⭐</div>
        <div className="floating-element element-2">🌍</div>
        <div className="floating-element element-3">🛸</div>
        <div className="floating-element element-4">💫</div>
      </div>
    </div>
  );
};

export default NotFound; 