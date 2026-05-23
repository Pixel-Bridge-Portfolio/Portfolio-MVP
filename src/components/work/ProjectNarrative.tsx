"use client";

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
    <section className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1fr]">
        <div className="relative">
          <div className="sticky top-16">
            <div className="relative">
              <div className="absolute left-5.75 top-0 h-full w-px bg-black/10" />

              <div className="space-y-24">
                {blocks.map((block, index) => (
                  <div
                    key={block.title}
                    className="relative flex gap-10"
                  >
                    <div className="relative flex w-12 justify-center">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black text-sm font-semibold text-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                        {index + 1}
                      </div>

                      {index === blocks.length - 1 && (
                        <div className="absolute top-12 h-32 w-px bg-linear-to-b from-black/20 to-transparent" />
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/40">
                        {block.number}
                      </p>

                      <h2 className="mt-4 text-3xl font-bold tracking-tight text-black md:text-[2.2rem]">
                        {block.title}
                      </h2>

                      <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
                        {block.text}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {block.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-black/5 px-4 py-2 text-sm font-medium text-black"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-4">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/40">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black">
              Visual Showcase
            </h2>
          </div>

          <div className="space-y-6">
            {project.gallery.map((item, index) => (
              <div
                key={index}
                className="mx-auto max-w-140 overflow-hidden rounded-[18px] bg-neutral-100 shadow-sm"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="h-auto w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}