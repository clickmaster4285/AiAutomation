// components/Flag.tsx
'use client';

interface FlagProps {
  country: 'uk' | 'us' | 'pk';
  className?: string;
}

export function Flag({ country, className = '' }: FlagProps) {
  const flags = {
    uk: (
      <svg className={`w-5 h-4 ${className}`} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="uk-clip">
            <rect width="60" height="30" />
          </clipPath>
        </defs>
        <g clipPath="url(#uk-clip)">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="white" strokeWidth="6" />
          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="3" />
          <rect x="0" y="12" width="60" height="6" fill="white" />
          <rect x="0" y="12" width="60" height="3" fill="#C8102E" />
          <rect x="24" y="0" width="6" height="30" fill="white" />
          <rect x="27" y="0" width="3" height="30" fill="#C8102E" />
        </g>
      </svg>
    ),
    us: (
      <svg className={`w-5 h-4 ${className}`} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="us-clip">
            <rect width="60" height="30" />
          </clipPath>
        </defs>
        <g clipPath="url(#us-clip)">
          <rect width="60" height="30" fill="#B22234" />
          <rect y="2" width="60" height="2" fill="white" />
          <rect y="6" width="60" height="2" fill="white" />
          <rect y="10" width="60" height="2" fill="white" />
          <rect y="14" width="60" height="2" fill="white" />
          <rect y="18" width="60" height="2" fill="white" />
          <rect y="22" width="60" height="2" fill="white" />
          <rect y="26" width="60" height="2" fill="white" />
          <rect width="24" height="15" fill="#3C3B6E" />
          {[...Array(9)].map((_, i) => (
            <circle key={i} cx={3 + i * 2.4} cy={2} r="0.8" fill="white" />
          ))}
          {[...Array(8)].map((_, i) => (
            <circle key={i + 9} cx={2.4 + i * 2.4} cy={4} r="0.8" fill="white" />
          ))}
          {[...Array(9)].map((_, i) => (
            <circle key={i + 17} cx={3 + i * 2.4} cy={6} r="0.8" fill="white" />
          ))}
          {[...Array(8)].map((_, i) => (
            <circle key={i + 26} cx={2.4 + i * 2.4} cy={8} r="0.8" fill="white" />
          ))}
          {[...Array(9)].map((_, i) => (
            <circle key={i + 34} cx={3 + i * 2.4} cy={10} r="0.8" fill="white" />
          ))}
          {[...Array(8)].map((_, i) => (
            <circle key={i + 43} cx={2.4 + i * 2.4} cy={12} r="0.8" fill="white" />
          ))}
          {[...Array(9)].map((_, i) => (
            <circle key={i + 51} cx={3 + i * 2.4} cy={14} r="0.8" fill="white" />
          ))}
        </g>
      </svg>
    ),
    pk: (
      <svg className={`w-5 h-4 ${className}`} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="pk-clip">
            <rect width="60" height="30" />
          </clipPath>
        </defs>
        <g clipPath="url(#pk-clip)">
          <rect width="60" height="30" fill="#01411C" />
          <rect x="36" width="24" height="30" fill="white" />
          <circle cx="22" cy="15" r="8" fill="white" />
          <path d="M22 7 A8 8 0 1 1 22 23" fill="none" stroke="#01411C" strokeWidth="2" />
          <circle cx="18" cy="15" r="1.5" fill="#01411C" />
        </g>
      </svg>
    ),
  };

  return flags[country] || null;
}