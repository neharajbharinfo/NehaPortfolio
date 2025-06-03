"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BrainCircuit, Shield, Gamepad2, Cloud } from "lucide-react"

const hobbies = [
  {
    title: "AI & Tech Exploration",
    description: "Exploring new AI technologies and experimenting with machine learning models in my free time.",
    icon: <BrainCircuit className="h-10 w-10 text-purple-500" />,
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    title: "Security Research & Ethical Hacking",
    description:
      "Researching security vulnerabilities and participating in ethical hacking challenges to improve cybersecurity skills.",
    icon: <Shield className="h-10 w-10 text-red-500" />,
    color: "from-red-500/20 to-red-500/5",
  },
  {
    title: "Game Development",
    description: "Creating small games and interactive experiences using Unity and web technologies.",
    icon: <Gamepad2 className="h-10 w-10 text-green-500" />,
    color: "from-green-500/20 to-green-500/5",
  },
  {
    title: "Cloud & DevOps Automation",
    description: "Building automated cloud infrastructure and exploring new DevOps tools and practices.",
    icon: <Cloud className="h-10 w-10 text-blue-500" />,
    color: "from-blue-500/20 to-blue-500/5",
  },
]

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hobbies & Interests
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-400 mx-auto rounded-full mb-6"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          When I&apos;m not coding, here&apos;s what keeps me busy and inspired.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/50 backdrop-blur-sm h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${hobby.color} mb-4 inline-flex self-start`}>
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{hobby.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">{hobby.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hobbies
