import { useEffect, useState, useRef } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { useRouter } from "next/router";
import Data from "../../data/data.json";
import Link from "next/link";

const preview = () => {
  const [el, setEl] = useState(null);
  const sizeRef = useRef(null);
  const quantityRef = useRef(null);
  const borderRef = useRef(null);

  const router = useRouter();
  const { asPath } = router;

  let goodid = asPath.substr(27, 62);
  let elm;

  useEffect(() => {
    elm = Data.filter((element) => goodid === element.id);
    if (elm) {
      setEl(elm[0]);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <Link href="/shop/landscape">
          <h1 className="backtext">
            <span className="backsign"></span> Back to the shop
          </h1>
        </Link>
        <div className="prevrow">
          <img src={el && el.img} className="imgprev" />
          <div className="prewtextsection">
            <h1 className="prevtitle">{el && el.titleeng}</h1>
            <h1 className="prevpricetag">
              {sizeRef.current &&
                (sizeRef.current.selectedIndex == 0
                  ? "from 50€"
                  : sizeRef.current.selectedIndex == 1
                  ? "50€"
                  : sizeRef.current.selectedIndex == 2
                  ? "75€"
                  : sizeRef.current.selectedIndex == 3
                  ? "100€"
                  : null)}
              <span className="prevothercosts">
                All other costs at the checkout
              </span>
            </h1>
            <h1 className="prevdescription">{el && el.descriptioneng}</h1>
            <h1 className="prevlocationtag">
              <span className="prevlocation">Location:</span>
              {el && el.location}
            </h1>
            <div className="prevrow">
              <div className="dropdown">
                <p>Size:</p>
                <select name="size" ref={sizeRef}>
                  <option value="0">--Please choose an option--</option>
                  <option value="1">A4(50€)</option>
                  <option value="2">A3(75€)</option>
                  <option value="3">A2(100€)</option>
                </select>
              </div>
              <div className="dropdown">
                <p>Quantiy:</p>
                <select name="quantity" ref={quantityRef}>
                  <option value="0">--Please choose an option--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="prevrow">
              <div className="dropdown">
                <p>Border:</p>
                <select name="border" ref={borderRef}>
                  <option value="0">--Please choose an option--</option>
                  <option value="1">None</option>
                  <option value="2">White</option>
                  <option value="3">Black</option>
                </select>
              </div>
              <Link
                href={{
                  pathname: "/shoppingCart/",
                  query: {
                    quanitiy: quantityRef.current && quantityRef.current.selectedIndex,
                    size: sizeRef.current && sizeRef.current.selectedIndex,
                    border: borderRef.current && borderRef.current.selectedIndex,
                    img: goodid,
                  },
                }}
              >
                <input
                  type="submit"
                  value="Add to cart"
                  className="prevsubmit"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default preview;
