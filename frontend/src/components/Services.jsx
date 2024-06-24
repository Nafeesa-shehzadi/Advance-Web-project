import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/MENI&PEDI.jpg",
      title: " Manicures Pedicures",
    },
    {
      id: 2,
      url: "/FACIAL.jpg",
      title: "Facial Treatments",
    },
    {
      id: 3,
      url: "/hairstyle.jpg",
      title: "Hair Care",
    },
    {
      id: 4,
      url: "/bridalmakeup2.jpg",
      title: "Bridal Makeup",
    },
    {
      id: 5,
      url: "/makeup.jpg",
      title: "Party Makeup",
    },
    {
      id: 6,
      url: "/mehndi.jpeg",
      title: "Mehndi",
    },
    {
      id: 7,
      url: "/nailart3.jpg",
      title: "Nail Art",
    },
    {
      id: 8,
      url: "/wax.jpg",
      title: "Waxing",
    },
    {
      id: 9,
      url: "/threading.jpg",
      title: "Threading",
    },
  ];
  return (
    <>
      <div className="mx-3">
        <div className="services container">
          <h2>OUR SERVICES</h2>
          <div className="banner">
            {services.map((element) => {
              return (
                <Link
                  to={`/services/${element.title.replace(/ /g, "-")}`}
                  key={element.id}
                >
                  <div className="item" key={element.id}>
                    <h3>{element.title}</h3>
                    <img src={element.url} alt={element.title} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
