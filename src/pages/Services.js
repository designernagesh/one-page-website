import ServiceItem from "../components/ServiceItem";
import data from '../data/data';

const Services = () => {
  return (
    <section id="services">
      <div className="s-heading">
        <h2>Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu ultrices lorem.</p>
      </div>
      <div className="b-container">
        {
          data.map((service, i) => {
            return (
              <ServiceItem service={service} key={i} />
            )
          })
        }
      </div>
    </section>
  );
};

export default Services;
