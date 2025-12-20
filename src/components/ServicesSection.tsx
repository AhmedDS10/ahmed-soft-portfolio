import { useEffect, useRef } from 'react';
import { Code2, Shield, Brain, Server, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code2,
    title: 'تطوير الحلول البرمجية',
    description: 'تصميم وتطوير تطبيقات ويب ومحمول مخصصة تلبي احتياجات عملك بأحدث التقنيات',
    features: ['تطبيقات ويب تفاعلية', 'واجهات برمجية REST', 'أنظمة إدارة محتوى', 'تطبيقات محمولة'],
  },
  {
    icon: Shield,
    title: 'استشارات الأمن السيبراني',
    description: 'تقييم وتعزيز الوضع الأمني لمؤسستك وحماية بياناتك من التهديدات المتطورة',
    features: ['اختبار الاختراق', 'تدقيق أمني شامل', 'تدريب الموظفين', 'استجابة للحوادث'],
  },
  {
    icon: Brain,
    title: 'حلول الذكاء الاصطناعي',
    description: 'تنفيذ حلول AI و ML مخصصة لتحسين الكفاءة واتخاذ قرارات أفضل مبنية على البيانات',
    features: ['تحليل البيانات', 'أتمتة العمليات', 'الدردشة الآلية', 'التنبؤ والتوقع'],
  },
  {
    icon: Server,
    title: 'إدارة البنية التحتية',
    description: 'إعداد وإدارة البنية التحتية السحابية والشبكات لضمان أداء عالي وموثوقية',
    features: ['استضافة سحابية', 'DevOps و CI/CD', 'مراقبة الأداء', 'النسخ الاحتياطي'],
  },
];

export function ServicesSection() {
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
    <section id="services" className="py-20 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <span className="text-primary font-mono text-sm mb-2 block">خدماتي</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            خدمات <span className="text-gradient">احترافية</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            حلول تقنية شاملة لتلبية جميع احتياجات عملك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal opacity-0 glass rounded-2xl p-6 md:p-8 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="gap-2 group/btn border-primary/50 text-primary hover:bg-primary/10">
                اطلب الخدمة
                <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
