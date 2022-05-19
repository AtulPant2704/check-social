import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth";
import { Landing, Home, Profile, Explore, Bookmark, Error404 } from "pages";
import "./App.css";

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={token ? <Home /> : <Landing />} />
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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
