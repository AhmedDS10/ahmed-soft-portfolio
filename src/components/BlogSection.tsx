import { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'مستقبل الذكاء الاصطناعي في الأمن السيبراني',
    excerpt: 'كيف يمكن للذكاء الاصطناعي أن يحدث ثورة في مجال حماية الأنظمة والشبكات من التهديدات المتطورة. نستعرض أحدث التقنيات والأساليب المستخدمة في هذا المجال.',
    date: '2024-01-15',
    readTime: '8 دقائق',
    category: 'الذكاء الاصطناعي',
  },
  {
    id: 2,
    title: 'أفضل ممارسات DevOps للمشاريع الحديثة',
    excerpt: 'دليل شامل لتطبيق منهجية DevOps في مشاريعك البرمجية لتحقيق أعلى مستويات الكفاءة والسرعة في التطوير والنشر.',
    date: '2024-01-10',
    readTime: '6 دقائق',
    category: 'تطوير البرمجيات',
  },
  {
    id: 3,
    title: 'حماية تطبيقات الويب من ثغرات OWASP',
    excerpt: 'شرح مفصل لأهم 10 ثغرات أمنية في تطبيقات الويب وكيفية الحماية منها بأفضل الممارسات والأدوات المتاحة.',
    date: '2024-01-05',
    readTime: '10 دقائق',
    category: 'الأمن السيبراني',
  },
];

export function BlogSection() {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="py-20 md:py-32 bg-card/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <span className="text-primary font-mono text-sm mb-2 block">المدونة</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            أحدث <span className="text-gradient">المقالات</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            مقالات وتدوينات تقنية حول البرمجة والأمن والذكاء الاصطناعي
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="reveal opacity-0 glass rounded-2xl p-6 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category */}
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Read More */}
              <Button variant="ghost" className="gap-2 p-0 h-auto text-primary hover:bg-transparent group/btn">
                اقرأ المزيد
                <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
