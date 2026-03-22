const About = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">

                    <div
                        className="p-5 rounded-4 shadow"
                        style={{
                            backgroundColor: '#ffffff',
                            borderTop: '5px solid #014421'
                        }}
                    >
                        {/* Title */}
                        <h2
                            className="fw-bold text-center mb-3"
                            style={{ color: '#014421' }}
                        >
                            About G&G Collective
                        </h2>

                        {/* Divider */}
                        <div
                            style={{
                                width: '80px',
                                height: '4px',
                                backgroundColor: '#FECB00',
                                margin: '0 auto 20px auto',
                                borderRadius: '2px'
                            }}
                        ></div>

                        {/* Intro */}
                        <p className="text-center fs-5 mb-4">
                            Founded in 1928, Far Eastern University has always been a home for the brave.
                            <strong> G&G Collective</strong> is dedicated to providing high-quality,
                            official UAAP merchandise that allows every Tamaraw to wear their pride on their sleeves.
                        </p>

                        <p className="text-center mb-4">
                            Our mission is to offer premium products at affordable prices, ensuring that
                            every student, alumni, and fan can support the green and gold.
                        </p>

                        {/* Mission & Vision */}
                        <div className="row text-center mb-4">
                            <div className="col-md-6 mb-3">
                                <div className="p-3 rounded-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                    <h5 className="fw-bold" style={{ color: '#014421' }}>Our Mission</h5>
                                    <p className="mb-0 small">
                                        To deliver authentic and high-quality UAAP merchandise that strengthens
                                        school pride and community spirit.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="p-3 rounded-3 h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                    <h5 className="fw-bold" style={{ color: '#014421' }}>Our Vision</h5>
                                    <p className="mb-0 small">
                                        To become the leading source of official collegiate merchandise that inspires
                                        unity, pride, and excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="mb-4">
                            <h5 className="fw-bold text-center mb-3" style={{ color: '#014421' }}>
                                Our Core Values
                            </h5>

                            <ul className="list-group list-group-flush text-center">
                                <li className="list-group-item">✔ Authenticity and Quality</li>
                                <li className="list-group-item">✔ Integrity and Trust</li>
                                <li className="list-group-item">✔ Community and Pride</li>
                                <li className="list-group-item">✔ Excellence in Service</li>
                            </ul>
                        </div>

                        {/* What We Offer */}
                        <div className="mb-4 text-center">
                            <h5 className="fw-bold mb-3" style={{ color: '#014421' }}>
                                What We Offer
                            </h5>
                            <p className="mb-0">
                                We provide a wide range of official UAAP apparel and accessories including jerseys,
                                shirts, hoodies, and collectibles designed for students, alumni, and fans.
                            </p>
                        </div>

                        {/* Highlight */}
                        <div
                            className="mt-4 p-3 rounded-3 text-center"
                            style={{
                                backgroundColor: '#f8f9fa',
                                border: '1px solid #e9ecef'
                            }}
                        >
                            <small style={{ color: '#555' }}>
                                Proudly serving the Tamaraw community with official UAAP merchandise.
                            </small>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;