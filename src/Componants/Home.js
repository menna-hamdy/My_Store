import React from "react";
import { FaCar, FaCreditCard, FaShieldAlt, FaHeadphones } from "react-icons/fa";
import "../App.css"; 

export default function Home() {
const slides = [
    { 
      id: 1, 
      title: "50% Off For Your First Shopping",
      text: `Start your shopping journey with a special 50% OFF just for you! Shop top products, enjoy great deals, and experience smooth, hassle-free shopping from day one`, 
      img: process.env.PUBLIC_URL + "/images/cart.png" 
    },
    { 
      id: 2, 
      title: "New Summer Collection 2026",
      text: `"Embrace the sun with our exclusive 2026 Summer Line. Lightweight fabrics, bold designs, and fresh styles crafted to keep you cool and trendy all season long."`, 
      img: process.env.PUBLIC_URL + "/images/summer.png" 
    },
    { 
      id: 3, 
      title: "Best Gadgets for Tech Lovers", 
      text: `Upgrade your tech game! From smart devices to must-have accessories, discover the best gadgets for every tech enthusiast.`, 
      img: process.env.PUBLIC_URL + "/images/tech.png" 
    },
    { 
      id: 4, 
      title: "Free Shipping on All Orders", 
      text: `Shop your favorite products and get them delivered to your door fast and free. No hidden fees, no minimum order, just smooth shopping.`,  
      img: process.env.PUBLIC_URL + "/images/free.png" 
    },
];
  // ==============================
  const features = [
    {
      id: 1,
      icon: <FaCar size={23} />,
      title: "Free Shipping",
      text: "Enjoy fast delivery on all orders, right to your doorstep.",
      bgColor: "rgba(22, 22, 23, 0.37)", 
    },
    {
      id: 2,
      icon: <FaCreditCard size={23} />,
      title: "Safe Payment",
      text: "Your payment information is secure and fully protected.",
      bgColor: "rgba(27, 102, 75, 0.7)",
    },
    {
      id: 3,
      icon: <FaShieldAlt size={23} />,
      title: "Secure Payment",
      text: "Guaranteed protection for every purchase.",
      bgColor: "rgba(10, 87, 97, 0.7)", 
    },
    {
      id: 4,
      icon: <FaHeadphones size={23} />,
      title: "Back Guarantee",
      text: "Hassle-free returns for your satisfaction.",
      bgColor: "rgba(65, 140, 112, 0.55)", 
    },
  ];

  return (
    <div>
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
                      <p className="lead">{slide.text}</p>
                      <button className="btn btn-lg">
                        Visit Our Collection
                      </button>
                    </div>

                    {/* Image */}
                    <div className="col-md-6 text-center">
                      <img
                        src={slide.img}
                        alt="shopping"
                        className="img-fluid hero-img w-50"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="custom-control carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="custom-control carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      {/* ================================================ */}
      
      <div className="container py-5">
      <div className="row g-4 ">
        {features.map((feature) => (
          <div key={feature.id} className="col-12 col-md-6 col-lg-3">
            <div
              className={`d-flex flex-column align-items-center justify-content-center text-center p-4 rounded-4 `}
              style={{backgroundColor: feature.bgColor, height: "25vh",width:"100%", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
            >
              <div className="mb-3" style={{ backgroundColor: "white", borderRadius: "50%", padding: "15px" }}>
                {feature.icon}
              </div>
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="mb-0">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



    </div>
  );
}