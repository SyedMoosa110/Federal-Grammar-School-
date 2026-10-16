import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-xs sm:text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#218a8a] disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#218a8a] text-white shadow-sm hover:bg-[#3fc298] hover:text-[#2b452b] hover:shadow-md font-semibold",
        teal:
          "bg-[#218a8a] text-white shadow-sm hover:bg-[#3fc298] hover:text-[#2b452b] font-semibold",
        forest:
          "bg-[#2b452b] text-white shadow-sm hover:bg-[#1e321e] font-semibold",
        ocean:
          "bg-[#246272] text-white shadow-sm hover:bg-[#1b4a56] font-semibold",
        mint:
          "bg-[#3fc298] text-[#2b452b] hover:bg-[#329e7b] hover:text-white font-semibold",
        caramel:
          "bg-[#218a8a] text-white shadow-sm hover:bg-[#3fc298] hover:text-[#2b452b] font-semibold",
        sand:
          "bg-[#3fc298] text-[#2b452b] hover:bg-[#329e7b] font-semibold",
        crimson:
          "bg-[#246272] text-white shadow-sm hover:bg-[#1b4a56] font-semibold",
        emerald:
          "bg-[#2b452b] text-white shadow-sm hover:bg-[#1e321e] font-semibold",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700",
        outline:
          "border border-[#4a8168]/40 bg-white text-[#2b452b] shadow-sm hover:bg-[#F4F7F5] hover:border-[#218a8a] font-semibold",
        secondary:
          "bg-[#F4F7F5] text-[#2b452b] border border-[#4a8168]/20 hover:bg-[#EBF0ED] font-semibold",
        ghost:
          "hover:bg-[#F4F7F5] text-[#2b452b] hover:text-[#218a8a] font-medium",
        link:
          "text-[#218a8a] underline-offset-4 hover:underline font-semibold",
        gold:
          "bg-[#3fc298] text-[#2b452b] shadow-sm hover:bg-[#329e7b] font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-6 text-sm sm:text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
