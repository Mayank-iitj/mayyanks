import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import MetricsSection from '@/components/sections/metrics-section';
import TeamSection from '@/components/sections/team-section';
import AwardsSection from '@/components/sections/awards-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ServicesSection from '@/components/sections/services-section';
import CtaSection from '@/components/sections/cta-section';
import ProjectsSection from '@/components/sections/projects-section';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <MetricsSection />
      <TeamSection />
      <AwardsSection />
      <TestimonialsSection />
      <ServicesSection />
      <CtaSection />
      <ProjectsSection />
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}