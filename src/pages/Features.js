import featureImage from '../images/featureImage.png';

function Features() {
  return (
    <section id="features">
      <div className="features-model">
        <img src={featureImage} alt='img' />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>This Application <span>is Art</span>.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu ultrices lorem. Etiam dignissim faucibus luctus. Etiam sollicitudin, mi vel placerat tempor, dolor neque pellentesque erat, a convallis mauris nulla eget turpis.</p>
        <button>View More Features</button>
      </div>
    </section>
  );
}

export default Features;
