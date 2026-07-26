import { useEffect, useState } from "react";
import { getAll } from "../Services/ServiceTodo";

export default function TodoListe() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await getAll();
        setTodos(res);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <h3>Loading ....</h3>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header Section */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Todo List
          </h1>
          <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
            {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
          </span>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50/80 text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th scope="col" className="px-6 py-3.5 font-semibold">
                  Id
                </th>
                <th scope="col" className="px-6 py-3.5 font-semibold">
                  Title
                </th>
                <th scope="col" className="px-6 py-3.5 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {todos.map((ele) => (
                <tr
                  key={ele.id}
                  className="hover:bg-slate-50/80 transition-colors duration-150"
                >
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">
                    #{ele.id}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800">
                    {ele.title}
                  </td>
                  <td className="px-6 py-4">
                    {ele.completed ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Done
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
