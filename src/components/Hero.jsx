const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET <span className="deserve">DESERVE</span> <span className="the-best">THE BEST</span></h1>
        <p className="content">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button className="shop-now">SHOP NOW</button>
          <button className="catogory">CATOGORY</button>
        </div>

        <div className="shopping">
          <p><strong>Also Available On</strong></p>

          <div className="brand-icon">
            <img className="icon-1"
              src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/flipkart-512.png"
              alt="icon"
              width="60px"
            />
            <img className="icon-2"
              src="https://cdn0.iconfinder.com/data/icons/credit-8/512/23_credit-256.png"
              alt="icon"
              width="70px"
            />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://assets.website-files.com/6424429265b407347cfbf39e/644b8ea5be660b143654fc5e_3D-content-teaser.gif"
          alt="hero-shoe"
        />
      </div>
    </main>
  );
};

export default HeroSection;
