import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "inline-block relative",
        "bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400",
        "bg-clip-text text-transparent",
        "animate-pulse",
        className
      )}
    >
      {children}
    </span>
  );
};
