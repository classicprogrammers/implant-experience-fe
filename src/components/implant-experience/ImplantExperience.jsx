import { Link } from 'react-router-dom';
import johnOwens from '../../assets/images/JohnOwens.png';
import './ImplantExperience.css';

function ImplantExperience() {
    return (
        <section className="implant-experience-section">
            <div className="max-w-7xl mx-auto px-[15px]">
                <div className="john-owens-portrait">
                    <img src={johnOwens} alt="John P. Owens" className="john-portrait-img" />
                </div>
                <div className="implant-experience-container">
                    <div className="implant-experience-left">
                        <h2 className="implant-experience-title">During My Years Working With Hospitals,</h2>
                        <p className="implant-experience-description">
                            I Saw The Human Cost of Poor Device Oversight. Patients Like Angie Firmalino, Dr. Stephen Tower, and Thousands of Others Suffered Because Our System Prioritizes Speed to Market Over Safety.
                        </p>
                        <button className="implant-experience-btn">
                            <Link to="/signup">BECOME A MEMBER</Link>
                        </button>
                    </div>

                    <div className="implant-experience-right">
                        <div className="implant-experience-block">
                            <h3 className="implant-experience-subtitle">The Implant Experience is</h3>
                            <p className="implant-experience-text">Our Answer To A Broken System That Has Left Patients In The Dark For Too Long.</p>
                        </div>

                        <div className="implant-experience-block">
                            <h3 className="implant-experience-subtitle">His Mission:</h3>
                            <p className="implant-experience-text">Transform Device Tracking From A Regulatory Afterthought Into A Patient-Centered Right.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImplantExperience;

