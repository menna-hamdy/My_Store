import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm bg-white">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <FaShoppingBag
              size={22}
              className="me-2"
              style={{ color: "rgb(150, 98, 198)" }}
            />
            MyStore
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-4">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold active-link " : "nav-link" 
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold active-link " : "nav-link"
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold active-link " : "nav-link"
                  }
                >
                  Cart
                </NavLink>
              </li>

              {/* Cart Icon */}
              <li className="nav-item">
                <Link to="/cart" className="position-relative text-dark">
                  <FaShoppingCart size={20} className="cart-icon" />

                  {cart.length >= 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                      style={{
                        fontSize: "10px",
                        padding: "3px 5px",
                        backgroundColor: "rgb(150, 98, 198)",
                      }}
                    >
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Line */}
      <div
        style={{
          backgroundColor: "rgb(150, 98, 198)" ,
          height: "3px",
          width: "100%",
        }}
      />
    </>
  );
}
