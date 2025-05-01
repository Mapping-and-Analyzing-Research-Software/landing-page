import React from 'react';
import { Github, Mail, MapPin, Briefcase, Calendar } from 'lucide-react';

interface TeamMember {
  name: string;
  title?: string;
  joinDate: string;
  github: string;
  email?: string;
  dayJob: string;
  location: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sam Schwartz, PhD",
    title: "Sam Schwartz",
    joinDate: "March 30, 2025",
    github: "samuel-schwartz",
    email: "samuel.d.schwartz@gmail.com",
    dayJob: "Professor in the Universities of Wisconsin System",
    location: "Wisconsin, USA",
  },
  {
    name: "Anthony Dario",
    joinDate: "March 30, 2025",
    github: "AnthonyDario",
    dayJob: "PhD candidate, University of Oregon",
    location: "Oregon, USA",
  },
  {
    name: "Guy Pavlov",
    joinDate: "March 31, 2025",
    github: "gpavlov2016",
    dayJob: "20+ years as a {AI Freelancer, Engineering Manager, Startup Cofounder}",
    location: "Ontario, Canada",
  },
  {
    name: "Boris Veytsman, PhD",
    title: "Boris Veytsman",
    joinDate: "April 7, 2025",
    github: "borisveytsman",
    dayJob: "Researcher at George Mason University",
    location: "Washington DC Metro, USA",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Martians
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            MARS is nothing without Martians. Here is MARS' dedicated team of core maintainers, ordered by join date.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  {member.title && member.title !== member.name && (
                    <p className="text-slate-600 mb-2">{member.title}</p>
                  )}
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center text-slate-600">
                      <Calendar size={16} className="mr-2" />
                      <span>Joined {member.joinDate}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600">
                      <Github size={16} className="mr-2" />
                      <a 
                        href={`https://github.com/${member.github}`}
                        className="text-indigo-600 hover:text-indigo-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{member.github}
                      </a>
                    </div>
                    
                    {member.email && (
                      <div className="flex items-center text-slate-600">
                        <Mail size={16} className="mr-2" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}
                    
                    <div className="flex items-center text-slate-600">
                      <Briefcase size={16} className="mr-2" />
                      <span>{member.dayJob}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600">
                      <MapPin size={16} className="mr-2" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;