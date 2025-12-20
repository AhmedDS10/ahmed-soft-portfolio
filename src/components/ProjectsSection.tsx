import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const categories = ['الكل', 'الذكاء الاصطناعي', 'الأمن السيبراني', 'تطوير الويب'];

const projects = [
  {
    id: 1,
    title: 'نظام كشف التهديدات الأمنية',
    description: 'نظام ذكي يستخدم تقنيات ML لاكتشاف ومنع التهديدات السيبرانية في الوقت الفعلي',
    image: project1,
    category: 'الذكاء الاصطناعي',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    github: 'https://github.com/ahmedsoft/threat-detection',
    demo: '#',
  },
  {
    id: 2,
    title: 'منصة التنبؤ بالأعطال',
    description: 'نظام تعلم آلي للتنبؤ بأعطال المعدات الصناعية قبل حدوثها باستخدام IoT',
    image: project2,
    category: 'الذكاء الاصطناعي',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'MongoDB'],
    github: 'https://github.com/ahmedsoft/predictive-maintenance',
    demo: '#',
  },
  {
    id: 3,
    title: 'تطبيق مراقبة الشبكات السحابية',
    description: 'أداة شاملة لمراقبة وإدارة البنية التحتية السحابية على AWS وGCP',
    image: project3,
    category: 'تطوير الويب',
    technologies: ['Node.js', 'React', 'AWS', 'Docker'],
    github: 'https://github.com/ahmedsoft/cloud-monitor',
    demo: '#',
  },
  {
    id: 4,
    title: 'أداة اختبار الاختراق الآلي',
    description: 'أداة أتمتة لاختبار الاختراق وفحص الثغرات الأمنية في التطبيقات',
    image: project4,
    category: 'الأمن السيبراني',
    technologies: ['Python', 'Kali Linux', 'Metasploit', 'Bash'],
    github: 'https://github.com/ahmedsoft/auto-pentest',
    demo: '#',
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === 'الكل'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 reveal opacity-0">
          <span className="text-primary font-mono text-sm mb-2 block">أعمالي</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            مشاريع <span className="text-gradient">مميزة</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نماذج من المشاريع التي قمت بتطويرها وتنفيذها
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal opacity-0" style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground glow'
                  : 'bg-muted/30 text-muted-foreground hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="reveal opacity-0 group glass rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Category Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      المصدر
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2 flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      معاينة
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
