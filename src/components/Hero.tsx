import React from 'react';
import { ArrowRight, Search, Database, BarChart3 } from 'lucide-react';
import DataBackgroundAnimation from './DataBackgroundAnimation';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 z-0"></div>
      <DataBackgroundAnimation />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/50 mb-6 border border-indigo-700/30">
            <span className="text-xs font-semibold text-indigo-300">Mapping & Analyzing Research Software</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the Impact of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-purple-600">
              Research Software
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl">
            MARS is a comprehensive platform for discovering, archiving, and analyzing 
            research software data — without writing a single line of code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#get-started"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
            >
              Get Started <ArrowRight size={16} className="ml-2" />
            </a>
            <a 
              href="#learn-more"
              className="px-6 py-3 bg-slate-800 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <FeatureCard 
              icon={<Search className="text-orange-500" />}
              title="Discover"
              description="Find research software across multiple sectors and institutions"
            />
            <FeatureCard 
              icon={<Database className="text-indigo-500" />}
              title="Archive"
              description="Store and retrieve comprehensive data about research software"
            />
            <FeatureCard 
              icon={<BarChart3 className="text-purple-500" />}
              title="Analyze"
              description="Measure KPIs and benchmark against peers without coding"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 transition duration-300 hover:transform hover:-translate-y-1 hover:bg-slate-800">
      <div className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

export default Hero;