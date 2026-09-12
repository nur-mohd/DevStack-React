import type { iTechnology } from "../types/TechnologyType";
import { HiStar } from "react-icons/hi2";

const TechnologyCard = ({ technologys }: { technologys: iTechnology[] }) => {
  console.log(technologys, "Technolgys card from");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
      {technologys.map((technology: iTechnology) => (
        <div className="card bg-base-100 w-full shadow-md border border-gray-100" key={technology.id}>
          <figure className="flex justify-between items-center px-10 pt-10">
            <img
              src={technology.icon}
              alt={technology.name}
            />
            <span>{technology.badge}</span>
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
              <button className="btn btn-neutral px-2 py-2 w-full">Add to Stack</button>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default TechnologyCard;
