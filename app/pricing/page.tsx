import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    price: 14.99,
    description: "Perfect for individuals and small projects",
    features: [
      "1 user",
      "3GB storage",
      "Basic customer support",
      "Easy document upload and sharing",
    ],
  },
  {
    name: "Pro",
    price: 24.99,
    description: "Great for growing teams and businesses",
    features: [
      "3 users",
      "10GB storage",
      "Priority support",
      "Easy document upload and sharing",
      "Basic DOT compliance tracking",
      "Specialized driver dashboard for increased organization",
      "249.99 annual (2 month free)",
    ],
    badge: "Popular",
  },
  {
    name: "Enterprise",
    price: 59.99,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "24/7 dedicated support",
      "Advanced DOT compliance tracking with periodic reminders for deadlines",
      "Specialized driver dashboard for increased organization",
      "Custom notifications",
      "539.99 (3 months free)",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center my-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-600">
          Choose the plan that&apos;s right for you
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-x-8">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className="flex flex-col justify-between border-gray-200 shadow-lg relative"
          >
            {plan.badge && (
              <Badge className="absolute top-4 right-4 bg-teal-100 text-teal-800">
                {plan.badge}
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {plan.name}
              </CardTitle>
              <CardDescription className="mt-2 text-gray-500">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-4 flex items-baseline text-5xl font-extrabold text-teal-600">
                ${plan.price}
                <span className="ml-1 text-xl font-medium text-gray-500">
                  /month
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-teal-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-base text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                Get started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
