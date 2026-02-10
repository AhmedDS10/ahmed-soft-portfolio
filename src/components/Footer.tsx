import { Code2, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const footerLinks = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'من أنا', href: '#about' },
  { name: 'المهارات', href: '#skills' },
  { name: 'المشاريع', href: '#projects' },
  { name: 'الخدمات', href: '#services' },
  { name: 'المدونة', href: '#blog' },
  { name: 'تواصل', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/80 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow transition-all duration-300">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Ahmed<span className="text-primary">Soft</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Ahmed Soft. جميع الحقوق محفوظة.
            </p>
            <p className="flex items-center gap-1">
              صُنع بـ <Heart className="w-4 h-4 text-destructive fill-destructive" /> في العراق
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
