import { NavLink, useNavigate } from "react-router-dom";
import ElectricButton from "../ui/ElectricButton";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">RESTAU•PRO</div>

      <div className="navbar-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Menu</NavLink>
        <NavLink to="/tables">Reservation</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
       
      </div>

      <div className="navbar-actions">

        <ElectricButton
          variant="primary"
          onClick={() => navigate("/login")}
        >
          Connexion
        </ElectricButton>
      </div>
    </nav>
  );
};

export default Navbar;
