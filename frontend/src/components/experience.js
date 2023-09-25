import React from "react";
function Experience() {
  let currentCard = 1;

  function showCard(direction) {
    if (direction === "left") {
      currentCard = 1;
    } else if (direction === "right") {
      currentCard = 2;
    }

    document.querySelector(".card1").style.display =
      currentCard === 1 ? "block" : "none";
    document.querySelector(".card2").style.display =
      currentCard === 2 ? "block" : "none";
  }

  return (
    <div>
      <h1>EXPERIENCE</h1>

      <div className="left-right">
        <div className="arrow-container">
          <div className="left-arrow arrow" onClick={() => showCard("left")}>
            &lt;
          </div>
        </div>
        <div className="card1">
          <div className="card">
            <div className="container">
              <div className="title-date">
                <div className="title">
                  <h2>Full Stack Web Developer Way2Go </h2>
                </div>
                <div className="date">
                  <h2>June 2023 - Present</h2>
                </div>
              </div>
              <p>
                A Canadian-based company that offers a full 360-degree Digital
                Transformation and Marketing Solutions to clients.
              </p>
              <p>
                ● Collaborated with a diverse team to deliver high-quality
                websites to clients.
              </p>
              <p>
                ●Worked on both back-end and front-end using Laravel and ReactJs
                respectively.
              </p>
              <p>
                ● Contributed to the optimization and maintenance of existing
                websites, ensuring smooth performance and enhancing user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="card">
            <div className="container">
              <div className="title-date">
                <div className="title">
                <h2>Full Stack Web Developer Codi Tech </h2>
                </div>
                <div className="date">
                <h2>November 2022 – June 2023</h2>
              </div>
              </div>
              <p>
                An intensive boot-camp that aims to prepare students for the
                latest technology in programming to gain job skills needed in
                the market. I had the honor to work on several projects in teams
                that increased my collaboration skills and my leadership
                abilities.{" "}
              </p>
              <p>
                {" "}
                ● Developed various projects using different languages and
                platforms in the back-end including NodeJS, Express, PHP,
                Laravel, SQL and MongoDB.
              </p>
              <p> ● Worked on several front-end projects by using ReactJS.</p>
              <p>
                ● Used WordPress to create several websites including portfolios
                and e-commerce.
              </p>
              <p>
                ● Applied the AGILE methodology while working with diverse
                teams.
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-container">
          <div className="right-arrow arrow" onClick={() => showCard("right")}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
