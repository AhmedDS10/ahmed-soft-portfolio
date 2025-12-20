import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>أحمد سوفت | مهندس تقنيات الحاسوب ومطور برمجيات</title>
        <meta
          name="description"
          content="أحول الأفكار المعقدة إلى حلول برمجية ذكية وآمنة. خبرة واسعة في تطوير البرمجيات والذكاء الاصطناعي والأمن السيبراني."
        />
        <meta
          name="keywords"
          content="أحمد سوفت, مطور برمجيات, مهندس حاسوب, الذكاء الاصطناعي, الأمن السيبراني, تطوير ويب, Python, JavaScript"
        />
        <meta name="author" content="أحمد سوفت" />
        <meta property="og:title" content="أحمد سوفت | مهندس تقنيات الحاسوب" />
        <meta
          property="og:description"
          content="أحول الأفكار المعقدة إلى حلول برمجية ذكية وآمنة."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="أحمد سوفت | مهندس تقنيات الحاسوب" />
        <meta
          name="twitter:description"
          content="أحول الأفكار المعقدة إلى حلول برمجية ذكية وآمنة."
        />
        <link rel="canonical" href="https://ahmedds.us" />
      </Helmet>

      <div className="min-h-screen" dir="rtl">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
