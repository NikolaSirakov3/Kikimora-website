import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "Free",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "5M tokens per month",
        "Up to 30 assets",
        "Weekly web application scan",
        "Attack surface management",
        "Endpoint hardening assessment",
        "1 workspace user",
      ],
      popular: false,
      cta: "Get Started Free",
    },
    {
      name: "Base",
      price: "$30",
      period: "/month",
      description: "For growing teams",
      features: [
        "20M tokens per month",
        "Up to 30 assets",
        "Weekly web application scan",
        "Attack surface management",
        "Endpoint hardening assessment",
        "1 workspace user",
      ],
      popular: false,
      cta: "Start Base Plan",
    },
    {
      name: "Pro",
      price: "$50",
      period: "/month",
      description: "For advanced security teams",
      features: [
        "40M tokens per month",
        "Up to 30 assets",
        "Weekly web application scan",
        "Attack surface management",
        "Endpoint hardening assessment",
        "1 workspace user",
      ],
      popular: true,
      cta: "Start Pro Plan",
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited assets",
        "Unlimited web application scans",
        "Jira integration",
        "Qualys integration",
        "Wazuh integration",
        "Multiple workspace users",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-blue-50/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Plans that grow with you.
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Scale your cybersecurity protection with our flexible pricing
            options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-lg ${plan.popular ? "ring-2 ring-blue-500 shadow-lg scale-105" : "hover:scale-105"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl text-blue-900">
                  {plan.name}
                </CardTitle>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </div>
                  {plan.period && (
                    <div className="text-blue-600">{plan.period}</div>
                  )}
                </div>
                <CardDescription className="text-blue-700">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-900">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:ring-offset-0 focus:border-0 active:ring-0 active:border-0 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 text-white border-0 shadow-none"
                      : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:border-blue-600 active:bg-blue-600 active:text-white active:border-blue-600 shadow-none"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
