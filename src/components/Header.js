import Navbar from "./Navbar";

const Header = () => {
  return (
    <section id="intro">
      <Navbar />
      <div className="header">
        <h1>
          It's a <span>ReactJS</span> Website
        </h1>
        <p className="details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu ultrices lorem. Etiam dignissim faucibus luctus. 
        </p>
        <div className="header-btns">
          <a hef="#" className="cv-btn">
            Join Me
          </a>
          <a hef="#" className="cv-btn1">
            Download
          </a>
        </div>
      </div>
      <div className="arrow"></div>
    </section>
  );
};

export default Header;
