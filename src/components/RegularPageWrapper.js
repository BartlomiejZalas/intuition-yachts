import React from "react";
import "./RegularPageWrapper.css";
import Slider from "./Slider/Slider";

const RegularPageWrapper = ({ children, title }) => (
    <div>
        <div className="container" style={{ background: 'rgba(255,255,255, 0.85)' }}>
            <div className="row">
                <div className="col">
                    <Slider />
                </div>
            </div>
        </div>
        <div className="container" style={{ background: 'rgba(255,255,255, 0.85)' }}>
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
                <small className="text-muted">Copyright &copy; Intuition Yachts Design Studio {new Date().getFullYear()}</small>
            </div>
        </footer>
    </div >
);

export default RegularPageWrapper;