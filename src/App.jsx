import React, { useState, useEffect } from 'react';
import { BarChart3, Database, Github, Linkedin, Mail, Phone, ExternalLink, Code, TrendingUp, FileSpreadsheet } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Olist E-Commerce Analytics",
      description: "End-to-end data analytics pipeline using SQL Server, Python, Power BI, and Streamlit. Analyzed 100K+ orders, built interactive dashboards, and delivered insights on customer behavior and delivery efficiency.",
      tech: ["SQL Server", "Python", "Power BI", "Streamlit", "Pandas", "Plotly"],
      github: "https://github.com/Mohamed3taa/Olist_Ecommerce_Project",
      highlights: ["100K+ Orders Analyzed", "10+ Interactive Visualizations", "Live Streamlit Dashboard"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      title: "SuperMarket Analysis",
      description: "Complete data analysis pipeline from data generation to interactive dashboards. Built SQL databases, performed Python analysis, and created comprehensive Power BI dashboards with advanced features.",
      tech: ["SQL Server", "Python", "Power BI", "Mockaroo", "Streamlit"],
      github: "https://github.com/Mohamed3taa/SuperMarket_Analysis",
      highlights: ["Full Data Lifecycle", "Multi-page Dashboard", "Customer Segmentation"],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Ballon d'Or Winners Analysis",
      description: "Comprehensive analysis of Ballon d'Or award winners, exploring trends, patterns, and insights from football's most prestigious individual honor.",
      tech: ["Python", "Data Visualization", "Statistical Analysis"],
      github: "https://github.com/Mohamed3taa/BallonDOr-Winners-Analysis",
      highlights: ["Historical Trends", "Winner Patterns", "Statistical Insights"],
      icon: <Database className="w-6 h-6" />
    }
  ];

  const skills = [
    { name: "SQL", level: 90, icon: <Database className="w-5 h-5" /> },
    { name: "Python", level: 85, icon: <Code className="w-5 h-5" /> },
    { name: "Power BI", level: 90, icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Excel", level: 85, icon: <FileSpreadsheet className="w-5 h-5" /> },
    { name: "Tableau", level: 80, icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse bottom-20 right-20" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-slate-900/50 backdrop-blur-lg border-b border-purple-500/20 sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mohammad Ataa
            </h1>
            <div className="flex gap-6">
              {['home', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-all hover:text-purple-400 ${
                    activeSection === section ? 'text-purple-400 border-b-2 border-purple-400' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <div className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl">
                MA
              </div>
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Mohammad Ataa Elbassal
              </h1>
              <p className="text-3xl text-purple-300 mb-6">Data Analyst</p>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Transforming raw data into actionable insights through advanced analytics, 
                visualization, and storytelling. Specialized in SQL, Python, Power BI, and creating 
                interactive dashboards that drive business decisions.
              </p>
            </div>

            <div className="flex gap-6 justify-center mt-12">
              <a 
                href="https://github.com/Mohamed3taa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-purple-600 px-8 py-4 rounded-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/mohammadataa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 px-8 py-4 rounded-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <div className="relative z-10 container mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg transition-all font-semibold"
                >
                  <Github className="w-5 h-5" />
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <div className="relative z-10 container mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="mb-8 bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-purple-400">
                      {skill.icon}
                    </div>
                    <span className="text-xl font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-purple-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div className="relative z-10 container mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-10 border border-purple-500/20">
              <p className="text-xl text-center text-gray-300 mb-10 leading-relaxed">
                I'm always interested in hearing about new opportunities and projects. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:mohammadataaelbassal@gmail.com"
                  className="flex items-center gap-4 bg-slate-700/50 hover:bg-purple-600/30 p-6 rounded-xl transition-all group border border-purple-500/20 hover:border-purple-500/50"
                >
                  <Mail className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg font-semibold">mohammadataaelbassal@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:01152529479"
                  className="flex items-center gap-4 bg-slate-700/50 hover:bg-purple-600/30 p-6 rounded-xl transition-all group border border-purple-500/20 hover:border-purple-500/50"
                >
                  <Phone className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg font-semibold">01152529479</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/mohammadataa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-slate-700/50 hover:bg-purple-600/30 p-6 rounded-xl transition-all group border border-purple-500/20 hover:border-purple-500/50"
                >
                  <Linkedin className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-lg font-semibold">mohammadataa</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/Mohamed3taa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-slate-700/50 hover:bg-purple-600/30 p-6 rounded-xl transition-all group border border-purple-500/20 hover:border-purple-500/50"
                >
                  <Github className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-lg font-semibold">Mohamed3taa</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/50 backdrop-blur-lg border-t border-purple-500/20 py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Mohammad Ataa Elbassal. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}