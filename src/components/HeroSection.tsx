import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, MessageCircle, FolderOpen } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/ahmed-profile.jpg';

const titles = [
  'مهندس تقنيات الحاسوب',
  'مطور برمجيات',
  'خبير الذكاء الاصطناعي',
  'متخصص الأمن السيبراني',
];

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < title.length) {
            setDisplayText(title.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTitle((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-right order-2 lg:order-1">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in-up">
              أهلاً بك، أنا
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              أحمد <span className="text-gradient">سوفت</span>
            </h1>

            <div className="h-12 md:h-14 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                {displayText}
                <span className="text-primary animate-pulse">|</span>
              </span>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 lg:ml-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              أحول الأفكار المعقدة إلى حلول برمجية ذكية وآمنة، مع خبرة واسعة في تطوير الأنظمة المتكاملة والذكاء الاصطناعي وحماية البيانات.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="gap-2 glow text-base">
                <MessageCircle className="w-5 h-5" />
                تواصل معي
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-primary/50 text-primary hover:bg-primary/10 text-base">
                <FolderOpen className="w-5 h-5" />
                مشاهدة أعمالي
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-strong">
                <img
                  src={profileImage}
                  alt="أحمد سوفت"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse-glow" style={{ transform: 'scale(1.1)' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">اكتشف المزيد</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
