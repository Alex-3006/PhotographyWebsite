import Header from './layout/header';
import Footer from './layout/footer';
import Categories from './data/categories.json';
import Link from 'next/link';

const shop = () => {
    return (
        <>
            <Header />
            <div className="content">
                <h1 className="title">Shop</h1>
                <div className="shopcategories">
                    {Categories.map(project => (
                        <div className="shopimgsection" key={project.id}>
                            <Link href={project.path}><img className="shopgallaryimg" src={project.img} /></Link>
                            <Link href={project.path}><h4 className="shopimgtitel">{project.title}</h4></Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
};

export default shop;