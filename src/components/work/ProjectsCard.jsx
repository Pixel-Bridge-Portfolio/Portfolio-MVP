
export default function ProjectCard({project}) {
  return (
    <div
     className=" rounded-3xl overflow-hidden mb-10 break-inside-avoid border
      border-black">
        
      <img
        src={project.image}
        alt={project.title}
        className={`
          w-full object-cover

          ${
            project.height === "tall"
              ? "h-[300px]"
              : project.height === "wide"
              ? "h-[200px]"
              : "h-[340px]"
          }
        `}
      />

      <div className="p-5 hover:transition delay-150 duration-300 ease-in-out ">
        <h2 className="text-2xl font-bold mb-4">
          {project.title}
        </h2>

        <div className="flex flex-wrap gap-2 mb-5 ">
          {project.skills?.map((skill) => (
            <span
              key={skill}
              className="bg-black text-white px-3 py-1 rounded-full text-sm capitalize"
            >
              {skill}
            </span>
          ))}
        </div>

        <button className="text-sm underline  hover:text-yellow-300">
          View →
        </button>
      </div>
    </div>
  );
}