import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { TeamSection } from "@/components/sections/team-section";
import { Testimonials } from "@/components/sections/testimonials-section";
import { Services } from "@/components/sections/services-section";
import { AwardsSection } from "@/components/sections/awards-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <MetricsSection />
      
      <TeamSection />
      
      <Testimonials />
      
      <Services />
      
      <AwardsSection />
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="contact">
        <CTASection />
      </section>
      
      <Footer />
    </main>
  );
}