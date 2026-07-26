import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import TodoListe from "./Components/TodoListe";
import TodoCreate from "./Components/TodoCreate";
import TodoUpdate from "./Components/TodoUpdate";

const App = () => {
  const linkes = createBrowserRouter([
    {
      path: "/",
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
        <Outlet />
      </>
    );
  }

  return <RouterProvider router={linkes}></RouterProvider>;
};

export default App;
