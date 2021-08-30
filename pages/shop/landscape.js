import Header from "../layout/header";
import Footer from "../layout/footer";
import Data from "../data/data.json";
import Link from "next/link";

const landscape = () => {
  return (
    <>
      <Header />
      <div className="content">
        <h1 className="title">Landscape</h1>
        <div className="subcatshopcategories">
          {Data.map((project) => (
            <span key={project.id} className="subcatspan">
              {project.category == "landscape" && (
                <div className="subcatspanmade">
                  <Link
                    href={{
                      pathname: "/shop/landscape/preview/",
                      query: { id: project.id },
                    }}
                  >
                    <img src={project.img} className="subcatshopgallaryimg" />
                  </Link>
                  <Link
                    href={{
                      pathname: "/shop/landscape/preview/",
                      query: { id: project.id },
                    }}
                  >
                    <h2 className="subcatshopimgtitel">{project.titleeng}</h2>
                  </Link>
                  <Link
                    href={{
                      pathname: "/shop/landscape/preview/",
                      query: { id: project.id },
                    }}
                  >
                    <h4 className="subcatshopimgprice">
                      from: {project.price}
                    </h4>
                  </Link>
                </div>
              )}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default landscape;
