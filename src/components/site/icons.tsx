type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function LeafIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 4c0 8-5 13-13 13H4c0-8 5-13 13-13z" />
      <path d="M4 20c3-6 7-9 12-11" />
    </svg>
  );
}

export function HeartIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20s-7-4.4-7-9.4A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.6c0 5-7 9.4-7 9.4z" />
    </svg>
  );
}

export function CycleIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 12a8 8 0 1 1-3-6.2" />
      <path d="M20 4v4h-4" />
    </svg>
  );
}

export function CompassIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9l-2 4-4 2 2-4z" />
    </svg>
  );
}

export function SparkIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4l1.6 4.9L18.5 10.5 13.6 12 12 17l-1.6-5L5.5 10.5 10.4 8.9z" />
    </svg>
  );
}

export function LockIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4.5" y="10.5" width="15" height="9" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function PlusIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.8 7.4h.01" />
    </svg>
  );
}
