import { useState } from "react";

export default function GlassImage({
  src,
  alt,
  className,
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      
      {/* IOS Glass Loader */}
      {loading && (
        <div className="absolute inset-0 z-10 overflow-hidden rounded-inherit bg-white/10 backdrop-blur-xl">
          
          {/* Shimmer */}
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/20 to-white/5"></div>

          {/* Moving Shine */}
          <div className="absolute left-[-100%] top-0 h-full w-[50%] rotate-12 bg-white/20 blur-xl animate-[shine_2s_infinite]"></div>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
        className={`h-full w-full object-cover transition-all duration-700 ${
          loading
            ? "scale-110 blur-md opacity-0"
            : "scale-100 blur-0 opacity-100"
        }`}
      />
    </div>
  );
}