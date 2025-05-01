import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Research Software Data?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Join the MARS platform to discover, archive, and analyze research software data without writing complex code.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <CTACard 
              title="Academic Users"
              description="Analyze research software trends and find collaboration opportunities"
              buttonText="Get Started"
              bgClass="from-indigo-600 to-indigo-800"
            />
            
            <CTACard 
              title="Organization Users"
              description="Benchmark your research software against peers and track performance"
              buttonText="Learn More"
              bgClass="from-purple-600 to-purple-800"
            />
            
            <CTACard 
              title="API Access"
              description="Connect directly to our APIs to power your own systems"
              buttonText="View Docs"
              bgClass="from-blue-600 to-blue-800"
            />
          </div>
          
          <p className="text-slate-400 mt-10">
            Questions? <a href="#contact" className="text-indigo-300 hover:text-indigo-200 underline">Contact our team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

interface CTACardProps {
  title: string;
  description: string;
  buttonText: string;
  bgClass: string;
}

const CTACard = ({ title, description, buttonText, bgClass }: CTACardProps) => {
  return (
    <div className={`rounded-xl p-6 bg-gradient-to-br ${bgClass} shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-200 mb-6 text-sm">{description}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-white hover:text-slate-100 font-medium text-sm"
      >
        {buttonText} <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

export default CTA;