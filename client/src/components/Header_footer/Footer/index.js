import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

/* <div class="creator"></div> */

const Footer = ({data}) => {
    return (
        data.siteData ?
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                   <h1 className = "footer_heading"> STRINGS </h1> 
                    <h6 className= "footer_created">Created with  <span role="img" aria-label="sheep">💖</span> Zainab Fathima</h6>
                    </div>
                <div className="wrapper">
                    <div className="left">
                        <h2 className="footer_contact">Contact information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>{data.siteData[0].address}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>{data.siteData[0].phone}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Working hours</div>
                                    <div>{data.siteData[0].hours}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>{data.siteData[0].email}</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="left">
                        <h2 className="footer_h2">Be the first to know</h2>
                        <div>
                            <div className="footer_font" >
                            Get all the latest information on events, sales and offers.You can miss out.
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </footer>
       :null
    );
};

export default Footer;
// {data.siteData[0].email}
// {data.siteData[0].phone}
// {data.siteData[0].address}
// {data.siteData[0].hours}



