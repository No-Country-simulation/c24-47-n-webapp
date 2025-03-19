import { Route, Routes } from "react-router-dom";
import NavBar from "./components/uiComp/navBar/NavBar";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import AutoCarousel from "./components/uiComp/banner/AutoCarousel";
import Footer from "./components/uiComp/footer/Footer";
import BookPage from "./components/pages/BookPage";

interface NavLink {
  title: string;
  path: string;
  icon?: React.ReactNode | null;
}

function App() {
  const navArrayLinks: NavLink[] = [
    { title: "Inicio", path: "/" },
    { title: "Categorías", path: "/categories" },
    { title: "Log In / Registrarse", path: "/login", icon: <PersonIcon /> },
    { title: "Favoritos", path: "/login", icon: <StarIcon /> },
    { title: "Carrito", path: "/carrito", icon: <ShoppingCartIcon /> },
  ];

  return (
    <>
      <AutoCarousel />
      <NavBar navArrayLinks={navArrayLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
