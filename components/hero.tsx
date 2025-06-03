"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h2
              className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hello, I&apos;m
            </motion.h2>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              Neha Rajbhar
            </motion.h1>
            <motion.div
              className="h-12 mt-3 text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Typewriter
                options={{
                  strings: ["Full-Stack Developer", "Cybersecurity Enthusiast", "AI Developer", "Prompt Engineer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-gray-600 dark:text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          >
            I build secure, scalable, and innovative applications with a focus on user experience and cutting-edge
            technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 group transition-all duration-300">
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/resume">
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-purple-200 dark:border-purple-800 group transition-all duration-300"
                >
                  View Resume
                  <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200/50 dark:bg-purple-700/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200/50 dark:bg-green-700/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Profile image container */}
          <motion.div
            className="relative w-full pt-[100%]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
              initial={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileHover={{
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
                borderColor: "rgba(168, 85, 247, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-04%20at%2001.12.21_ea781d83.jpg-uImmnEzIGFVgCuQXsImOBJqjEq1i46.jpeg"
                alt="Neha Rajbhar"
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Overlay gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Floating particles */}
          <motion.div
            className="absolute top-1/4 right-0 w-3 h-3 bg-purple-400 rounded-full"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 w-2 h-2 bg-green-400 rounded-full"
            animate={{
              y: [10, -10, 10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-400 rounded-full"
            animate={{
              y: [-5, 15, -5],
              x: [-5, 5, -5],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
