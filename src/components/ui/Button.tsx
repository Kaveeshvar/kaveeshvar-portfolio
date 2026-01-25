import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
    const baseStyles = `
      relative inline-flex items-center justify-center font-medium 
      transition-all duration-300 ease-out
      active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold
        hover:from-cyan-400 hover:to-cyan-300
        shadow-[0_0_0_1px_rgba(34,211,238,0.3),0_4px_16px_rgba(34,211,238,0.2)]
        hover:shadow-[0_0_0_1px_rgba(34,211,238,0.5),0_8px_30px_rgba(34,211,238,0.3)]
        ${glow ? 'glow-cyan' : ''}
      `,
      ghost: `
        bg-white/5 text-foreground border border-white/10
        hover:bg-white/10 hover:border-white/20
        backdrop-blur-sm
      `,
      outline: `
        bg-transparent text-foreground border-2 border-white/20
        hover:border-cyan-400/50 hover:text-cyan-400
      `,
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
      md: "text-sm px-4 py-2.5 rounded-xl gap-2",
      lg: "text-base px-6 py-3 rounded-xl gap-2",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
