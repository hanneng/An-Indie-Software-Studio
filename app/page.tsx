import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Notes } from "@/components/Notes";
import { Roadmap } from "@/components/Roadmap";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Projects />
        <Notes />
        <Roadmap />
        <About />
      </main>
      <Footer />
    </>
  );
}
