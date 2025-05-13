import React from "react";
import { Button } from "./button";
import { ChevronRight } from "lucide-react";

interface DemoButtonProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function DemoButton({
  variant = "default",
  size = "default",
  className = "",
  showIcon = false,
  children = "Book Demo",
}: DemoButtonProps) {
  const handleClick = () => {
    window.open("https://calendly.com/o-antonov", "_blank");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
    >
      {children}
      {showIcon && <ChevronRight className="h-4 w-4" />}
    </Button>
  );
}
