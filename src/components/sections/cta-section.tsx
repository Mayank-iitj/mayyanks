import Link from "next/link";

const CtaSection = () => {
  return (
    <section id="contact" className="bg-background py-[7.5rem]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[2.25rem] font-bold uppercase leading-[1.2] tracking-[0.05em] text-foreground">
            PROJECT COLLABORATION
          </h2>
          <h3 className="mt-4 font-display text-2xl font-medium leading-[1.2] text-foreground">
            Let's Build the Future of AI, Together.
          </h3>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            I am actively seeking partnerships on groundbreaking AI/ML projects. If you're looking for an expert to contribute to your team, or have an innovative idea you want to bring to life, let's connect and discuss how we can create impactful solutions.
          </p>
          <Link
            href="/get-a-quote"
            className="mt-8 inline-block rounded-full bg-secondary px-8 py-4 text-base font-medium text-secondary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
          >
            Let's Collaborate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;