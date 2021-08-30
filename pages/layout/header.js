import { useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const header = () => {
    const addButtonHandler = (event) => {
        //Toggle Nav
        inputEl.current.classList.toggle("nav-active");
    };

    const inputEl = useRef(null);

    return (
        <>
            <Head>
                <title>AlexSP</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <nav className="header">
                <a href="/" className="navtitle">AlexSP</a>
                <ul className="nav-links headerUl" ref={inputEl}>
                    <Link href="/" ><h1 className="li">Home</h1></Link>
                    <Link href="/shop"><h1 className="li">Shop</h1></Link>
                    <Link href="/gallary"><h1 className="li">Gallery</h1></Link>
                    <Link href="/about"><h1 className="li">About</h1></Link>
                    <Link href="/contact"><h1 className="li">Contact</h1></Link>
                    <Link href="/shoppingCart"><h1 className="li"><i className="fa fa-shopping-cart"></i></h1></Link>
                </ul>
                <div className="burger" onClick={(event) => addButtonHandler(event)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </>
    )
}

export default header;