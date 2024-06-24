import React from "react";
import { useParams } from "react-router-dom";
export const treatments = {
  "Facial Treatments": [
    { name: "Blue", price: "$200" },
    { name: "Chemical Peels", price: "$150" },
    { name: "Laser Skin Rejuvenation", price: "$180" },
    { name: "Diamond Glow", price: "$250" },
    { name: "Hydrafacial", price: "$220" },
    { name: "Fraxel Skin Resurfacing", price: "$300" },
    { name: "IPL Photo Rejuvenation", price: "$170" },
    { name: "IS Clinical Fire & Ice Resurfacing", price: "$200" },
  ],
  "Hair Care": [
    { name: "Keratin Treatment", price: "$200" },
    { name: "Scalp Treatment", price: "$150" },
    { name: "Hot Oil Treatment", price: "$180" },
    { name: "Moisture Treatment", price: "$250" },
    { name: "Detox Treatment", price: "$220" },
    { name: "Relax Treatment", price: "$300" },
    { name: "Toning Treatment", price: "$170" },
    { name: "Hair Glossing Treatment", price: "$200" },
  ],
  " Manicures Pedicures": [
    { name: "French Manicure", price: "$200" },
    { name: "Basic Manicure", price: "$150" },
    { name: "Acrylic Manicure", price: "$180" },
    { name: "Gel Manicure", price: "$250" },
    { name: "Spa Pedicure", price: "$220" },
    { name: "Stone Pedicure", price: "$300" },
    { name: "Spa Pedicure", price: "$170" },
    { name: "Paraffin Pedicure", price: "$200" },
  ],
  Waxing: [
    { name: "Full Body Waxing", price: "$200" },
    { name: "Bikini Waxing", price: "$150" },
    { name: "Underarm Waxing", price: "$50" },
    { name: "Leg Waxing", price: "$100" },
    { name: "Arm Waxing", price: "$80" },
    { name: "Face Waxing", price: "$60" },
    { name: "Chest Waxing", price: "$120" },
    { name: "Back Waxing", price: "$140" },
  ],
  Mehndi: [
    { name: "Traditional Bridal Mehndi", price: "$200" },
    { name: "Arabic Mehndi", price: "$150" },
    { name: "Indo-Arabic Mehndi", price: "$180" },
    { name: "Glitter Mehndi", price: "$250" },
    { name: "Rajasthani Mehndi", price: "$220" },
    { name: "Pakistani Mehndi", price: "$300" },
    { name: "party Mehndi", price: "$300" },
    { name: "bridal Mehndi", price: "$300" },
  ],
  "Bridal Makeup": [
    { name: "Full Face Bridal Makeup", price: "$300" },
    { name: "Airbrush Bridal Makeup", price: "$350" },
    { name: "Traditional Bridal Makeup", price: "$250" },
    { name: "HD Bridal Makeup", price: "$400" },
    { name: "Smokey Eye Bridal Makeup", price: "$320" },
    { name: "Bohemian Bridal Makeup", price: "$320" },
    { name: "classic Eye Bridal Makeup", price: "$320" },
    { name: "Matte Bridal Makeup", price: "$320" },
  ],
  "Party Makeup": [
    { name: "Full Face Party Makeup", price: "$150" },
    { name: "HD Party Makeup", price: "$180" },
    { name: "Arabic Party Makeup", price: "$200" },
    { name: "Glitter Party Makeup", price: "$220" },
    { name: "Natural Party Makeup", price: "$120" },
    { name: "Smokey Eye Bridal Makeup", price: "$320" },
    { name: "pastel Eye Bridal Makeup", price: "$320" },
    { name: "Mineral Eye Bridal Makeup", price: "$320" },
  ],
  Threading: [
    { name: "Eyebrows", price: "$15" },
    { name: "Upper Lip", price: "$10" },
    { name: "Chin", price: "$10" },
    { name: "Full Face", price: "$30" },
    { name: "Neck Threading", price: "$30" },
    { name: "Arm Threading", price: "$30" },
    { name: "Forehead Threading", price: "$30" },
  ],
  "Nail Art": [
    { name: "Floral Nails", price: "$50" },
    { name: "Dot Nails", price: "$80" },
    { name: "Nature-Inspired Nails", price: "$60" },
    { name: "Line Art Nails", price: "$70" },
    { name: "Black & White Nails", price: "$40" },
    { name: "Roofed Nails", price: "$40" },
    { name: "Moon Nail Art", price: "$40" },
    { name: "Ombré Nails", price: "$40" },
  ],
};
const ServicesDetail = () => {
  const { serviceName } = useParams();
  const formattedServiceName = decodeURIComponent(serviceName).replace(
    /-/g,
    " "
  );

  const currentTreatments = treatments[formattedServiceName];

  return (
    <div className="service-detail">
      <h1>{formattedServiceName}</h1>
      {currentTreatments && (
        <table className="facial-treatments-table">
          <thead>
            <tr>
              <th>Treatment</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {currentTreatments.map((treatment, index) => (
              <tr key={index}>
                <td>{treatment.name}</td>
                <td>{treatment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ServicesDetail;
