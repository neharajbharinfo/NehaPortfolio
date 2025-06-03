"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Certified Cloud Security Professional (CCSP)",
    organization: "ISC²",
    year: "2023",
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "AWS Certifications",
    organization: "Amazon Web Services",
    year: "2022",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Google Associate Cloud Engineer",
    organization: "Google Cloud",
    year: "2022",
    color: "from-blue-500 to-teal-500",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    organization: "EC-Council",
    year: "2021",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "IBM AI Engineering Professional Certificate",
    organization: "IBM",
    year: "2021",
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "TensorFlow Developer Certificate",
    organization: "Google",
    year: "2020",
    color: "from-orange-600 to-red-500",
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/30 rounded-3xl my-8">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Certifications
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
          Professional certifications that validate my expertise in various domains.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-10 mr-4`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{cert.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {cert.organization} • {cert.year}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
