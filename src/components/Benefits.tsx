import React from 'react';
import { CheckCircle2, XCircle, Brain, Code, BarChart, Clock } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose MARS?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            MARS streamlines the process of discovering, archiving, and analyzing research software data, 
            saving you time and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Key Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>
            
            <div className="space-y-8">
              <BenefitItem 
                icon={<Brain className="text-purple-600" />}
                title="No Coding Required"
                description="Use our intuitive interface to perform complex analyses without writing a single line of code."
              />
              
              <BenefitItem 
                icon={<Code className="text-indigo-600" />}
                title="API Access for Developers"
                description="For those who prefer to code, connect directly to our well-documented APIs to power your own systems."
              />
              
              <BenefitItem 
                icon={<BarChart className="text-blue-600" />}
                title="Comprehensive Analytics"
                description="Access pre-built dashboards and create custom visualizations to answer your specific questions."
              />
              
              <BenefitItem 
                icon={<Clock className="text-emerald-600" />}
                title="Save Time & Resources"
                description="Eliminate the need to manually gather data from multiple sources or develop custom analysis code."
              />
            </div>
          </div>
          
          {/* Comparison Table */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">MARS vs. Alternatives</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4 text-left text-slate-700 font-semibold border-b border-slate-200"></th>
                    <th className="p-4 text-center text-indigo-700 font-semibold border-b border-slate-200">MARS</th>
                    <th className="p-4 text-center text-slate-700 font-semibold border-b border-slate-200">Traditional Methods</th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow 
                    feature="Unified Platform"
                    marsHas={true}
                    traditionalHas={false}
                    description="Single interface for discovery, archiving, and analysis"
                  />
                  <ComparisonRow 
                    feature="No Coding Required"
                    marsHas={true}
                    traditionalHas={false}
                    description="Perform analysis without writing code"
                  />
                  <ComparisonRow 
                    feature="Pre-built Visualizations"
                    marsHas={true}
                    traditionalHas={false}
                    description="Ready-to-use dashboards and reports"
                  />
                  <ComparisonRow 
                    feature="Cross-discipline Data"
                    marsHas={true}
                    traditionalHas={false}
                    description="Research software data across multiple disciplines"
                  />
                  <ComparisonRow 
                    feature="API Access"
                    marsHas={true}
                    traditionalHas={true}
                    description="Programmatic access to data"
                  />
                  <ComparisonRow 
                    feature="Time Investment"
                    customMars="Minimal"
                    customTraditional="Significant"
                    description="Time needed to set up and maintain"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

interface ComparisonRowProps {
  feature: string;
  marsHas?: boolean;
  traditionalHas?: boolean;
  customMars?: string;
  customTraditional?: string;
  description: string;
}

const ComparisonRow = ({ 
  feature, 
  marsHas, 
  traditionalHas, 
  customMars, 
  customTraditional,
  description 
}: ComparisonRowProps) => {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50 transition duration-150">
      <td className="p-4 text-slate-700">
        <div className="font-medium">{feature}</div>
        <div className="text-sm text-slate-500">{description}</div>
      </td>
      <td className="p-4 text-center">
        {customMars ? (
          <span className="text-indigo-600 font-medium">{customMars}</span>
        ) : marsHas ? (
          <CheckCircle2 className="text-emerald-500 mx-auto" size={20} />
        ) : (
          <XCircle className="text-red-500 mx-auto" size={20} />
        )}
      </td>
      <td className="p-4 text-center">
        {customTraditional ? (
          <span className="text-slate-600 font-medium">{customTraditional}</span>
        ) : traditionalHas ? (
          <CheckCircle2 className="text-emerald-500 mx-auto" size={20} />
        ) : (
          <XCircle className="text-red-500 mx-auto" size={20} />
        )}
      </td>
    </tr>
  );
};

export default Benefits;