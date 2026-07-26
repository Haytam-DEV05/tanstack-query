import { useState } from "react";
import { createTodo } from "../Services/ServiceTodo";
import { NavLink, useNavigate } from "react-router";

export default function TodoCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = formData;
    if (!title.trim() || !description.trim()) {
      return alert("Enter All Fields!");
    }

    try {
      setLoading(true);
      await createTodo({ id: `${Date.now()}`, ...formData });
      navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">
              Create New Task
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Fill in the details below to add a new task
            </p>
          </div>
          <NavLink
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            ← Retour
          </NavLink>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Title Input */}
          <div className="space-y-1.5">
            <label
              htmlFor="title"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="e.g. Complete Laravel API"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Description Input */}
          <div className="space-y-1.5">
            <label
              htmlFor="description"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={3}
              placeholder="Add details about this task..."
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              value={formData.description}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
            />
          </div>

          {/* Completed Checkbox */}
          <div className="pt-2">
            <label
              htmlFor="completed"
              className="inline-flex items-center gap-3 p-3 w-full bg-slate-50/60 border border-slate-200/80 rounded-xl cursor-pointer hover:bg-slate-100/50 transition-colors"
            >
              <input
                type="checkbox"
                name="completed"
                id="completed"
                checked={formData.completed}
                onChange={(e) =>
                  setFormData({ ...formData, completed: e.target.checked })
                }
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
              />
              <span className="text-sm font-medium text-slate-700 select-none">
                Mark as completed immediately
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Todo"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
