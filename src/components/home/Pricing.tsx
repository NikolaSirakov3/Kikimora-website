import React, { useState } from "react";
import { Button } from "@/components/ui/button";

type PaymentPeriod = "yearly" | "monthly";

export function Pricing() {
  const [paymentPeriod, setPaymentPeriod] = useState<PaymentPeriod>("yearly");
  const yearlyPrice = 565;
  const monthlyPrice = 47.83;

  return (
    <div className="bg-[#001E38] py-20">
      <div className="w-full px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          {/* Pricing Card */}
          <div className="bg-gradient-to-r from-[#60348c] via-[#2A1D4C] to-[#492d65] rounded-3xl p-12 min-h-[600px]">
            <div className="flex justify-between h-full">
              {/* Left side - Pricing details */}
              <div className="flex-1">
                <h2 className="text-5xl text-white font-conthrax mb-6">
                  Pricing
                </h2>
                <p className="text-white/80 text-lg font-montserrat mb-8">
                  Pricing based on your company needs.
                </p>

                {/* Pricing items */}
                <div className="space-y-8">
                  {/* IP Addresses */}
                  <div className="flex items-center gap-4">
                    <span className="text-white font-montserrat text-lg w-40">
                      IP Addresses
                    </span>
                    <div className="flex-1 h-0.5 bg-[#159ECE]/30 mx-4 relative">
                      <div className="absolute w-3 h-3 bg-[#159ECE] rounded-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                    <span className="text-[#159ECE] font-montserrat text-2xl font-bold w-20 text-right">
                      512
                    </span>
                  </div>

                  {/* Web Applications */}
                  <div className="flex items-center gap-4">
                    <span className="text-white font-montserrat text-lg w-40">
                      Web Applications
                    </span>
                    <div className="flex-1 h-0.5 bg-[#159ECE]/30 mx-4 relative">
                      <div className="absolute w-3 h-3 bg-[#159ECE] rounded-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                    <span className="text-[#159ECE] font-montserrat text-2xl font-bold w-20 text-right">
                      25
                    </span>
                  </div>

                  {/* Consulting Hours */}
                  <div className="flex items-center gap-4">
                    <span className="text-white font-montserrat text-lg w-40">
                      Consulting Hours
                    </span>
                    <span className="text-[#3EDDCA] font-montserrat text-2xl font-bold w-32 text-right whitespace-nowrap">
                      {paymentPeriod === "yearly" ? "FREE" : "1 HOUR"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side - Total price and illustration */}
              <div className="flex-1 flex flex-col items-end">
                <div className="w-[500px] h-48 bg-[#159ECE]/20 rounded-2xl mb-4">
                  {/* Placeholder for isometric illustration */}
                </div>

                <div className="flex items-center gap-8 mb-8">
                  {/* Payment period buttons */}
                  <div className="flex gap-4">
                    <button
                      className={`px-6 py-2 rounded-full font-montserrat transition-colors ${
                        paymentPeriod === "yearly"
                          ? "bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90"
                          : "bg-transparent border border-[#3EDDCA] text-[#3EDDCA] hover:bg-[#3EDDCA]/10"
                      }`}
                      onClick={() => setPaymentPeriod("yearly")}
                    >
                      Yearly
                    </button>
                    <button
                      className={`px-6 py-2 rounded-full font-montserrat transition-colors ${
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
                    <div className="mb-2">
                      <span className="text-white/60 font-conthrax text-3xl">
                        {paymentPeriod === "yearly" ? (
                          <>
                            <span className="mr-2">$</span>
                            <span>{yearlyPrice}</span>
                          </>
                        ) : (
                          "12 months"
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-2">
                    <span className="text-white/60 font-montserrat">
                      {paymentPeriod === "yearly"
                        ? "Total Price:"
                        : "Monthly Price:"}
                    </span>
                    <span className="text-[#3EDDCA] font-montserrat text-3xl">
                      $ {paymentPeriod === "yearly" ? "509.5" : monthlyPrice}
                    </span>
                  </div>
                  {paymentPeriod === "yearly" && (
                    <p className="text-white/60 font-montserrat text-sm mb-4">
                      One time payment will get you a 10% discount
                    </p>
                  )}
                  <p className="text-white/60 font-montserrat text-sm mb-6">
                    To get more detailed information about the pricing you can
                    contact us at
                  </p>
                  <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-full px-8 py-6 font-montserrat">
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
