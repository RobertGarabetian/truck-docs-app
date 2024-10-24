"use client";
import { Truck, Clock, FileText, CheckCircle } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Benefits for Truckers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Truck className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              More Time on the Road
            </h3>
            <p className="text-gray-600">
              Spend less time managing paperwork and more time driving.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Avoid Costly Delays</h3>
            <p className="text-gray-600">
              Never be held up due to missing or expired documents.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FileText className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Simplified Audits</h3>
            <p className="text-gray-600">
              Breeze through audits with organized documents.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Peace of Mind</h3>
            <p className="text-gray-600">
              Rest easy knowing your documents are secure and up-to-date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
