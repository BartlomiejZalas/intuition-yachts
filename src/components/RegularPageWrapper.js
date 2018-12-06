import React from "react";
import "./RegularPageWrapper.css";

const RegularPageWrapper = ({ children, title }) => (
    <div>
        <div className="fixed-width">
            <div className="page-photo" style={{ backgroundImage: `url(${require("./boats.jpg")})` }}></div>
        </div>
        <div className="container" style={{background: 'rgba(255,255,255, 0.85)'}}>
            <div className="row">
                <div className="col py-3">
                    <h2 className="display-4 py-3">{title}</h2><hr />
                    {children}
                </div>
            </div>
        </div>
        <footer className="footer text-center">
            <div className="container py-3">
                <hr />
                <small className="text-muted">Copyright &copy; Intuition Yachts Design Studio 2018</small>
            </div>
        </footer>
    </div>
);

export default RegularPageWrapper;