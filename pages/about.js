import Header from './layout/header';
import Footer from './layout/footer';

const about = () => {
    return (
        <>
            <Header />
            <div className="content">
                <div>
                    <h1 className="title">About Alexandru Sporis</h1>
                </div>
                <div className="row">
                    <img src="assets/IMG_1909.JPG" alt="" className="aboutimg" role="" />
                    <div className="abouttext">
                        <h4>Hi, my name is Alexandru Sporis and I am a 9th class student near Frankfurt am Main in Bavaria,
                        Germany. I like it to take photos
                        since I was a little kid and as I got older I started getting deeper into photography. With 13 years
                        I bought my first Dslr and
                        took since then every week at least one photo. My favorit type of photography is the landscape-photography.
                        The greatest places to take
                        for this type of pictures are the mountains of romainia where I go as often as possible. </h4>
                        <div className="box bg-opacity-dark inverse-text">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h3>My Skills</h3>
                                    <ul className="progress-list">
                                        <li>
                                            <p>Landscape Photography</p>
                                            <div className="progressbar line border yellow" data-value="90">
                                                <svg viewBox="0 0 100 3" preserveAspectRatio="none" className="svg">
                                                    <path d="M 0,1.5 L 100,1.5" stroke="#eee" strokeWidth="3" fillOpacity="0"></path>
                                                    <path d="M 0,1.5 L 100,1.5" stroke="#555" strokeWidth="3" fillOpacity="0" className="path1"></path>
                                                </svg>
                                                <div className="progressbar-text div">
                                                    90 %
                                        </div>
                                            </div>
                                        </li>
                                        <li>
                                            <p>DaVinci Resolve</p>
                                            <div className="progressbar line border pink" data-value="80">
                                                <svg viewBox="0 0 100 3" preserveAspectRatio="none" className="svg">
                                                    <path d="M 0,1.5 L 100,1.5" stroke="#eee" strokeWidth="3" fillOpacity="0"></path>
                                                    <path d="M 0,1.5 L 100,1.5" stroke="#555" strokeWidth="3" fillOpacity="0" className="path2"></path>
                                                </svg>
                                                <div className="progressbar-text div">
                                                    80 %
                                        </div>
                                            </div>
                                        </li>
                                        <li>
                                            <p>Portrait Photography</p>
                                            <div className="progressbar line border purple" data-value="85">
                                                <svg viewBox="0 0 100 3" preserveAspectRatio="none" className="svg">
                                                    <path d="M 0,1.5 L 100,1.5" stroke="#eee" strokeWidth="3" fillOpacity="0"></path>
                                                    <path d="M 0,1.5 L 100,1.5" stroke="#555" strokeWidth="3" fillOpacity="0" className="path3"></path>
                                                </svg>
                                                <div className="progressbar-text div">
                                                    85 %
                                        </div>
                                            </div>
                                        </li>
                                        <li>
                                            <p>Long Exsposure P.</p>
                                            <div className="progressbar line border brown" data-value="65">
                                                <svg viewBox="0 0 100 3" preserveAspectRatio="none" className="svg">
                                                    <path d="M 0,1.5 L 100,1.5" stroke="#eee" strokeWidth="3" fillOpacity="0"></path>
                                                    <path d="M 0,1.5 L 100,1.5" stroke="#555" strokeWidth="3" fillOpacity="0" className="path4"></path>
                                                </svg>
                                                <div className="progressbar-text div">
                                                    65 %
                                        </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default about;