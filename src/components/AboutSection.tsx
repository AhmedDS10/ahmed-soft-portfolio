import { useEffect, useRef } from 'react';
import { Code, Brain, Shield, Server, Award, Users, FolderGit2 } from 'lucide-react';

const stats = [
  { icon: FolderGit2, value: '+50', label: 'مشروع مكتمل' },
  { icon: Users, value: '+30', label: 'عميل سعيد' },
  { icon: Award, value: '+10', label: 'شهادة معتمدة' },
  { icon: Code, value: '+8', label: 'سنوات خبرة' },
];

const expertise = [
  {
    icon: Code,
    title: 'تطوير البرمجيات',
    description: 'خبرة واسعة في لغات Python, JavaScript, C++, Java مع إتقان أطر العمل الحديثة',
  },
  {
    icon: Brain,
    title: 'الذكاء الاصطناعي',
    description: 'بناء نماذج Machine Learning و Deep Learning و NLP لحل المشاكل المعقدة',
  },
  {
    icon: Shield,
    title: 'الأمن السيبراني',
    description: 'اختبار الاختراق وتدقيق الأمان وحماية الأنظمة من التهديدات المتطورة',
  },
  {
    icon: Server,
    title: 'البنية التحتية',
    description: 'إدارة Cloud و DevOps والشبكات مع خبرة في Docker و Kubernetes و AWS',
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" className="py-20 md:py-32 bg-card/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <span className="text-primary font-mono text-sm mb-2 block">من أنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            خبرة تقنية تزيد عن <span className="text-gradient">8 سنوات</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            في بناء المستقبل الرقمي
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal opacity-0 glass rounded-2xl p-6 text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className="reveal opacity-0 glass rounded-2xl p-6 md:p-8 card-hover group"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:glow transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
