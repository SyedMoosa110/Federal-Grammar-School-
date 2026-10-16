import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] sm:text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#218a8a] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#218a8a] text-white hover:bg-[#3fc298] hover:text-[#2b452b]",
        mint:
          "border-[#3fc298]/30 bg-[#3fc298]/10 text-[#218a8a] font-bold",
        teal:
          "border-[#218a8a]/20 bg-[#218a8a]/10 text-[#218a8a] font-semibold",
        forest:
          "border-[#2b452b]/20 bg-[#2b452b] text-white font-semibold",
        ocean:
          "border-[#246272]/20 bg-[#246272] text-white font-semibold",
        sage:
          "border-[#4a8168]/20 bg-[#4a8168]/10 text-[#4a8168] font-semibold",
        caramel:
          "border-[#3fc298]/30 bg-[#3fc298]/10 text-[#218a8a] font-bold",
        sand:
          "border-[#4a8168]/20 bg-[#F4F7F5] text-[#4a8168] font-semibold",
        crimson:
          "border-[#246272]/20 bg-[#246272]/10 text-[#246272] font-semibold",
        emerald:
          "border-[#2b452b]/20 bg-[#2b452b]/10 text-[#2b452b] font-semibold",
        secondary:
          "border-[#4a8168]/20 bg-[#F4F7F5] text-[#2b452b]",
        destructive:
          "border-transparent bg-red-100 text-red-800 hover:bg-red-200 border-red-300",
        outline:
          "text-[#4a8168] border-[#4a8168]/30 bg-white",
        gold:
          "border-[#3fc298]/30 bg-[#F4F7F5] text-[#218a8a] font-bold",
        success:
          "border-[#3fc298]/40 bg-[#3fc298]/15 text-[#1e321e]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
