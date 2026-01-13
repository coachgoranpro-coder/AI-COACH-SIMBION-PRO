import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showProBadge?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 32, showProBadge = true }) => {
  return (
    <div className="relative inline-block">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Basketball outer circle */}
        <circle cx="50" cy="50" r="48" fill="url(#basketballGradient)" stroke="#1e293b" strokeWidth="2"/>
        
        {/* Basketball lines */}
        <path d="M 50 2 Q 35 50 50 98" stroke="#334155" strokeWidth="1.5" fill="none"/>
        <path d="M 50 2 Q 65 50 50 98" stroke="#334155" strokeWidth="1.5" fill="none"/>
        <path d="M 2 50 Q 50 35 98 50" stroke="#334155" strokeWidth="1.5" fill="none"/>
        <path d="M 2 50 Q 50 65 98 50" stroke="#334155" strokeWidth="1.5" fill="none"/>
        
        {/* Kettlebell inside - handle */}
        <path d="M 35 35 Q 35 30 40 30 L 60 30 Q 65 30 65 35" 
          stroke="#475569" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round"/>
        
        {/* Kettlebell body - bell shape */}
        <ellipse cx="50" cy="55" rx="18" ry="22" fill="#334155"/>
        <ellipse cx="50" cy="55" rx="18" ry="22" fill="url(#kettlebellGradient)"/>
        
        {/* Kettlebell shine effect */}
        <ellipse cx="45" cy="48" rx="6" ry="8" fill="#64748b" opacity="0.5"/>
        
        {/* Gradient definitions */}
        <defs>
          <radialGradient id="basketballGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#f97316"/>
            <stop offset="100%" stopColor="#ea580c"/>
          </radialGradient>
          <linearGradient id="kettlebellGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569"/>
            <stop offset="100%" stopColor="#1e293b"/>
          </linearGradient>
        </defs>
      </svg>
      
      {/* PRO Badge */}
      {showProBadge && (
        <div 
          className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg"
          style={{ fontSize: size > 40 ? '10px' : '8px' }}
        >
          PRO
        </div>
      )}
    </div>
  );
};

export default Logo;
