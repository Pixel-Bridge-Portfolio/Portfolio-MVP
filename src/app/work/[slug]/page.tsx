import { notFound } from "next/navigation";

import { workDetails } from "@/data/workDetails";

import ProjectHero from "@/components/work/ProjectHero";
import ProjectNarrative from "@/components/work/ProjectNarrative";
import ProjectStack from "@/components/work/ProjectStack";
import ProjectTestimonial from "@/components/work/ProjectTestimonial";
import NextProjectCard from "@/components/work/NextProjectCard";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return workDetails.map((project) => ({
    slug: project.slug,
  }));
}

export default async function WorkDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = workDetails.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = workDetails.findIndex(
    (item) => item.slug === project.slug
  );

  const nextProject =
    workDetails[(currentIndex + 1) % workDetails.length];

  return (
    <main className="bg-white">
      <ProjectHero project={project} />
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-8 md:px-10 md:py-10">

        <ProjectNarrative project={project} />

        <ProjectStack project={project} />

        <ProjectTestimonial project={project} />

        <NextProjectCard project={nextProject} />
      </div>
    </main>
  );
}
