import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 text-white font-black p-2 rounded-xl text-lg tracking-wider">
              TD
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              Todo<span className="text-indigo-600">List</span>
            </span>
          </div>

          <ul className="flex items-center space-x-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  }`
                }
              >
                List
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/todo/create"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                  }`
                }
              >
                <span>+</span> Create Todo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
