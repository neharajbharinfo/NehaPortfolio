"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormStatus("success")
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 3000)
    }, 1500)
  }

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:neharajbhar2113@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/neharajbhar",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/neharajbharinfo",
      color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Get In Touch
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
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md h-full">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently open to freelance opportunities, collaborations, and interesting projects. Let's create
                something amazing together!
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className={`p-3 rounded-full ${link.color} text-white transition-transform group-hover:scale-110`}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{link.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{link.href.replace("mailto:", "")}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-xl blur-xl"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 dark:border-purple-900/20">
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "The best way to predict the future is to invent it."
                  </p>
                  <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-2">— Alan Kay</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="rounded-lg border-gray-200 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="rounded-lg border-gray-200 dark:border-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="rounded-lg border-gray-200 dark:border-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to discuss a project..."
                  required
                  className="min-h-[150px] rounded-lg border-gray-200 dark:border-gray-700"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-lg ${
                  formStatus === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : formStatus === "error"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-purple-600 hover:bg-purple-700"
                } text-white py-3 transition-all duration-300`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : formStatus === "success" ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Message Sent!
                  </span>
                ) : formStatus === "error" ? (
                  <span className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Failed to Send
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
