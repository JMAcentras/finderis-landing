import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center brand-page-bg px-4">
      <div className="text-center brand-panel rounded-2xl p-10">
        <h1 className="text-5xl font-extrabold mb-4 brand-title-gradient">404</h1>
        <p className="text-xl text-[#24465e] mb-4">Oops! Page not found</p>
        <a href="/" className="brand-back-link font-semibold underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
