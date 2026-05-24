const filters = [
  "all",
  "backend",
  "frontend",
  "design",
  "branding",
  "video",
  "comms",
  "social",
  "ai",
  "product",
];

type Props = {
  active: string;
  setActive: (value: string) => void;
};

export default function FilterBar({ active, setActive }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`rounded-full border px-5 py-2 capitalize transition-all duration-300
            ${
              active === item
                ? "border-black bg-black text-white"
                : "border-neutral-300 bg-white text-black hover:border-black"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

