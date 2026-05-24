"use client";

import { motion } from "framer-motion";
import { WorkProject } from "@/data/workDetails";

export default function ProjectNarrative({
  project,
}: {
  project: WorkProject;
}) {
  const blocks = [
    {
      number: "01",
      title: "Problem & Discovery",
      text: project.problem,
      tags: ["Research", "User Journey", "Discovery"],
    },
    {
      number: "02",
      title: "Solution & Strategy",
      text: project.solution,
      tags: ["UI/UX", "Design System", "Prototyping"],
    },
    {
      number: "03",
      title: "Results & Impact",
      text: project.result,
      tags: ["Performance", "Optimization", "Scalability"],
    },
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:gap-14 lg:grid-cols-[0.9fr_1fr]">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="sticky top-12">
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-px bg-black/10" />

              <div className="space-y-14 md:space-y-24">
                {blocks.map((block, index) => (
                  <motion.div
                    key={block.title}
                    className="relative flex gap-5 md:gap-10"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="relative flex w-12 justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15,
                        }}
                        viewport={{ once: true }}
                        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black text-sm font-semibold text-white"
                      >
                        {index + 1}
                      </motion.div>

                      {index === blocks.length - 1 && (
                        <div className="absolute top-12 h-32 w-px bg-linear-to-b from-black/20 to-transparent" />
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 + index * 0.15,
                        }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold uppercase tracking-[0.3em] text-black/40"
                      >
                        {block.number}
                      </motion.p>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.15 + index * 0.15,
                        }}
                        viewport={{ once: true }}
                        className="mt-4 text-2xl font-bold tracking-tight text-black md:text-[2.2rem]"
                      >
                        {block.title}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.25 + index * 0.15,
                        }}
                        viewport={{ once: true }}
                        className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 md:mt-6 md:text-lg"
                      >
                        {block.text}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.35 + index * 0.15,
                        }}
                        viewport={{ once: true }}
                        className="mt-8 flex flex-wrap gap-3"
                      >
                        {block.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.2 }}
                            className="rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-black"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:pl-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-black/40"
            >
              Gallery
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-3 text-2xl font-bold tracking-tight text-black md:text-3xl"
            >
              Visual Showcase
            </motion.h2>
          </div>

          <div className="space-y-6">
            {project.gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="mx-auto max-w-140 overflow-hidden rounded-[18px] bg-neutral-100"
              >
                {item.type === "image" ? (
                  <motion.img
                    src={item.src}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="h-auto w-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <motion.video
                    src={item.src}
                    controls
                    className="h-auto w-full object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
