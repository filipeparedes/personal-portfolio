interface ButtonProps {
  color?: 'blue' | 'purple' | 'emerald' | 'slate';
  ref?: string;
  className?: string; // for extra adjustments
  children: React.ReactNode;
}

export function Button({ color = 'blue', ref, className = "", children }: ButtonProps) {
  // color mapping
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-500 shadow-blue-500/20",
    purple: "bg-purple-600 hover:bg-purple-500 shadow-purple-500/20",
    emerald: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20",
    slate: "bg-slate-700 hover:bg-slate-600 shadow-slate-500/10"
  };

  return (
    <a
      href={ref}
      className={`
        px-6 py-3.5
        inline-flex items-center gap-2 px-8 text-white rounded-lg transition-all border border-slate-700 font-mono
        ${colorVariants[color]}
        ${className}
      `}
    >
      {children}
    </a>
  );
}