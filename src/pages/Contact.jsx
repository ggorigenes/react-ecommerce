const Contact = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">

                <div className="col-lg-10">
                    <div
                        className="p-5 rounded-4 shadow"
                        style={{
                            backgroundColor: '#ffffff',
                            borderTop: '5px solid #006241'
                        }}
                    >
                        <div className="row">

                            {/* LEFT: CONTACT INFO */}
                            <div className="col-md-5 mb-4">
                                <h3 className="fw-bold mb-3" style={{ color: '#006241' }}>
                                    Get in Touch
                                </h3>

                                <p className="text-muted mb-4">
                                    We'd love to hear from you. Reach out using the form or contact us directly.
                                </p>

                                <div className="mb-3">
                                    <strong>📧 Email:</strong>
                                    <p className="mb-0">support@ggcollective.com</p>
                                </div>

                                <div className="mb-3">
                                    <strong>📞 Phone:</strong>
                                    <p className="mb-0">+63 912 345 6789</p>
                                </div>

                                <div className="mb-3">
                                    <strong>📍 Location:</strong>
                                    <p className="mb-1">Main Branch: Far Eastern University, Manila</p>

                                    <p className="mb-1"><strong>Other Branches:</strong></p>
                                    <ul className="mb-0 ps-3">
                                        <li>FEU Makati</li>
                                        <li>FEU Cavite</li>
                                        <li>FEU Roosevelt</li>
                                        <li>FEU Tech</li>
                                        <li>FEU Diliman</li>
                                        <li>FEU Alabang</li>
                                    </ul>
                                </div>

                                {/* Socials */}
                                <div className="mt-4">
                                    <strong>Follow Us:</strong>
                                    <div className="d-flex gap-3 mt-2">
                                        <a href="#" className="social-link">Facebook</a>
                                        <a href="#" className="social-link">Instagram</a>
                                        <a href="#" className="social-link">Twitter</a>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: FORM */}
                            <div className="col-md-7">
                                <h4 className="fw-bold mb-3" style={{ color: '#006241' }}>
                                    Send a Message
                                </h4>

                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-semibold">Message</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Write your message..."
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn w-100 py-2 fw-bold"
                                        style={{
                                            backgroundColor: '#006241',
                                            color: 'white',
                                            border: 'none'
                                        }}
                                        onMouseOver={(e) =>
                                            (e.currentTarget.style.backgroundColor = '#228B22')
                                        }
                                        onMouseOut={(e) =>
                                            (e.currentTarget.style.backgroundColor = '#006241')
                                        }
                                    >
                                        <i className="fas fa-paper-plane me-2"></i>
                                        Send Message
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;