import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import AddArticle from "./pages/AddArticlePage";
import LoginPage from "./pages/auth/LoginPage";
import ArticleDetails from "./pages/ArticleDetails";
import RegisterPage from "./pages/auth/RegisterPage";
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
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
