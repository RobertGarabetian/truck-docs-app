"use client";

const testimonials = [
  {
    name: "John D.",
    role: "Owner-Operator",
    content:
      "TruckDocs has been a game-changer for my business. I used to struggle keeping track of all my paperwork, but now everything is organized and easily accessible.",
  },
  {
    name: "Sarah M.",
    role: "Fleet Manager",
    content:
      "Managing documentation for our entire fleet has never been easier. TruckDocs saves us time and helps us stay compliant with regulations.",
  },
  {
    name: "Mike R.",
    role: "Independent Trucker",
    content:
      "The deadline reminders have saved me from late fees more than once. It's like having a personal assistant keeping me on track.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
