"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer, Download } from "lucide-react"
import { useRouter } from "next/navigation"

const Resume = () => {
  const router = useRouter()

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // This is a simplified approach - in a real app, you'd link to an actual PDF file
    const link = document.createElement("a")
    link.href = "/resume"
    link.download = "Neha_Rajbhar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Print-only styles */}
      <style jsx global>{`
        @media print {
          nav, .no-print {
            display: none !important;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .resume-container {
            padding: 0;
            margin: 0;
            max-width: 100%;
          }
        }
      `}</style>

      {/* Controls - hidden during print */}
      <div className="fixed top-4 right-4 flex gap-2 z-50 no-print">
        <Button variant="outline" size="sm" onClick={() => router.push("/")} className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <Button variant="outline" size="sm" onClick={handlePrint} className="flex items-center gap-1">
          <Printer className="h-4 w-4" /> Print
        </Button>
        <Button variant="default" size="sm" onClick={handleDownload} className="flex items-center gap-1">
          <Download className="h-4 w-4" /> Download
        </Button>
      </div>

      {/* Resume Content */}
      <div className="resume-container max-w-4xl mx-auto p-8 pt-16 bg-white shadow-lg my-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-700">NEHA RAJBHAR</h1>
          <p className="text-gray-600 mt-2">
            Full-Stack Developer | Cybersecurity Enthusiast | AI Developer | Prompt Engineer
          </p>
          <div className="flex justify-center gap-4 mt-3 text-sm">
            <span>8127688427</span>
            <span>neharajbhar2113@gmail.com</span>
            <span>Neharajbhar</span>
            <span>neharajbharinfo</span>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-purple-200 pb-1 mb-3">SUMMARY</h2>
          <p className="text-gray-700">
            Innovative web developer with expertise in React.js and Node.js, complemented by a strong commitment to
            cybersecurity. Holding certifications such as CCSP and CEH, I aim to integrate secure practices into dynamic
            web solutions. Passionate about merging scalable development with robust security, I strive to create
            resilient and user-friendly applications in the evolving tech landscape.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b-2 border-purple-200 pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>

              <div className="mb-4">
                <h3 className="font-medium">CADDESK IT Solutions (Recent Internship):</h3>
                <p className="text-gray-700">
                  Developed File Hider application using Core Java with encryption and security features.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-medium">Future Intern (Feb 2025):</h3>
                <p className="text-gray-700">Developed AI-powered Android apps; boosted user retention by 15%.</p>
              </div>

              <div className="mb-4">
                <h3 className="font-medium">CodSoft (Feb 2025 – Mar 2025):</h3>
                <p className="text-gray-700">
                  Built AI-based web apps and chatbots; streamlined interactions and cut data processing time by 30%.
                </p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b-2 border-purple-200 pb-1 mb-3">PROJECTS</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">File Hider:</span> Secure file hiding application using Core Java with
                  encryption and user authentication system.
                </li>
                <li>
                  <span className="font-medium">Custom ERP System:</span> Developed a secure ERP using Django,
                  PostgreSQL, and React.js with robust authentication and role-based access.
                </li>
                <li>
                  <span className="font-medium">AI Attendance & Security System:</span> Created a facial recognition
                  system with AI to boost attendance accuracy and strengthen security.
                </li>
                <li>
                  <span className="font-medium">Whack-a-Mole Game:</span> Built an interactive, real-time scoring web
                  game using React.js and Node.js, driving high user engagement.
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b-2 border-purple-200 pb-1 mb-3">
                ACHIEVEMENTS & LEADERSHIP
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Led AI Attendance and Security Model development at The Apollo University Hackathon</li>
                <li>Created "Akshu-AI," a voice-interactive virtual assistant</li>
                <li>Completed internship at CADDESK IT Solutions with Core Java specialization</li>
              </ul>
            </section>
          </div>

          <div>
            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b-2 border-purple-200 pb-1 mb-3">EDUCATION</h2>
              <div className="mb-3">
                <p className="font-medium">The Apollo University</p>
                <p className="text-gray-700">2023 - 2027</p>
              </div>
              <div>
                <p className="font-medium">BLOOMIMG BUDS ACAD</p>
                <p className="text-gray-700">2021 - 2023</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b-2 border-purple-200 pb-1 mb-3">CERTIFICATIONS</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Certified Cloud Security Professional (CCSP)</li>
                <li>AWS Certifications</li>
                <li>Google Associate Cloud Engineer</li>
                <li>Certified Ethical Hacker (CEH)</li>
                <li>IBM AI Engineering Professional Certificate</li>
                <li>TensorFlow Developer Certificate</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold border-b-2 border-purple-200 pb-1 mb-3">PROFESSIONAL SKILLS</h2>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">Frontend:</p>
                  <p>React.js, TypeScript, Redux, Next.js, Tailwind CSS, HTML5, CSS3</p>
                </div>
                <div>
                  <p className="font-medium">Backend:</p>
                  <p>Node.js, Express.js, Django, RESTful APIs, GraphQL, MongoDB, PostgreSQL</p>
                </div>
                <div>
                  <p className="font-medium">Java:</p>
                  <p>Core Java, File I/O, Encryption, Swing GUI, Object-Oriented Programming</p>
                </div>
                <div>
                  <p className="font-medium">Cybersecurity:</p>
                  <p>Network Security, Penetration Testing, Secure Coding Practices, Cloud Security (CCSP, CISSP)</p>
                </div>
                <div>
                  <p className="font-medium">AI & Machine Learning:</p>
                  <p>Generative AI, Natural Language Processing, TensorFlow, PyTorch</p>
                </div>
                <div>
                  <p className="font-medium">DevOps & Tools:</p>
                  <p>Docker, Kubernetes, Git, CI/CD Pipelines, Firebase, Agile Methodologies</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold border-b-2 border-purple-200 pb-1 mb-3">PERSONAL ATTRIBUTES</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Strong problem-solving and analytical skills</li>
                <li>Excellent communicator and team collaborator</li>
                <li>Quick to adapt to emerging technologies</li>
                <li>Passionate about digital innovation</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600 italic">References available upon request.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
