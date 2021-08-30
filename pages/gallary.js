import Data from './data/data.json';
import Header from './layout/header';
import Footer from './layout/footer';

const gallary = () => {
    return (
        <>
            <Header />
            <div className="content">
                <h1 className="title">Gallery</h1>
                <div className="gallary">
                    {Data.map(project => (
                        <div className="imgsection" key={project.id}>
                            <img src={project.img} className="gallaryimg"></img>
                            <h2 className="imgtitle">{project.titleeng}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default gallary;