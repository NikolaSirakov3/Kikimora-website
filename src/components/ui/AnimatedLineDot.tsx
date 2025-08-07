interface AnimatedLineDotProps {
  animate?: boolean;
}

export function AnimatedLineDot({ animate }: AnimatedLineDotProps) {
  return (
    <div className="flex justify-center h-[120px] items-end">
      <div className="relative" style={{ transform: "rotate(-45deg)" }}>
        {/* Line: appears instantly on hover, no animation */}
        <div
          className="absolute"
          style={{
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            height: animate ? "100px" : "0px",
            backgroundColor: "#3b82f6",
          }}
        />
        {/* Dot: appears instantly with the line */}
        {animate && (
          <>
            <div className="w-4 h-4 bg-primary rounded-full" />
            <div
              className="absolute inset-0 w-4 h-4 bg-primary rounded-full"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                animation: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
            <style>
              {`
                @keyframes ping {
                  75%, 100% {
                    transform: scale(2);
                    opacity: 0;
                  }
                }
              `}
            </style>
          </>
        )}
      </div>
    </div>
  );
}
