import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Gradient Maker",
      description:
        "Create a gradient background using CSS. Click to have a look!",
      image: "/images/gradient.png",
      src: "https://frolicking-sfogliatella-7db79c.netlify.app",
    },
    {
      id: 2,
      title: "Job Search",
      description: "Find the perfect job for you. Click to have a look!",
      image: "/images/webwork.png",
      src: "https://calm-bienenstitch-510d4a.netlify.app",
    },
  ];

  return (
    <div className="portfolio-background">
      <div className="container">
        <h1 className="portfolio-heading">PORTFOLIO</h1>
        <div className="portfolio-container">
          <div>
            {projects.map((project) => (
              <div key={project.id} className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a href={project.src}>
                  <img
                    className="portfolioImg"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
