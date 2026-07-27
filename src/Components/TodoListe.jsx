import { useEffect, useState } from "react";
import { getAll, deleteTodo } from "../Services/ServiceTodo";
import { NavLink, useNavigate } from "react-router";
import TodoSkeleton from "./TodoSkeleton";

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

  const handleBtnDelete = async (id) => {
    await deleteTodo(id);
  };

  if (isLoading) {
    return <TodoSkeleton />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Todo List
          </h1>
          <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
            {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
          </span>
          <NavLink to="/todo/create">Create Todo</NavLink>
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
                <th scope="col" className="px-6 py-3.5 font-semibold">
                  Actions
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
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <NavLink to={`/todo/${ele.id}/update`}>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100/80 rounded-lg transition-colors border border-indigo-200/50 active:scale-95"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Update
                        </button>
                      </NavLink>

                      <button
                        type="button"
                        onClick={() => handleBtnDelete(ele.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100/80 rounded-lg transition-colors border border-rose-200/50 active:scale-95"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
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
