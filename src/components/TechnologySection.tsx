import { use, useState } from "react";
import type { iTechnology } from "../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import { Bounce, toast } from "react-toastify";

interface TechnologySectionProps {
  TechnologyPromise: Promise<iTechnology[]>;
}

const TechnologySection = ({ TechnologyPromise }: TechnologySectionProps) => {
  const technologys = use(TechnologyPromise);
  const [stack, setStack] = useState<iTechnology[]>([]);

  const handleAddToStack = (technology: iTechnology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warn(`${technology.name} is already in your stack.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return;
    }

    setStack((currentStack) => [...currentStack, technology]);
    toast.success(`${technology.name} added to your stack.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
  };

  const handleRemoveFromStack = (technologyId: string) => {
    const technology = stack.find((item) => item.id === technologyId);
    setStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== technologyId),
    );
    if (technology) {
      toast.info(`${technology.name} removed from your stack.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies were removed from your stack.");
  };

  return (
    <div className="container mx-auto grid gap-6 px-4 pb-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <section className="min-w-0">
        <div className="mb-4">
          <span className="text-[#0f172a] font-bold text-xl">Explore the </span>
          <span className="text-pink-500 text-xl font-bold">Technologies</span>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>
        <TechnologyCard
          technologys={technologys}
          stack={stack}
          onAddToStack={handleAddToStack}
        />
      </section>
      <StackSidebar
        stack={stack}
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

export default TechnologySection;
