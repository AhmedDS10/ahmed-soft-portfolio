import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    label: 'الهاتف',
    value: '07709693905',
    href: 'https://wa.me/9647709693905',
    isWhatsApp: true,
  },
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'ahmedprosoft2013@gmail.com',
    href: 'mailto:ahmedprosoft2013@gmail.com',
  },
  {
    icon: MapPin,
    label: 'الموقع',
    value: 'العراق',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'تم إرسال رسالتك بنجاح!',
      description: 'سأتواصل معك في أقرب وقت ممكن.',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <span className="text-primary font-mono text-sm mb-2 block">تواصل معي</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            لنبدأ <span className="text-gradient">مشروعك</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            هل لديك مشروع أو فكرة؟ تواصل معي وسأساعدك في تحقيقها
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">معلومات التواصل</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow transition-all duration-300">
                    {info.isWhatsApp ? (
                      <MessageCircle className="w-5 h-5 text-primary" />
                    ) : (
                      <info.icon className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="text-foreground font-medium" dir="ltr">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">تابعني على</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    الاسم
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="اسمك الكامل"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background/50"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  الموضوع
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="موضوع الرسالة"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  الرسالة
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  required
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'جاري الإرسال...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    إرسال الرسالة
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
