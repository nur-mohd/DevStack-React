import { use } from "react";
import type { iTechnology } from "../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

interface TechnologySectionProps {
    TechnologyPromise: Promise<iTechnology[]>
}


const TechnologySection = ({TechnologyPromise}:TechnologySectionProps) => {
    const technologys = use (TechnologyPromise);
    console.log(technologys);
    
    return (
        <div className="container mx-auto grid gap-6 px-4 pb-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <section className="min-w-0">
                <div className="mb-4">
                    <span className="text-[#0f172a] font-bold text-xl">Explore the {" "}</span>
                    <span className="text-pink-500 text-xl font-bold">Technologies</span>
                    <p>Pick one technology per category to build your ideal stack.</p>
                </div>
                <TechnologyCard technologys={technologys}/>
            </section>
            <StackSidebar />
        </div>
    );
};

export default TechnologySection;