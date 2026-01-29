import React from "react";
import App from "../App.css"; 

export default function Home() {
  const slides = [
    { id: 1, title: "50% Off For Your First Shopping", img: "/images/cart.png" },
    { id: 2, title: "New Summer Collection 2026", img: "/images/cart.png" },
    { id: 3, title: "Best Gadgets for Tech Lovers", img: "/images/cart.png" },
    { id: 4, title: "Free Shipping on All Orders", img: "/images/cart.png" },
  ];

  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      
      {/* Slides Inner */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`carousel-item ${index === 0 ? "active" : ""}`} // أول واحد بس بياخد active
          >
            <div className="hero-slide text-white">
              <div className="container h-100">
                <div className="row h-100 align-items-center px-3 mx-3">
                  
                  {/* Content */}
                  <div className="col-md-6">
                    <h1 className="fw-bold">{slide.title}</h1>
                    <p className="lead">Discover the best products at the lowest prices.</p>
                    <button className="btn btn-primary btn-lg">
                      Visit Our Collection
                    </button>
                  </div>

                  {/* Image */}
                  <div className="col-md-6 text-center">
                    <img
                      src={slide.img}
                      alt="shopping"
                      className="img-fluid hero-img"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}