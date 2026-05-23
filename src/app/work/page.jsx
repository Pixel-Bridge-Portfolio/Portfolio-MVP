"use client";
// import { useRouter,useSearchParams } from "next/router";
import FilterBar from "../../components/work/FilterBar.jsx";
import ProjectsCard from "../../components/work/ProjectsCard.jsx";
import projects from "../../data/projects.ts";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function WorkPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSkill = searchParams.get("skill") || "all";

  const [active, setActive] = useState(urlSkill);

  useEffect(() => {
    setActive(urlSkill);
  }, [urlSkill]);

  useEffect(() => {
    if (active === "all") {
      router.push("/work");
    } else {
      router.push(`/work?skill=${active}`);
    }
  }, [active, router]);

  const filterprojects =
    active === "all"
      ? projects
      : projects.filter((project) => project.skills.includes(active));

  return (
    <>
      <main className="bg-white text-black min-h-screen mb-20">
        <div className="max-w-7xl mx-auto">

          <h1 className=" text-center text-3xl p-10">our Works</h1>

          <FilterBar active={active} setActive={setActive} />

          <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
            {filterprojects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
          </div>
          
        </div>
      </main>
    </>
  );
}
