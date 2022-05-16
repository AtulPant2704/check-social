import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth";
import { Landing, Home, Profile } from "pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
