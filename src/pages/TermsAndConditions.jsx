const Policies = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">

                    {/* Header */}
                    <div className="text-center mb-5">
                        <h1 className="fw-bold" style={{ color: '#014421' }}>
                            G&G Collective
                        </h1>
                        <h5 className="text-secondary">
                            Terms & Conditions | Store Rules
                        </h5>

                        <div
                            style={{
                                height: '4px',
                                width: '70px',
                                backgroundColor: '#FECB00',
                                margin: '12px auto'
                            }}
                        ></div>
                    </div>

                    {/* Policy Cards */}
                    <div className="mb-4 p-4 rounded-4 shadow-sm border">
                        <h5 style={{ color: '#014421' }}>
                            <span className="fw-bold">1.</span> UAAP Season Policy
                        </h5>
                        <p className="text-muted mb-0">
                            Items labeled as <strong>"UAAP Limited Edition"</strong> or <strong>"Championship Series"</strong>
                            are produced in limited quantities. Orders are processed on a first-come, first-served basis.
                            Adding items to your cart does not reserve them until checkout is completed.
                        </p>
                    </div>

                    <div className="mb-4 p-4 rounded-4 shadow-sm border">
                        <h5 style={{ color: '#014421' }}>
                            <span className="fw-bold">2.</span> Product Authenticity
                        </h5>
                        <p className="text-muted mb-0">
                            All merchandise sold through <strong>G&G Collective</strong> is officially licensed.
                            FEU logos and Tamaraw branding are protected trademarks. Unauthorized reproduction or resale
                            of these designs is strictly prohibited.
                        </p>
                    </div>

                    <div className="mb-4 p-4 rounded-4 shadow-sm border">
                        <h5 style={{ color: '#014421' }}>
                            <span className="fw-bold">3.</span> Order Processing & Game-Day Pickup
                        </h5>
                        <p className="text-muted mb-2">
                            <strong>Game-Day Pickup:</strong> Available at FEU Manila Campus or designated UAAP venues
                            such as Smart Araneta Coliseum or MOA Arena during game days.
                        </p>
                        <p className="text-muted mb-0">
                            <strong>Processing Time:</strong> Orders typically take 2–3 business days.
                            Processing may take longer during peak UAAP events such as Finals or Cheerdance Competition.
                        </p>
                    </div>

                    <div className="mb-4 p-4 rounded-4 shadow-sm border">
                        <h5 style={{ color: '#014421' }}>
                            <span className="fw-bold">4.</span> Sizing and Exchanges
                        </h5>
                        <p className="text-muted mb-0">
                            We recommend checking the Size Guide before purchasing, especially for athletic-fit apparel.
                            Exchanges are subject to stock availability. Items must be unused, in original condition,
                            and with tags attached.
                        </p>
                    </div>

                    <div className="mb-4 p-4 rounded-4 shadow-sm border">
                        <h5 style={{ color: '#014421' }}>
                            <span className="fw-bold">5.</span> Respect for the Brand
                        </h5>
                        <p className="text-muted mb-0">
                            Customers are expected to wear and represent FEU merchandise with pride and respect.
                            Misuse of branded items that may harm the reputation of Far Eastern University may
                            result in restricted access to future exclusive releases.
                        </p>
                    </div>

                    {/* Note Section */}
                    <div
                        className="p-4 rounded-4 mt-5"
                        style={{
                            backgroundColor: '#f8f9fa',
                            borderLeft: '6px solid #014421'
                        }}
                    >
                        <p className="mb-0 text-muted">
                            <strong>Note:</strong> Policies are subject to change in accordance with university
                            guidelines and UAAP event protocols. Please check this page regularly for updates.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Policies;