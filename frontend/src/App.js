import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import AddArticle from "./pages/AddArticlePage";
import ArticleDetails from "./pages/ArticleDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/article">
          <Route path="add" element={<AddArticle />} />
          <Route path=":id" element={<ArticleDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
