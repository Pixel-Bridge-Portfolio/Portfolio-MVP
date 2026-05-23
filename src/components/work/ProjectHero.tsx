import Image from "next/image";

import { WorkProject } from "@/data/workDetails";

export default function ProjectHero({
  project,
}: {
  project: WorkProject;
}) {
  return (
    <section className="relative h-[91vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {project.heroMedia.type === "image" ? (
          <>
            <div className="absolute inset-0 hidden md:block">
              <Image
                src={project.heroMedia.src}
                alt={project.title}
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-center will-change-transform scale-[1.01] transform-gpu"
              />
            </div>

            <div className="absolute inset-0 md:hidden">
              <Image
                src={project.heroMedia.mobileSrc}
                alt={project.title}
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-center will-change-transform scale-[1.01] transform-gpu"
              />
            </div>
          </>
        ) : (
          <>
            <video
              src={project.heroMedia.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="hidden h-full w-full object-cover object-center scale-[1.01] transform-gpu md:block"
            />

            <video
              src={project.heroMedia.mobileSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover object-center scale-[1.01] transform-gpu md:hidden"
            />
          </>
        )}

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-black/5" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 pt-10 md:px-10 md:pt-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
                {project.client}
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
                {project.industry}
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
                {project.year}
              </span>
            </div>

            <h1 className="max-w-6xl text-5xl font-bold leading-[0.9] tracking-tight text-white md:text-7xl xl:text-8xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}