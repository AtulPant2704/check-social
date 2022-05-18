import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth";
import { Landing, Home, Profile, Explore, Bookmark } from "pages";
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
          path="/profile/:username"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequiresAuth>
              <Bookmark />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
