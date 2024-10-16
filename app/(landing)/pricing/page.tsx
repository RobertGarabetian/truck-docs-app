// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function PricingPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Simple, transparent pricing
//           </h2>
//           <p className="mt-4 text-xl text-gray-600">
//             Choose the plan that's right for you
//           </p>
//         </div>
//         <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
//           {pricingPlans.map((plan) => (
//             <Card
//               key={plan.name}
//               className="flex flex-col justify-between border-gray-200 shadow-lg"
//             >
//               <CardHeader>
//                 <CardTitle className="text-2xl font-bold text-gray-900">
//                   {plan.name}
//                 </CardTitle>
//                 <CardDescription className="mt-2 text-gray-500">
//                   {plan.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="mt-4 flex items-baseline text-5xl font-extrabold text-teal-600">
//                   ${plan.price}
//                   <span className="ml-1 text-xl font-medium text-gray-500">
//                     /month
//                   </span>
//                 </div>
//                 <ul className="mt-6 space-y-4">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex items-start">
//                       <div className="flex-shrink-0">
//                         <svg
//                           className="h-6 w-6 text-teal-500"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-base text-gray-700">{feature}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
//                   Get started
//                 </Button>
//               </CardFooter>
//               {plan.badge && (
//                 <Badge className="absolute top-0 right-0 mt-4 mr-4 bg-teal-100 text-teal-800">
//                   {plan.badge}
//                 </Badge>
//               )}
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const pricingPlans = [
//   {
//     name: "Basic",
//     price: 9,
//     description: "Perfect for individuals and small projects",
//     features: ["1 user", "10 projects", "5GB storage", "Basic support"],
//   },
//   {
//     name: "Pro",
//     price: 29,
//     description: "Great for growing teams and businesses",
//     features: [
//       "5 users",
//       "Unlimited projects",
//       "50GB storage",
//       "Priority support",
//       "Advanced analytics",
//     ],
//     badge: "Popular",
//   },
//   {
//     name: "Enterprise",
//     price: 99,
//     description: "For large organizations with complex needs",
//     features: [
//       "Unlimited users",
//       "Unlimited projects",
//       "1TB storage",
//       "24/7 dedicated support",
//       "Custom integrations",
//       "On-premise deployment",
//     ],
//   },
// ];
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
    price: 9,
    description: "Perfect for individuals and small projects",
    features: ["1 user", "10 projects", "5GB storage", "Basic support"],
  },
  {
    name: "Pro",
    price: 29,
    description: "Great for growing teams and businesses",
    features: [
      "5 users",
      "Unlimited projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
    ],
    badge: "Popular",
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "1TB storage",
      "24/7 dedicated support",
      "Custom integrations",
      "On-premise deployment",
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
          Choose the plan that's right for you
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
