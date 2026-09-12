const StackSidebar = () => {
  return (
    <aside className="h-fit rounded-lg border border-gray-200 bg-base-100 p-5 shadow-sm lg:sticky lg:top-6">
      <h2 className="text-lg font-bold text-[#0f172a]">Your stack</h2>
      <p className="mt-1 text-xs text-gray-500">
        No technologies selected yet.
      </p>

      <div className="mt-8 rounded-md border border-dashed border-gray-200 p-4 text-center">
        <p className="mt-1 text-xs text-gray-400">
          Your stack is Empty.
        </p>
      </div>
    </aside>
  );
};

export default StackSidebar;