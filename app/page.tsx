import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Projects from "@/components/projects"
import Hobbies from "@/components/hobbies"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
