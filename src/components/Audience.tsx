import React from 'react';
import { Users, Building, Landmark, Code, LightbulbIcon, TrendingUp } from 'lucide-react';

const Audience = () => {
  return (
    <section id="audience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who MARS Is For
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            MARS serves a diverse community of researchers, organizations, and institutions interested in 
            understanding the impact of research software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AudienceCard 
            icon={<Users className="text-indigo-600" size={32} />}
            title="Academic Researchers"
            description="Researchers seeking to analyze research software across disciplines, identify trends, and discover potential collaborations."
            useCases={[
              "Tracking software usage and citations in publications",
              "Discovering related research software across institutions",
              "Analyzing research software evolution over time"
            ]}
            primaryColor="indigo"
          />
          
          <AudienceCard 
            icon={<Building className="text-purple-600" size={32} />}
            title="Industry Watchers"
            description="Professionals monitoring research software development to identify emerging technologies and innovation opportunities."
            useCases={[
              "Identifying emerging trends in research software",
              "Monitoring research software with commercial potential",
              "Tracking technology transfer from academia to industry"
            ]}
            primaryColor="purple"
          />
          
          <AudienceCard 
            icon={<Landmark className="text-blue-600" size={32} />}
            title="Government Agencies"
            description="Agencies evaluating research investments, tracking outcomes, and planning future funding priorities."
            useCases={[
              "Measuring research outcomes from funded projects",
              "Evaluating software sustainability and reuse",
              "Planning strategic investments in research infrastructure"
            ]}
            primaryColor="blue"
          />
          
          <AudienceCard 
            icon={<LightbulbIcon className="text-yellow-600" size={32} />}
            title="Software Foundations"
            description="Organizations supporting open source research software seeking to measure impact and demonstrate value."
            useCases={[
              "Benchmarking software adoption and community growth",
              "Tracking cross-disciplinary software applications",
              "Demonstrating impact for stakeholders and funders"
            ]}
            primaryColor="yellow"
          />
          
          <AudienceCard 
            icon={<TrendingUp className="text-emerald-600" size={32} />}
            title="Universities & Institutions"
            description="Research institutions looking to benchmark their research software output and impact against peers."
            useCases={[
              "Measuring institutional research software output",
              "Comparing software impact against peer institutions",
              "Identifying internal collaboration opportunities"
            ]}
            primaryColor="emerald"
          />
          
          <AudienceCard 
            icon={<Code className="text-red-600" size={32} />}
            title="Software Developers"
            description="Developers seeking to understand usage patterns and opportunities to contribute to research software."
            useCases={[
              "Finding active research software projects needing contributors",
              "Analyzing technical approaches across similar software",
              "Discovering potential applications of research software"
            ]}
            primaryColor="red"
          />
        </div>
      </div>
    </section>
  );
};

interface AudienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  useCases: string[];
  primaryColor: string;
}

const AudienceCard = ({ icon, title, description, useCases, primaryColor }: AudienceCardProps) => {
  const colorMap: Record<string, string> = {
    indigo: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100',
    purple: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    blue: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    yellow: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
    emerald: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
    red: 'bg-red-50 border-red-200 hover:bg-red-100',
  };

  return (
    <div className={`rounded-xl p-6 border ${colorMap[primaryColor]} transition duration-300`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      
      <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase">Common Use Cases</h4>
      <ul className="space-y-2">
        {useCases.map((useCase, index) => (
          <li key={index} className="flex items-start">
            <span className={`inline-block w-2 h-2 rounded-full bg-${primaryColor}-500 mt-1.5 mr-2 flex-shrink-0`}></span>
            <span className="text-slate-700 text-sm">{useCase}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Audience;