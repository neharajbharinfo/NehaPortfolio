"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Shield, Brain, GitBranch, MessageSquare } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="h-6 w-6 text-purple-500" />,
    skills: ["React.js", "TypeScript", "Redux", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    color: "from-purple-500/10 to-purple-500/5",
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-blue-500" />,
    skills: ["Node.js", "Express.js", "Django", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"],
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="h-6 w-6 text-red-500" />,
    skills: ["Network Security", "Penetration Testing", "Secure Coding", "Cloud Security (CCSP, CISSP)"],
    color: "from-red-500/10 to-red-500/5",
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6 text-green-500" />,
    skills: ["Generative AI", "NLP", "TensorFlow", "PyTorch"],
    color: "from-green-500/10 to-green-500/5",
  },
  {
    title: "DevOps & Tools",
    icon: <GitBranch className="h-6 w-6 text-orange-500" />,
    skills: ["Docker", "Kubernetes", "Git", "CI/CD Pipelines", "Firebase", "Agile Methodologies"],
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    title: "Soft Skills",
    icon: <MessageSquare className="h-6 w-6 text-teal-500" />,
    skills: ["Problem-Solving", "Leadership", "Communication", "Adaptability"],
    color: "from-teal-500/10 to-teal-500/5",
  },
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Technical & Soft Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-400 mx-auto rounded-full mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          A diverse set of technical and interpersonal skills that I&apos;ve developed throughout my career.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white dark:bg-gray-800/50 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 inline-flex`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {category.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {category.title}
                </motion.h3>
                <motion.ul
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.05 + 0.5,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-purple-500 mr-2"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
