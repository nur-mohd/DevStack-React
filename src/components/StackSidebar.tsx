import { HiOutlineXMark } from "react-icons/hi2";
import type { iTechnology } from "../types/TechnologyType";
import type { ReactNode } from "react";

interface StackSidebarProps {
  stack: iTechnology[];
  icons: Record<string, ReactNode>;
  onRemoveFromStack: (technologyId: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, icons, onRemoveFromStack, onRemoveAll }: StackSidebarProps) => {
  return (
    <aside className="h-fit rounded-lg border border-gray-200 bg-base-100 p-5 shadow-sm lg:sticky lg:top-6">
      <h2 className="text-lg font-bold text-[#0f172a]">Your stack</h2>
      <p className="mt-1 text-xs text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} ${stack.length === 1 ? "technology" : "technologies"} selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-8 rounded-md border border-dashed border-gray-200 p-4 text-center">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-5 flex flex-col gap-2">
            {stack.map((technology) => (
              <div
                className="flex items-center gap-3 rounded-md border border-gray-200 p-3"
                key={technology.id}
              >
                {icons[technology.id]}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{technology.name}</p>
                  <p className="text-xs text-gray-500">{technology.category}</p>
                </div>
                <button
                  className="btn btn-ghost btn-xs"
                  aria-label={`Remove ${technology.name}`}
                  title={`Remove ${technology.name}`}
                  onClick={() => onRemoveFromStack(technology.id)}
                >
                  <HiOutlineXMark className="text-base" />
                </button>
              </div>
            ))}
          </div>
          <button className="btn btn-outline mt-4 w-full text-[#D82C20]" onClick={onRemoveAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default StackSidebar;