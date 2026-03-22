const Footer = () => {
    return (
        <footer className="bg-feu-dark text-white mt-5 text-center border-top border-feu-gold">
            <div className="container">
                {/* Slogan */}
                <h6 className="text-feu-gold fw-bold mb-1 x-small letter-spacing-2">
                    BE BRAVE. BE BOLD.
                </h6>
                {/* Copyright */}
                <p className="x-small opacity-75 mb-3">
                    &copy; 2026 G&G Collective • FEU Merchandising
                </p>
                
                {/* Social Links */}
                <div className="d-flex justify-content-center gap-4">
                    <a href="#" className="text-white hover-gold transition-all">
                        <i className="fab fa-facebook fa-sm"></i>
                    </a>
                    <a href="#" className="text-white hover-gold transition-all">
                        <i className="fab fa-twitter fa-sm"></i>
                    </a>
                    <a href="#" className="text-white hover-gold transition-all">
                        <i className="fab fa-instagram fa-sm"></i>
                    </a>
                </div>
                
                {/* Location */}
                <div className="mt-3 x-small opacity-50">
                    Manila, Philippines
                </div>
            </div>
        </footer>
    );
};

export default Footer;