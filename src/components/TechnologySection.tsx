import { use, useState } from "react";
import type { iTechnology } from "../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import { Bounce, toast } from "react-toastify";
import { FaDocker, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import type { ReactNode } from "react";

interface TechnologySectionProps {
  TechnologyPromise: Promise<iTechnology[]>;
}

const TechnologySection = ({ TechnologyPromise }: TechnologySectionProps) => {
  const technologys = use(TechnologyPromise);
  const [stack, setStack] = useState<iTechnology[]>([]);
  const icons: Record<string, ReactNode> = {
    react: <FaReact className="text-2xl text-cyan-500" />,
    vue: <SiVuedotjs className="text-2xl text-green-500" />,
    svelte: <SiSvelte className="text-2xl text-orange-500" />,
    nextjs: <SiNextdotjs className="text-2xl text-black" />,
    nodejs: <FaNodeJs className="text-2xl text-green-600" />,
    postgresql: <SiPostgresql className="text-2xl text-blue-600" />,
    redis: <SiRedis className="text-2xl text-red-500" />,
    javascript: <FaJs className="text-2xl text-yellow-500" />,
    typescript: <SiTypescript className="text-2xl text-blue-500" />,
    java: <FaJava className="text-2xl text-red-600" />,
    tailwindcss: <SiTailwindcss className="text-2xl text-cyan-400" />,
    docker: <FaDocker className="text-2xl text-blue-500" />,
  };

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
          icons={icons}
          stack={stack}
          onAddToStack={handleAddToStack}
        />
      </section>
      <StackSidebar
        stack={stack}
        icons={icons}
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
};

export default TechnologySection;
