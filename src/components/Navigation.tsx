import React from 'react';

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CERTIFICATIONS', id: 'certifications' },
    { name: 'EDUCATION', id: 'education' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-primary"
          >
            Meghana Keetha
          </button>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="nav-link font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;