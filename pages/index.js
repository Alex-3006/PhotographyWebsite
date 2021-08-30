import Categories from "./data/categories.json";
import Link from "next/link";
import Header from "./layout/header";
import Footer from "./layout/footer";

const index = () => {
  function onHoverImgAddHandler(event) {
    event.target.classList.add("infoimageHover");
  }

  function onHoverImgRemoveHandler(event) {
    event.target.classList.remove("infoimageHover");
  }

  return (
    <>
      <Header />
      <div className="startingimg content">
        <p src="../../assets/IMG_1531.JPG" alt="" className="img"></p>
        <h2 className="headline">I shoot photographs for any needs</h2>
        <Link href="/about">
          <button className="aboutButton">ABOUT ME</button>
        </Link>
      </div>
      <div className="shortinfos">
        <h1 className="shortinfotitle">Who am I?</h1>
        <div className="shortinfoscontainer">
          <div className="shortinfotext">
            <h2>
              I’m a freelance photographer specializing in landscape,
              advertorial and conceptual photography, based near Frankfurt am
              Main. I love to turn ideas into beautiful things.
            </h2>
          </div>
          <div className="box bg-opacity-dark inverse-text">
            <div className="row">
              <div className="col-sm-4">
                <h3>My Skills</h3>
                <ul className="progress-list">
                  <li>
                    <p>Landscape Photography</p>
                    <div
                      className="progressbar line border yellow"
                      data-value="90"
                    >
                      <svg
                        viewBox="0 0 100 3"
                        preserveAspectRatio="none"
                        className="svg"
                      >
                        <path
                          d="M 0,1.5 L 100,1.5"
                          stroke="#eee"
                          strokeWidth="3"
                          fillOpacity="0"
                        ></path>
                        <path
                          d="M 0,1.5 L 100,1.5"
                          stroke="#555"
                          strokeWidth="3"
                          fillOpacity="0"
                          className="path1"
                        ></path>
                      </svg>
                      <div className="progressbar-text div">90 %</div>
                    </div>
                  </li>
                  <li>
                    <p>DaVinci Resolve</p>
                    <div
                      className="progressbar line border pink"
                      data-value="80"
                    >
                      <svg
                        viewBox="0 0 100 3"
                        preserveAspectRatio="none"
                        className="svg"
                      >
                        <path
                          d="M 0,1.5 L 100,1.5"
                          stroke="#eee"
                          strokeWidth="3"
                          fillOpacity="0"
                        ></path>
                        <path
                          d="M 0,1.5 L 100,1.5"
                          stroke="#555"
                          strokeWidth="3"
                          fillOpacity="0"
                          className="path2"
                        ></path>
                      </svg>
                      <div className="progressbar-text div">80 %</div>
                    </div>
                  </li>
                  <li>
                    <p>Portrait Photography</p>
                    <div
                      className="progressbar line border purple"
                      data-value="85"
                    >
                      <svg
                        viewBox="0 0 100 3"
                        preserveAspectRatio="none"
                        className="svg"
                      >
                        <path
                          d="M 0,1.5 L 100,1.5"
                          stroke="#eee"
                          strokeWidth="3"
                          fillOpacity="0"
                        ></path>
                        <path
                          d="M 0,1.5 L 100,1.5"
                          stroke="#555"
                          strokeWidth="3"
                          fillOpacity="0"
                          className="path3"
                        ></path>
                      </svg>
                      <div className="progressbar-text div">85 %</div>
                    </div>
                  </li>
                  <li>
                    <p>Long Exsposure Photography</p>
                    <div
                      className="progressbar line border brown"
                      data-value="65"
                    >
                      <svg
                        viewBox="0 0 100 3"
                        preserveAspectRatio="none"
                        className="svg"
                      >
                        <path
                          d="M 0,1.5 L 100,1.5"
                          stroke="#eee"
                          strokeWidth="3"
                          fillOpacity="0"
                        ></path>
                        <path
                          d="M 0,1.5 L 100,1.5"
                          stroke="#555"
                          strokeWidth="3"
                          fillOpacity="0"
                          className="path4"
                        ></path>
                      </svg>
                      <div className="progressbar-text div">65 %</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="categories">
        {Categories.map((project) => (
          <div className="subclass" key={project.id}>
            <h2 className="categorietitle">{project.title}</h2>
            <h4 className="categorietext">{project.description}</h4>
          </div>
        ))}
      </div>
      <div className="projectsInfo">
        {Categories.map((project) => (
          <Link href={project.path} key={project.id}>
            <div className="infosections">
              <h1 className="infotext">{project.title}</h1>
              <img src={project.img} className="infoimage" alt="" />
            </div>
          </Link>
        ))}
        <div className="moreInfo">
          <Link href="/gallary" className="infolink">
            <h2 className="moreInfotext">View all projects</h2>
          </Link>
          <hr className="moreInfohr" />
        </div>
      </div>
      <div className="follow">
        <img
          src="../../assets/IMG_2034_cropped.jpg"
          alt=""
          className="followimg"
        ></img>
        <hr className="followhr" />
        <h2 className="followtext">Follow me on social media</h2>
        <div className="icons">
          <a
            href="https://www.instagram.com/alexsp3066/"
            className="followicon"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://twitter.com/Alex55578024" className="followicon">
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/alexandru.matei.sporis"
            className="followicon"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
