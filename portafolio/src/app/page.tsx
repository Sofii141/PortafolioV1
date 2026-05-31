import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { FullPage } from "@/components/FullPage";

export default function Home() {
  return (
    <FullPage>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </FullPage>
  );
}
