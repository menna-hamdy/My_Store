import React,{useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag,FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg  shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
        <FaShoppingBag size={22} className="me-2 text-primary" />
          MyStore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4 mb-2 mb-lg-0">
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>

          </ul>
          <Link to="/cart" className="position-relative text-black">
          <FaShoppingCart size={20} />

          {cart.length >= 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
              style={{ fontSize: "10px", padding: "3px 5px" }}
            >
              {cart.length}
            </span>
          )}
        </Link>


        </div>
      </div>
    </nav>
  );
}
