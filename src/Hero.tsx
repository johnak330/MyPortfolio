import "./Hero.css";

function Hero() {
  const cardImages = [
    {
      id: 1,
      img: "/images/html.jpg",
    },
    {
      id: 2,
      img: "/images/css.png",
    },
    {
      id: 3,
      img: "/images/js.png",
    },
    {
      id: 4,
      img: "/images/react.png",
    },
    {
      id: 5,
      img: "/images/node.jpg",
    },
    {
      id: 6,
      img: "/images/mongo.png",
    },
    {
      id: 7,
      img: "/images/typescript.webp",
    },
  ];

  return (
    <div className="hero-background">
      <div className="hero-container">
        <div className="headingbox">
          <h3 className="mainhead">john akinyemi</h3>
          <h2 className="mainheader">frontend web developer</h2>
        </div>
        <h1 className="head">PORTFOLIO</h1>
        <button className="contactme-btn">
          <a href="mailto:johnakinyemi330@gmail.com">Contact Me</a>
        </button>
        <div className="card-container">
          {cardImages.map((cardImage) => (
            <div key={cardImage.id}>
              <img className="card" src={cardImage.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
