import Image from "next/image";

import { WorkProject } from "@/data/workDetails";

export default function ProjectHero({
  project,
}: {
  project: WorkProject;
}) {
  return (
   <section className="relative min-h-[74vh] overflow-hidden bg-black md:min-h-[85vh]">
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
            className="scale-105 object-cover object-center transition-transform duration-[8s] ease-out hover:scale-110"
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
            className="scale-105 object-cover object-center"
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
          className="hidden h-full w-full scale-105 object-cover md:block"
        />

        <video
          src={project.heroMedia.mobileSrc}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full scale-105 object-cover md:hidden"
        />
      </>
    )}

    <div className="absolute inset-0 bg-black/40" />

    <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

    <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
  </div>

  <div className="relative z-10 flex h-full items-end">
    <div className="w-full px-4 pb-16 sm:px-6 md:px-10 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          {[project.client, project.industry, project.year].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/20 sm:px-5 sm:py-2 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <h1 className="max-w-6xl text-3xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl xl:text-8xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
          {project.shortDescription}
        </p>
      </div>
    </div>
  </div>
</section>
  );
}
