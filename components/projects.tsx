"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Database, Shield, BrainCircuit, Server, FileText } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "File Hider",
    description: "Secure file hiding application using Core Java",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop",
    category: "Java",
    icon: <FileText className="h-5 w-5" />,
    color: "bg-orange-500",
    details: {
      longDescription:
        "A secure file hiding application developed during internship at CADDESK IT Solutions. The application allows users to hide and protect sensitive files using Core Java encryption techniques and file system manipulation.",
      technologies: ["Core Java", "File I/O", "Encryption", "Swing GUI", "MySQL"],
      features: [
        "File encryption and decryption",
        "Secure file hiding mechanism",
        "User authentication system",
        "Intuitive GUI interface",
        "Database integration for user management",
      ],
      links: {
        demo: "https://github.com/neharajbharinfo",
        github: "https://github.com/neharajbharinfo",
      },
    },
  },
  {
    id: 2,
    title: "Custom ERP System",
    description: "Secure ERP using Django, PostgreSQL, and React.js",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    category: "Full-Stack",
    icon: <Database className="h-5 w-5" />,
    color: "bg-blue-500",
    details: {
      longDescription:
        "A comprehensive ERP system built for small to medium businesses with modules for inventory management, HR, finance, and customer relationship management.",
      technologies: ["Django", "PostgreSQL", "React.js", "Redux", "Docker"],
      features: [
        "Role-based access control",
        "Real-time data synchronization",
        "Comprehensive reporting dashboard",
        "Mobile-responsive design",
      ],
      links: {
        demo: "https://github.com/neharajbharinfo",
        github: "https://github.com/neharajbharinfo",
      },
    },
  },
  {
    id: 3,
    title: "AI Attendance & Security System",
    description: "Facial recognition with AI for attendance & security",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    category: "AI",
    icon: <BrainCircuit className="h-5 w-5" />,
    color: "bg-purple-500",
    details: {
      longDescription:
        "An intelligent system that uses facial recognition and machine learning to automate attendance tracking and enhance security protocols.",
      technologies: ["TensorFlow", "OpenCV", "Python", "React", "MongoDB"],
      features: [
        "Real-time facial recognition",
        "Anomaly detection",
        "Automated reporting",
        "Integration with existing security systems",
      ],
      links: {
        demo: "https://github.com/neharajbharinfo",
        github: "https://github.com/neharajbharinfo",
      },
    },
  },
  {
    id: 4,
    title: "Secure Cloud Infrastructure",
    description: "Automated, secure cloud infrastructure using Terraform and AWS",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop",
    category: "DevOps",
    icon: <Server className="h-5 w-5" />,
    color: "bg-green-500",
    details: {
      longDescription:
        "A robust cloud infrastructure setup with automated deployment, scaling, and security measures implemented using Infrastructure as Code principles.",
      technologies: ["Terraform", "AWS", "Docker", "Kubernetes", "GitHub Actions"],
      features: [
        "Auto-scaling architecture",
        "Disaster recovery protocols",
        "Compliance with industry standards",
        "Cost optimization strategies",
      ],
      links: {
        demo: "https://github.com/neharajbharinfo",
        github: "https://github.com/neharajbharinfo",
      },
    },
  },
  {
    id: 5,
    title: "Cybersecurity Assessment Tool",
    description: "Vulnerability scanning and assessment platform",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    category: "Security",
    icon: <Shield className="h-5 w-5" />,
    color: "bg-red-500",
    details: {
      longDescription:
        "A comprehensive security assessment tool that identifies vulnerabilities, suggests remediation steps, and helps organizations improve their security posture.",
      technologies: ["Python", "Node.js", "React", "PostgreSQL", "Docker"],
      features: [
        "Automated vulnerability scanning",
        "Compliance checking",
        "Risk assessment reporting",
        "Remediation tracking",
      ],
      links: {
        demo: "https://github.com/neharajbharinfo",
        github: "https://github.com/neharajbharinfo",
      },
    },
  },
]

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white dark:bg-gray-800/50 backdrop-blur-sm group">
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <motion.span
                  className={`px-2 py-1 rounded-full text-xs text-white ${project.color}`}
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.category}
                </motion.span>
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium mb-2">About</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{project.details.longDescription}</p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.details.technologies.map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Key Features</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-500 dark:text-gray-400">
                            {project.details.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-3 mt-2">
                          <Button asChild size="sm" className="gap-2">
                            <a href={project.details.links.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" /> Live Demo
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="sm" className="gap-2">
                            <a href={project.details.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" /> View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start mb-3">
            <motion.div
              className={`p-2 rounded-lg ${project.color} text-white mr-3`}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {project.icon}
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{project.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const categories = ["All", "Java", "Full-Stack", "AI", "DevOps", "Security"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

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
    <section id="projects" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Projects Showcase
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
          A selection of my recent projects showcasing my technical skills and problem-solving abilities.
        </motion.p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-purple-600 hover:bg-purple-700 shadow-lg"
                  : "hover:text-purple-600 hover:border-purple-600 hover:shadow-md"
              }`}
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeFilter}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
