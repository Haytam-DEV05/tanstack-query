import { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router";
import { getTodo, updateTodo } from "../Services/ServiceTodo";

export default function TodoUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await getTodo(id);
        setFormData({
          title: res.title || "",
          description: res.description || "",
          completed: res.completed || false,
        });
      } catch (error) {
        console.error("Erreur f l-fetch:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTodo(id, formData);
      navigate("/");
    } catch (error) {
      console.error("Erreur f update:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-indigo-600 px-6 py-5 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Modifier la tâche</h1>
          <NavLink
            to="/"
            className="text-sm font-medium text-indigo-100 hover:text-white transition-colors bg-indigo-700/50 hover:bg-indigo-700 px-3 py-1.5 rounded-lg"
          >
            ← Retour
          </NavLink>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Titre
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Ex: Acheter du pain..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Détails de la tâche..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-800 placeholder-slate-400 resize-none"
            />
          </div>

          {/* Checkbox Status */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">Statut</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="completed"
                checked={formData.completed}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              <span className="ml-3 text-sm font-semibold text-slate-800">
                {formData.completed ? "Fait ✅" : "En cours ⏳"}
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="pt-2 flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-md shadow-indigo-200 transition-all active:scale-[0.98]"
            >
              Enregistrer
            </button>
            <NavLink
              to="/"
              className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-4 rounded-xl transition-all"
            >
              Annuler
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
