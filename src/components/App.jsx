import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "./Home";
import Team from "./Team";

const router = createBrowserRouter([
  {
    path: '/', element: <Home/>
  },
  {
    path: '/team', element: <Team/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
