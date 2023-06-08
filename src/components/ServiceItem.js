function ServiceItem({ service }) {
    return (
        <div className="s-box">
            <div className="s-b-img">
                <img src={service.image} alt={service.title} />
            </div>
            <div className="s-b-text">
                <p>{service.description}</p>
                <a href="#" className="cv-btn">{service.btnName}</a>
            </div>
        </div>
    );
  }
  
  export default ServiceItem;
  