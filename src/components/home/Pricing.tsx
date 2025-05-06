import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

type PaymentPeriod = "yearly" | "monthly";

const IT_ASSETS_POINTS = [10, 30, 62, 126, 254, 510, 1022];
const WAS_POINTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Pricing() {
  const [paymentPeriod, setPaymentPeriod] = useState<PaymentPeriod>("yearly");
  const [itAssetsValue, setItAssetsValue] = useState(512);
  const [wasValue, setWasValue] = useState(0);

  const baseMonthlyPrice = useMemo(() => {
    if (itAssetsValue === 1022) return 2102.2;
    if (itAssetsValue === 510) return 1119.2;
    if (itAssetsValue === 254) return 627.7;
    if (itAssetsValue === 126) return 381.9;
    if (itAssetsValue === 62) return 259;
    if (itAssetsValue === 30) return 197.6;
    return 159.2; // Default base price for other IT Assets values
  }, [itAssetsValue]);

  const wasPriceIncrement = 30;

  const monthlyPrice = useMemo(() => {
    return baseMonthlyPrice + wasValue * wasPriceIncrement;
  }, [baseMonthlyPrice, wasValue]);

  const yearlyPrice = useMemo(() => {
    return monthlyPrice * 12; // Full yearly price without discount
  }, [monthlyPrice]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // Find the closest point in IT_ASSETS_POINTS
    const closest = IT_ASSETS_POINTS.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });
    setItAssetsValue(closest);
  };

  const handleWasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // Find the closest point in WAS_POINTS
    const closest = WAS_POINTS.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });
    setWasValue(closest);
  };

  return (
    <div className="w-full max-w-[420px] px-0 flex flex-col items-center">
      <div className="w-full z-10">
        {/* Pricing Card */}
        <div className="bg-gradient-to-r from-[#60348c] via-[#2A1D4C] to-[#492d65] rounded-3xl p-6">
          <div className="flex justify-between h-full">
            {/* Left side - Pricing details */}
            <div className="flex-1">
              <h2 className="text-3xl text-white font-conthrax mb-3">
                Pricing
              </h2>
              <p className="text-white/80 text-base font-montserrat mb-4">
                Pricing based on your company needs.
              </p>

              {/* Pricing items */}
              <div className="space-y-4">
                {/* IT Assets */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-montserrat text-sm w-32">
                    IT Assets
                  </span>
                  <div className="flex-1 h-0.5 bg-[#159ECE]/30 mx-2 relative">
                    {IT_ASSETS_POINTS.map((point) => (
                      <div
                        key={point}
                        className="absolute h-3 w-[1px] bg-[#159ECE]/50 top-1/2 transform -translate-y-1/2"
                        style={{
                          left: `${
                            ((point - IT_ASSETS_POINTS[0]) /
                              (IT_ASSETS_POINTS[IT_ASSETS_POINTS.length - 1] -
                                IT_ASSETS_POINTS[0])) *
                            100
                          }%`,
                        }}
                      />
                    ))}
                    <div
                      className="absolute w-3 h-3 bg-[#159ECE] rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer animate-pulse"
                      style={{
                        left: `${
                          ((itAssetsValue - IT_ASSETS_POINTS[0]) /
                            (IT_ASSETS_POINTS[IT_ASSETS_POINTS.length - 1] -
                              IT_ASSETS_POINTS[0])) *
                          100
                        }%`,
                      }}
                    />
                    <input
                      type="range"
                      min={IT_ASSETS_POINTS[0]}
                      max={IT_ASSETS_POINTS[IT_ASSETS_POINTS.length - 1]}
                      value={itAssetsValue}
                      onChange={handleSliderChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="text-[#159ECE] font-montserrat text-lg font-bold w-16 text-right">
                    {itAssetsValue}
                  </span>
                </div>

                {/* Qualys WAS Assets */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-montserrat text-sm w-32">
                    Qualys WAS Assets
                  </span>
                  <div className="flex-1 h-0.5 bg-[#159ECE]/30 mx-2 relative">
                    {WAS_POINTS.map((point) => (
                      <div
                        key={point}
                        className="absolute h-3 w-[1px] bg-[#159ECE]/50 top-1/2 transform -translate-y-1/2"
                        style={{
                          left: `${
                            ((point - WAS_POINTS[0]) /
                              (WAS_POINTS[WAS_POINTS.length - 1] -
                                WAS_POINTS[0])) *
                            100
                          }%`,
                        }}
                      />
                    ))}
                    <div
                      className="absolute w-3 h-3 bg-[#159ECE] rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer animate-pulse"
                      style={{
                        left: `${
                          ((wasValue - WAS_POINTS[0]) /
                            (WAS_POINTS[WAS_POINTS.length - 1] -
                              WAS_POINTS[0])) *
                          100
                        }%`,
                      }}
                    />
                    <input
                      type="range"
                      min={WAS_POINTS[0]}
                      max={WAS_POINTS[WAS_POINTS.length - 1]}
                      value={wasValue}
                      onChange={handleWasChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="text-[#159ECE] font-montserrat text-lg font-bold w-16 text-right">
                    {wasValue}
                  </span>
                </div>

                {/* Consulting Hours */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-montserrat text-sm w-32">
                    Consulting Hours
                  </span>
                  <span className="text-[#3EDDCA] font-montserrat text-lg font-bold w-24 text-right whitespace-nowrap">
                    80€/HOUR
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Total price and illustration */}
            <div className="flex-1 flex flex-col items-end">
              <div className="flex items-center gap-4 mb-4">
                {/* Payment period buttons */}
                <div className="flex gap-2">
                  <button
                    className={`px-4 py-1.5 rounded-full font-montserrat text-sm transition-colors ${
                      paymentPeriod === "yearly"
                        ? "bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90"
                        : "bg-transparent border border-[#3EDDCA] text-[#3EDDCA] hover:bg-[#3EDDCA]/10"
                    }`}
                    onClick={() => setPaymentPeriod("yearly")}
                  >
                    Yearly
                  </button>
                  <button
                    className={`px-4 py-1.5 rounded-full font-montserrat text-sm transition-colors ${
                      paymentPeriod === "monthly"
                        ? "bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90"
                        : "bg-transparent border border-[#3EDDCA] text-[#3EDDCA] hover:bg-[#3EDDCA]/10"
                    }`}
                    onClick={() => setPaymentPeriod("monthly")}
                  >
                    Monthly
                  </button>
                </div>

                {/* Price display */}
                <div className="text-right">
                  <div className="mb-1">
                    <span className="text-white/60 font-conthrax text-xl">
                      {paymentPeriod === "yearly" ? (
                        <>
                          <span className="mr-2">€</span>
                          <span>{yearlyPrice.toFixed(2)}</span>
                        </>
                      ) : (
                        "12 months"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-white/60 font-montserrat text-sm">
                    {paymentPeriod === "yearly"
                      ? "Total Price:"
                      : "Monthly Price:"}
                  </span>
                  <span className="text-[#3EDDCA] font-montserrat text-xl">
                    €{" "}
                    {paymentPeriod === "yearly"
                      ? yearlyPrice.toFixed(2)
                      : monthlyPrice.toFixed(2)}
                  </span>
                </div>
                {paymentPeriod === "yearly" && (
                  <p className="text-white/60 font-montserrat text-xs mb-2">
                    One time payment will get you a 10% discount
                  </p>
                )}
                <p className="text-white/60 font-montserrat text-xs mb-3">
                  To get more detailed information about the pricing you can
                  contact us at
                </p>
                <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-full px-6 py-3 font-montserrat text-sm">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
