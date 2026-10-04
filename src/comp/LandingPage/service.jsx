import { ServiceSection } from "../../assets/styles";
const serviceItems = [
  {
    year: "2026",
    role: "Reviewer",
    venue: "MICCAI 2026 Workshops",
    details: "CARE · MIRASOL · iMIMIC",
  },
  {
    year: "2026",
    role: "Reviewer",
    venue: "Deep Learning Indaba 2026",
  },
  {
    year: "2025",
    role: "Reviewer",
    venue: "Deep Learning Indaba 2025",
  },
];
const Service = () => {
  return (
    <ServiceSection id="service">
      <h1>Research Service</h1>
      {serviceItems.map((item, index) => (
        <div key={`${item.year}-${index}`} className="service-item">
          <div className="service-year">{item.year}</div>
          <div className="service-content">
            <h3 className="service-role">{item.role}</h3>
            <p className="service-venue">{item.venue}</p>
            {item.details && (
              <p className="service-workshops">{item.details}</p>
            )}
          </div>
        </div>
      ))}
    </ServiceSection>
  );
};
export default Service;