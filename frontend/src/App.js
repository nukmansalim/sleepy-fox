import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import AddArticle from "./pages/AddArticlePage";
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/article">
          <Route path="add" element={<AddArticle />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
