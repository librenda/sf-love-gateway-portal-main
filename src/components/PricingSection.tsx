
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  priceId: string;
}

const plans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$19.99",
    description: "Perfect for getting started",
    features: [
      "10 matches per day",
      "Basic filters",
      "In-app messaging",
      "1 Super Like per day"
    ],
    buttonText: "Get Started",
    priceId: "price_basic"
  },
  {
    title: "Premium",
    price: "$39.99",
    description: "Our most popular plan",
    features: [
      "Unlimited matches",
      "Advanced filters",
      "Priority matching",
      "5 Super Likes per day",
      "See who likes you"
    ],
    buttonText: "Get Premium",
    popular: true,
    priceId: "price_premium"
  },
  {
    title: "VIP",
    price: "$59.99",
    description: "For serious daters",
    features: [
      "Everything in Premium",
      "Dating coach access",
      "Profile optimization",
      "Priority support",
      "Exclusive events"
    ],
    buttonText: "Go VIP",
    priceId: "price_vip"
  }
];

const PricingSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubscribe = (plan: PricingPlan) => {
    if (plan.title === "Premium" || plan.title === "Basic") {
      window.location.href = "https://buy.stripe.com/4gM00jaZg7WR7GC9aV0gw00";
    } else {
      toast({
        title: "Coming Soon",
        description: `${plan.title} subscription will be available shortly!`,
      });
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-sfdating-red mb-4">Choose Your Plan</h2>
        <p className="text-lg text-gray-600 mb-10">
          Find the perfect match at the perfect price
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.title}
            className={`rounded-2xl overflow-hidden border ${
              plan.popular 
                ? 'border-sfdating-red shadow-lg transform md:-translate-y-4' 
                : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <div className="bg-sfdating-red text-white text-center py-2 font-medium">
                Most Popular
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-2 text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-5 w-5 text-sfdating-red shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-sfdating-red hover:bg-sfdating-red/90' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => handleSubscribe(plan)}
              >
                {plan.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
