import "./App.css";
import Home from "./pages";
import { GlobalContext } from "./context/index";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  const user = {
    username: "Benny KS",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
