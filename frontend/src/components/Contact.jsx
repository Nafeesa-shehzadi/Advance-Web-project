import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { treatments } from "./ServicesDetail";
import Select from "react-select";
const Contact = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [persons, setpersons] = useState("");
  const [service, setservice] = useState([]);
  const navigate = useNavigate();
  //const [selectedOptions, setSelectedOptions] = useState([]);
  const options = Object.keys(treatments).flatMap((category) => {
    return treatments[category].map((treatment) => ({
      value: treatment.name,
      label: `${treatment.name} - ${treatment.price}`,
    }));
  });
  console.log("option", options); // log the options array to the console

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      // user is not logged in, redirect to login form
      navigate("/login");
      return;
    }

    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          date,
          persons,
          service: service.join(","),
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setDate("");
        setpersons("");
        setservice([]);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <div className="mx-3">
        <div className="contact container">
          <div className="banner">
            <div className="item">
              <h4>Address</h4>
              <p>Jail Chowk, Gujrat, 50700</p>
            </div>
            <div className="item">
              <h4>Call Us</h4>
              <p>Call Us: +92-321-1111111</p>
            </div>
            <div className="item">
              <h4>Mail Us</h4>
              <p>Glamour@gmail.com</p>
            </div>
          </div>
          <div className="banner">
            <div className="item">
              <img
                src="/beauty.jpg"
                alt="beauty"
                className="w-[100px] h-[100px] "
                style={{ border: 0, width: "100%", height: "500px" }}
              />
            </div>
            <div className="item bg-white rounded shadow-lg">
              <form onSubmit={handleSendMessage}>
                <h2 className=" font-serif ">CONTACT</h2>
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <input
                  type="Number"
                  placeholder="Persons "
                  value={persons}
                  onChange={(e) => setpersons(e.target.value)}
                />
                <Select
                  isMulti
                  options={options}
                  value={service}
                  onChange={setservice}
                  placeholder="Select Services"
                  className="mt-2"
                />
                <p>
                  Selected options: {service.map((s) => s.label).join(", ")}
                </p>

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
