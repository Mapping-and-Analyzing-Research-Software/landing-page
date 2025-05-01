import React, { useState } from 'react';
import { Search, Database, BarChart3, Code, FileText, FilePlus2, Share2, LineChart } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('discover');

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Research Software Analysis
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            MARS provides powerful tools to discover, archive, and analyze research software 
            without writing complex code.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-slate-200">
          <FeatureTab 
            id="discover"
            label="Discovery Platform"
            icon={<Search size={18} />}
            active={activeTab === 'discover'}
            onClick={() => setActiveTab('discover')}
          />
          <FeatureTab 
            id="archive"
            label="Archive Service"
            icon={<Database size={18} />}
            active={activeTab === 'archive'}
            onClick={() => setActiveTab('archive')}
          />
          <FeatureTab 
            id="analyze"
            label="Analysis Toolkit"
            icon={<BarChart3 size={18} />}
            active={activeTab === 'analyze'}
            onClick={() => setActiveTab('analyze')}
          />
          <FeatureTab 
            id="api"
            label="API Access"
            icon={<Code size={18} />}
            active={activeTab === 'api'}
            onClick={() => setActiveTab('api')}
          />
        </div>

        {/* Feature Content */}
        <div className="bg-slate-50 rounded-xl p-6 md:p-8 lg:p-10 shadow-sm">
          {activeTab === 'discover' && (
            <FeatureContent
              title="Find Research Software Across Disciplines"
              description="MARS provides powerful search and filtering capabilities to discover research software across multiple disciplines, institutions, and sectors."
              image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              features={[
                { icon: <Search />, title: "Advanced Search", description: "Find software using complex criteria and filters" },
                { icon: <FileText />, title: "Metadata Extraction", description: "Automatically extract and index metadata from research software" },
                { icon: <Share2 />, title: "Relationship Mapping", description: "Visualize connections between software, papers, and researchers" },
              ]}
            />
          )}
          
          {activeTab === 'archive' && (
            <FeatureContent
              title="Preserve & Access Research Software Data"
              description="Store, organize, and retrieve comprehensive data about research software, ensuring long-term accessibility and preservation."
              image="https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              features={[
                { icon: <Database />, title: "Secure Storage", description: "Reliably store research software metadata and metrics" },
                { icon: <FilePlus2 />, title: "Version Control", description: "Track changes and evolution of software over time" },
                { icon: <Share2 />, title: "Bulk Export", description: "Export data in multiple formats for offline analysis" },
              ]}
            />
          )}
          
          {activeTab === 'analyze' && (
            <FeatureContent
              title="Measure & Benchmark Research Impact"
              description="Analyze research software data to measure impact, track trends, and benchmark against peers without writing complex code."
              image="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              features={[
                { icon: <BarChart3 />, title: "Pre-built Dashboards", description: "Access ready-to-use visualizations for common metrics" },
                { icon: <LineChart />, title: "Custom Reports", description: "Create tailored reports for specific research questions" },
                { icon: <Share2 />, title: "Benchmarking Tools", description: "Compare your research software against peers and industry standards" },
              ]}
            />
          )}
          
          {activeTab === 'api' && (
            <FeatureContent
              title="Integrate MARS Data Into Your Systems"
              description="Connect directly to our well-documented APIs to power your own systems and analysis tools."
              image="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              features={[
                { icon: <Code />, title: "RESTful APIs", description: "Well-documented endpoints for all MARS functionality" },
                { icon: <Database />, title: "Data Exports", description: "Export data in JSON, CSV, and other formats" },
                { icon: <Share2 />, title: "Authentication", description: "Secure access with API keys and OAuth integration" },
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
};

interface FeatureTabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FeatureTab = ({ id, label, icon, active, onClick }: FeatureTabProps) => {
  return (
    <button
      className={`flex items-center px-5 py-3 font-medium text-sm mr-2 mb-2 rounded-t-lg transition-colors duration-300 ${
        active 
          ? 'bg-slate-50 text-indigo-600 border-b-2 border-indigo-600' 
          : 'text-slate-600 hover:text-indigo-600'
      }`}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  );
};

interface FeatureContentProps {
  title: string;
  description: string;
  image: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const FeatureContent = ({ title, description, image, features }: FeatureContentProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 mb-8">{description}</p>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-1">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="hidden lg:block">
        <img 
          src={image} 
          alt={title} 
          className="rounded-xl shadow-lg object-cover w-full h-[400px]"
        />
      </div>
    </div>
  );
};

export default Features;