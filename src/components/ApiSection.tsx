import React from 'react';
import { Code, Terminal, Copy, ExternalLink } from 'lucide-react';

const ApiSection = () => {
  return (
    <section id="api" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Developer API Access
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Connect directly to our well-documented APIs to integrate MARS data into your own applications and analysis workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">RESTful API</h3>
            <p className="text-slate-300 mb-6">
              Our comprehensive API gives you programmatic access to all MARS functionality, 
              allowing you to integrate research software data into your own systems and workflows.
            </p>
            
            <div className="space-y-6">
              <ApiFeature 
                icon={<Terminal className="text-indigo-400" />}
                title="Comprehensive Endpoints"
                description="Access all MARS features through our RESTful API endpoints"
              />
              
              <ApiFeature 
                icon={<Code className="text-indigo-400" />}
                title="Multiple Response Formats"
                description="Get data in JSON, CSV, and other formats to suit your needs"
              />
              
              <ApiFeature 
                icon={<ExternalLink className="text-indigo-400" />}
                title="Detailed Documentation"
                description="Extensive documentation with examples for all endpoints"
              />
            </div>
            
            <div className="mt-8">
              <a 
                href="#documentation" 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                API Documentation
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden bg-slate-800 shadow-xl">
              <div className="flex items-center justify-between bg-slate-700 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-400 text-sm">MARS API Example</div>
                <div className="flex items-center">
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              
              <div className="p-4 text-slate-300 font-mono text-sm overflow-x-auto">
                <pre className="whitespace-pre">
{`// Example: Fetch software by ID
const fetchSoftware = async (id) => {
  const response = await fetch(
    \`https://api.mars-project.org/v1/software/\${id}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_KEY}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  const data = await response.json();
  return data;
};

// Example: Search software by criteria
const searchSoftware = async (criteria) => {
  const params = new URLSearchParams(criteria);
  
  const response = await fetch(
    \`https://api.mars-project.org/v1/software/search?\${params}\`,
    {
      headers: {
        'Authorization': \`Bearer \${API_KEY}\`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  const data = await response.json();
  return data;
};`}
                </pre>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="rounded-lg overflow-hidden bg-slate-800 shadow-xl">
                <div className="flex items-center justify-between bg-slate-700 px-4 py-2">
                  <div className="text-slate-400 text-sm">Example Response</div>
                  <div className="flex items-center">
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 text-slate-300 font-mono text-sm overflow-x-auto">
                  <pre className="whitespace-pre">
{`{
  "id": "sw-12345",
  "name": "SciAnalyzer",
  "repository": "https://github.com/example/scianalyzer",
  "description": "A tool for analyzing scientific data",
  "licenses": ["MIT"],
  "citations": 123,
  "contributors": [
    {
      "id": "person-789",
      "name": "Jane Doe",
      "orcid": "0000-0001-2345-6789",
      "affiliation": "Example University"
    },
    // More contributors...
  ],
  "relatedPapers": [
    {
      "id": "paper-456",
      "title": "SciAnalyzer: A New Tool for Scientific Data Analysis",
      "doi": "10.1234/example.5678",
      "citations": 45
    },
    // More papers...
  ],
  "metrics": {
    "stars": 567,
    "forks": 123,
    "openIssues": 45,
    "lastUpdated": "2024-10-15T14:32:21Z"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ApiFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ApiFeature = ({ icon, title, description }: ApiFeatureProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default ApiSection;