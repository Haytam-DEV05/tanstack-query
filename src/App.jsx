import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import TodoListe from "./Components/TodoListe";
import TodoCreate from "./Components/TodoCreate";
import TodoUpdate from "./Components/TodoUpdate";
import Navbar from "./Components/Navbar";

const App = () => {
  const linkes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <TodoListe />,
        },
        {
          path: "/todo/create",
          element: <TodoCreate />,
        },
        {
          path: "/todo/:id/update",
          element: <TodoUpdate />,
        },
      ],
    },
  ]);

  function Layout() {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  return <RouterProvider router={linkes}></RouterProvider>;
};

export default App;
