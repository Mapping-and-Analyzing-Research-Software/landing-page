import React from 'react';
import { Github, Heart, Users, Vote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About MARS
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            MARS is becoming a 501(c)3 US-based non-profit with a commitment to open source 
            and democratic governance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              MARS aims to increase the visibility, accessibility, and understanding of research software 
              across disciplines. We believe that better data about research software leads to better 
              decision-making, more efficient resource allocation, and ultimately, accelerated scientific progress.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              By providing tools that make it easy to discover, archive, and analyze research software, 
              we help researchers, institutions, funders, and developers make informed decisions based on 
              comprehensive data.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our work is guided by principles of openness, transparency, and community governance to ensure 
              that MARS serves the diverse needs of the research software ecosystem.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Open Source & Governance</h3>
            
            <div className="space-y-6">
              <InfoCard 
                icon={<Github />}
                title="Open Source"
                description="Most of the MARS codebase is open source, enabling community contributions and transparency."
              />
              
              <InfoCard 
                icon={<Heart />}
                title="Non-Profit Organization"
                description="MARS is in the process of becoming a 501(c)3 US-based non-profit organization."
              />
              
              <InfoCard 
                icon={<Vote />}
                title="Democratic Governance"
                description="Board members are nominated and elected through a democratic process by core contributors."
              />
              
              <InfoCard 
                icon={<Users />}
                title="Community-Driven"
                description="MARS is built by and for the research software community, with continuous feedback guiding development."
              />
            </div>
            
            <div className="mt-8">
              <a 
                href="https://github.com/mars-project" 
                className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition duration-300"
              >
                <Github size={20} className="mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mr-4 text-indigo-600">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default About;