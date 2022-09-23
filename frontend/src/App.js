import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import AddArticle from "./pages/AddArticlePage";
import LoginPage from "./pages/LoginPage";
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
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
