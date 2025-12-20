import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'لغات البرمجة',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 82 },
      { name: 'Go', level: 75 },
    ],
  },
  {
    title: 'تطوير الويب',
    skills: [
      { name: 'React', level: 94 },
      { name: 'Node.js', level: 90 },
      { name: 'Django', level: 88 },
      { name: 'Flask', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    title: 'الذكاء الاصطناعي',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 88 },
      { name: 'Scikit-learn', level: 92 },
      { name: 'OpenAI API', level: 95 },
      { name: 'NLP', level: 85 },
      { name: 'Computer Vision', level: 80 },
    ],
  },
  {
    title: 'الأمن السيبراني',
    skills: [
      { name: 'Kali Linux', level: 90 },
      { name: 'Metasploit', level: 85 },
      { name: 'Wireshark', level: 88 },
      { name: 'Nmap', level: 92 },
      { name: 'OWASP', level: 90 },
      { name: 'Burp Suite', level: 85 },
    ],
  },
  {
    title: 'البنية التحتية',
    skills: [
      { name: 'Docker', level: 92 },
      { name: 'Kubernetes', level: 85 },
      { name: 'AWS', level: 88 },
      { name: 'Linux', level: 95 },
      { name: 'CI/CD', level: 90 },
      { name: 'Terraform', level: 78 },
    ],
  },
  {
    title: 'قواعد البيانات',
    skills: [
      { name: 'PostgreSQL', level: 92 },
      { name: 'MongoDB', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'MySQL', level: 90 },
      { name: 'Elasticsearch', level: 80 },
      { name: 'Firebase', level: 85 },
    ],
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              (bar as HTMLElement).style.width = width + '%';
            });
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
    <section id="skills" className="py-20 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <span className="text-primary font-mono text-sm mb-2 block">المهارات</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            مهاراتي <span className="text-gradient">التقنية</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            تقنيات وأدوات أتقنها لتقديم أفضل الحلول البرمجية
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="reveal opacity-0 glass rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                        data-width={skill.level}
                        style={{
                          width: '0%',
                          transitionDelay: `${skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
