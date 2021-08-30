import Header from './layout/header';
import Footer from './layout/footer';

const contact = () => {
    return (
        <>
            <Header />
            <div className="contentcontact content">
                <h1 className="title">Contact</h1>
                <section>
                    <div className="uk-container">
                        <form className="uk-form-horizontal uk-margin-large" action="mailto:alec.nero.com@gmail.com" method="POST">
                            <div className="uk-margin">
                                <label className="uk-form-label">Name</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" placeholder="Your Name" required />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label">Email</label>
                                <div className="uk-form-controls">
                                    <input className="uk-input" placeholder="email@example.com" required />
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label">Message</label>
                                <div className="uk-form-controls">
                                    <textarea className="uk-textarea" for="subject" rows="5" placeholder="Type your message here..."
                                        required></textarea>
                                </div>
                            </div>
                            <div className="align-button-center">
                                <input className="uk-button uk-button-default" type="submit" />
                            </div>
                        </form>
                    </div>
                </section>
                <div>
                    <hr className="hr" />
                    <h2 className="or">Contact me at:</h2>
                    <div className="contactme">
                        <h3>Mail: alex@sporis.info</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default contact;