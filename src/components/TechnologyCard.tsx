import type { iTechnology } from "../types/TechnologyType";
import { HiStar } from "react-icons/hi2";
import type { ReactNode } from "react";

interface TechnologyCardProps {
  technologys: iTechnology[];
  icons: Record<string, ReactNode>;
  stack: iTechnology[];
  onAddToStack: (technology: iTechnology) => void;
}

const TechnologyCard = ({ technologys, icons, stack, onAddToStack }: TechnologyCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {technologys.map((technology) => (
        <div className="card w-full border border-gray-100 bg-base-100 shadow-md" key={technology.id}>
          <figure className="flex items-center justify-between px-10 pt-10">
            {icons[technology.id]}
            <span className="text-[#0891B2]">{technology.badge}</span>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{technology.name}</h2>
            <p>
              {technology.description}
            </p>
            
            <div className="flex gap-2 space-y-2">
                <span className="badge">{technology.category}</span>
                <span className="badge">{technology.difficulty}</span>
                <span className="badge">
                    <HiStar className="text-yellow-500"/>{technology.rating}</span>
            </div>

            <div className="card-actions justify-center">
              {(() => {
                const isAdded = stack.some((item) => item.id === technology.id);

                return (
                  <button
                    className={`btn px-2 py-2 w-full disabled:cursor-not-allowed disabled:opacity-100 ${
                      isAdded
                        ? "bg-pink-50 text-pink-600"
                        : "btn-neutral"
                    }`}
                    disabled={isAdded}
                onClick={() => onAddToStack(technology)}
                  >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                );
              })()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyCard;
