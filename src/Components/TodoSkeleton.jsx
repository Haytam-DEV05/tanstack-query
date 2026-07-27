export default function TodoSkeleton() {
  return (
    <div className="max-w-5xl mx-auto my-8 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 animate-pulse">
      {/* Top Bar: Title + Badge + Button */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
        <div className="flex items-center gap-4">
          {/* Skeleton Title */}
          <div className="h-7 w-28 bg-slate-200 rounded-md"></div>
          {/* Skeleton Badge (4 Tasks) */}
          <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
        </div>
        {/* Skeleton Create Button */}
        <div className="h-8 w-28 bg-slate-200 rounded-lg"></div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 px-4 py-3 bg-slate-50/60 rounded-xl mb-4 text-sm">
        <div className="h-4 w-10 bg-slate-200 rounded"></div>
        <div className="h-4 w-16 bg-slate-200 rounded"></div>
        <div className="h-4 w-16 bg-slate-200 rounded"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>

      {/* Table Rows (4 Rows) */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="grid grid-cols-4 gap-4 items-center px-4 py-4 border-b border-slate-100 last:border-0"
          >
            {/* ID Column */}
            <div className="h-4 w-16 bg-slate-200 rounded"></div>

            {/* TITLE Column */}
            <div className="h-4 w-32 bg-slate-200 rounded"></div>

            {/* STATUS Column (Pill shape) */}
            <div>
              <div className="h-7 w-20 bg-slate-200 rounded-full"></div>
            </div>

            {/* ACTIONS Column (2 Buttons: Update & Delete) */}
            <div className="flex items-center gap-2">
              <div className="h-9 w-20 bg-slate-200 rounded-lg"></div>
              <div className="h-9 w-20 bg-slate-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
