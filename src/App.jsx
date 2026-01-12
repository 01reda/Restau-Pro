import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

// Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/MenuPage.jsx";
import TablesPage from "./pages/TablesPage.jsx";
import AboutUsPage from "./pages/AboutUsPage";
import ReviewPage from "./pages/ReviewPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import Dashbord from "./components/dashbord/dashbord";




const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/tables" element={<TablesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashbord" element={<Dashbord />} />


        </Routes>
      </Layout>
    </Router>
  );
};

export default App;